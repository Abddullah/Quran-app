import React from 'react';
import { StyleSheet, Text, View, AsyncStorage, SafeAreaView, FlatList, Modal, TouchableOpacity, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import axios from 'axios';
import { Audio } from 'expo-av';

class AyahDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            AyahDetail: [],
            ayahNumber: this.props.navigation.state.params.number,
            name: this.props.navigation.state.params.name,
            translation: this.props.navigation.state.params.englishNameTranslation,
            numberOfAyahs: this.props.navigation.state.params.numberOfAyahs,
            showMe: false,
            audioBar: false,
            playingStatus: 'nosound',
            isPlay: false,
            audioURL: '',
            audioArray: [],
            paused: false
        }
    }

    componentDidMount() {
        const { params } = this.props.navigation.state;
        this.getAPI(false)
    }


    UNSAFE_componentWillReceiveProps(props) {
        const { params } = props.navigation.state;
        this.getAPI(params.identifier)
    }

    async getAPI(e) {

        var translate = e ? e : "en.asad"

        await axios.get(`http://api.alquran.cloud/v1/surah/${this.state.ayahNumber}/${translate}`)
            .then((translationResponse) => {
                if (translationResponse.data.code === 200) {
                    var trans = translationResponse.data.data.ayahs;
                    axios.get(`http://api.alquran.cloud/v1/surah/${this.state.ayahNumber}`)
                        .then((response) => {
                            if (response.data.code === 200) {
                                var scores = response.data.data.ayahs;
                                var keys = Object.keys(scores);
                                let array = [];
                                for (var i = 0; i < keys.length; i++) {

                                    var k = keys[i];
                                    let obj = {
                                        data: scores[k],
                                        engData: trans[k],
                                    }
                                    array.push(obj)
                                }
                                this.setState({ AyahDetail: array })

                            }
                        })
                        .catch((error) => {
                            Alert.alert("Please Check Your Internet Connection");
                        });
                }
            });
    }

    renderRow = ({ item, index }) => {
        const { params } = this.props.navigation.state
        return (
            <View style={{ marginHorizontal: 15, borderBottomWidth: 1, flex: 1 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 14, marginTop: 5 }}>{item.data.numberInSurah}</Text>
                    <SimpleLineIcons style={{ color: 'black', }} name="options" size={25}
                        onPress={() => this.showModal(item)} />
                </View>
                <Text style={{ fontWeight: 'bold', fontSize: 16, marginTop: 15 }}>{item.data.text}</Text>
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Translation',
                        {
                            number: this.props.navigation.state.params.number,
                            name: this.props.navigation.state.params.name,
                            translation: this.props.navigation.state.params.englishNameTranslation,
                            ayah: this.props.navigation.state.params.numberOfAyahs
                        })}
                >

                    <Text style={{ fontWeight: 'bold', fontSize: 14, marginTop: 10 }}
                    >{item.engData.text}</Text>
                </TouchableOpacity>
            </View>
        )
    }
    showModal(item) {
        this.setState({ audioURL: item.data.number, showMe: true, })

    }


    // ##########################################################################################################
    // ################################## Audio Portion #########################################################
    // ##########################################################################################################

    async _playRecording() {
        // for (var i = this.state.audioURL; i < this.state.AyahDetail.length; i++) {
        const { sound } = await Audio.Sound.createAsync(


            { uri: `https://cdn.alquran.cloud/media/audio/ayah/ar.alafasy/${this.state.audioURL}` },
            {
                shouldPlay: true,
                isLooping: false,
            },
            this._updateScreenForSoundStatus,
        );
        this.sound = sound;
        this.setState({
            playingStatus: 'playing',
        });
        // }
    }

    _updateScreenForSoundStatus = (status) => {
        if (status.isPlaying && this.state.playingStatus !== "playing") {
            this.setState({ playingStatus: "playing" });
        } else if (!status.isPlaying && this.state.playingStatus === "playing") {
            this.setState({ playingStatus: "donepause" });
        }
        var count = this.state.audioURL
        if (count < this.state.AyahDetail.length) {
            if (status.didJustFinish === true && !this.state.paused) {
                this.setState({ audioURL: count + 1 }, () => {
                    this._playRecording()
                });
            }
        }
    };

    async _pauseAndPlayRecording() {
        if (this.sound != null) {
            if (this.state.playingStatus == 'playing') {
                console.log('pausing...');
                console.log('paused!');
                this.setState({
                    playingStatus: 'donepause',
                    paused: true
                });
                await this.sound.pauseAsync();
            } else {
                console.log('playing...');
                console.log('playing!');
                this.setState({
                    playingStatus: 'playing',
                    paused: false
                });
                await this.sound.playAsync();
            }
        }
    }

    _syncPauseAndPlayRecording() {
        if (this.sound != null) {
            if (this.state.playingStatus == 'playing') {
                this.sound.pauseAsync();
            } else {
                this.sound.playAsync();
            }
        }
    }

    _playAndPause = () => {
        switch (this.state.playingStatus) {
            case 'nosound':
                this._playRecording();
                break;
            case 'donepause':
            case 'playing':
                this._pauseAndPlayRecording();
                break;
        }
    }
    PlayPauseButton() {
        if (this.state.playingStatus === "playing") {
            return (
                <Entypo style={{ color: 'white' }} name="controller-paus" size={25}
                    onPress={this._playAndPause} />
            )
        }
        else {
            return (
                <Entypo style={{ color: 'white' }} name="controller-play" size={25}
                    onPress={this._playAndPause} />
            )
        }
    }
    PlayNext() {
        const increase = this.state.audioURL;
        const next = increase + 1;
        this.setState({ audioURL: next });
        this._playRecording()
    }
    // ################################################################################################

    render() {
        return (
            <SafeAreaView style={styles.container}>


                <View style={{ height: 70, backgroundColor: 'black', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Ionicons style={{ color: 'white', marginLeft: 15, marginTop: 30 }} name="md-arrow-back" size={30}
                        onPress={() => this.props.navigation.navigate('DashBoard')}
                    />
                    <View style={{ flexDirection: 'row', marginTop: 30 }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>{this.state.ayahNumber}-</Text>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>{this.state.name}</Text>
                    </View>
                    <View style={{ height: 70, backgroundColor: 'black' }}>
                        <Feather style={{ color: 'white', marginRight: 15, marginTop: 30 }} name="settings" size={30} />
                    </View>
                </View>

                <View style={{
                    flexDirection: 'row', marginTop: 15, justifyContent: 'center',
                    alignItems: 'center', marginHorizontal: 0, height: 50,
                    // backgroundColor: "red"
                }}>
                    <ScrollView style={{ marginHorizontal: "5%" }}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    >
                        <TouchableOpacity style={{ backgroundColor: "black", height: 50, width: 100, justifyContent: "center", alignItems: "center", padding: 2, borderRadius: 5 }}>
                            <Text style={{ color: this.state.SourateState ? 'white' : 'white', fontSize: 12, textAlign: "center", fontWeight: "bold" }}>Write ayah no's and print</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ backgroundColor: "black", height: 50, width: 100, justifyContent: "center", alignItems: "center", padding: 2, marginLeft: 5, borderRadius: 5 }}>
                            <Text style={{ color: this.state.SourateState ? 'white' : 'white', fontSize: 12, textAlign: "center", fontWeight: "bold" }}>Open all the bookmarks</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ backgroundColor: "black", height: 50, width: 100, justifyContent: "center", alignItems: "center", padding: 2, marginLeft: 5, borderRadius: 5 }}>
                            <Text style={{ color: this.state.SourateState ? 'white' : 'white', fontSize: 12, textAlign: "center", fontWeight: "bold" }}>Share all ayah of root</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ backgroundColor: "black", height: 50, width: 100, justifyContent: "center", alignItems: "center", padding: 2, marginLeft: 5, borderRadius: 5 }}>
                            <Text style={{ color: this.state.SourateState ? 'white' : 'white', fontSize: 12, textAlign: "center", fontWeight: "bold" }}>Select and share multiple ayah</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ backgroundColor: "black", height: 50, width: 100, justifyContent: "center", alignItems: "center", padding: 2, marginLeft: 5, borderRadius: 5 }}>
                            <Text style={{ color: this.state.SourateState ? 'white' : 'white', fontSize: 12, textAlign: "center", fontWeight: "bold" }}>Search surarh and ayah no.</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ backgroundColor: "black", height: 50, width: 100, justifyContent: "center", alignItems: "center", padding: 2, marginLeft: 5, borderRadius: 5 }}>
                            <Text style={{ color: this.state.SourateState ? 'white' : 'white', fontSize: 12, textAlign: "center", fontWeight: "bold" }}>Search Quraan in any language</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ backgroundColor: "black", height: 50, width: 100, justifyContent: "center", alignItems: "center", padding: 2, marginLeft: 5, borderRadius: 5 }}>
                            <Text style={{ color: this.state.SourateState ? 'white' : 'white', fontSize: 12, textAlign: "center", fontWeight: "bold" }}>Phonetic search</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ backgroundColor: "black", height: 50, width: 100, justifyContent: "center", alignItems: "center", padding: 2, marginLeft: 5, borderRadius: 5 }}>
                            <Text style={{ color: this.state.SourateState ? 'white' : 'white', fontSize: 12, textAlign: "center", fontWeight: "bold" }}>Voice command</Text>
                        </TouchableOpacity>

                    </ScrollView>
                </View>
                <Text style={{ alignSelf: 'center', fontSize: 16, marginTop: 10 }}>{this.state.name}</Text>
                <Text style={{ alignSelf: 'flex-end', fontSize: 16, marginTop: 10, marginRight: 30 }}>Ayahs: {this.state.ayahNumber}</Text>
                <Text style={{ alignSelf: 'center', fontSize: 22, fontWeight: 'bold' }}>بِسْمِ ٱللّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيم</Text>

                <FlatList
                    style={{ padding: 10 }}
                    showsHorizontalScrollIndicator={false}
                    data={this.state.AyahDetail}
                    renderItem={this.renderRow}
                    keyExtractor={(item, index) => index.toString()}
                />
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.showMe}
                    onDismiss={() => this.setState({ showMe: false })}
                    onRequestClose={() => this.setState({ showMe: false })}>
                    <View style={{ flex: 1 }}>
                        <View style={{ flex: 1 }}></View>
                        <View style={styles.ModalMainView}>
                            <View style={styles.OuterView}>
                                <View style={styles.InnerView}>
                                    <FontAwesome style={styles.ModalIcon} name="book" size={30} />
                                    <Text style={styles.ModalText}>Vue Tafsir/Note</Text>
                                </View>
                                <View style={styles.InnerView}>
                                    <FontAwesome style={styles.ModalIcon} name="bookmark" size={30} />
                                    <Text style={styles.ModalText}>Ajouter un marque</Text>
                                </View>
                                <View style={styles.InnerView}>
                                    <MaterialCommunityIcons style={styles.ModalIcon} name="content-copy" size={30} />
                                    <Text style={styles.ModalText}>Copier</Text>
                                </View>
                            </View>
                            <View style={styles.OuterView}>
                                <View style={styles.InnerView}>
                                    <Ionicons style={styles.ModalIcon} name="md-share" size={30} />
                                    <Text style={styles.ModalText}>Partager</Text>
                                </View>
                                <View style={styles.InnerView}>
                                    <FontAwesome style={styles.ModalIcon} name="play" size={30}
                                        onPress={() => this.setState({ showMe: false, audioBar: true, })}
                                    />
                                    <Text style={styles.ModalText}>Jouer cette Ayah</Text>
                                </View>
                                <View style={styles.InnerView}>
                                    <AntDesign style={styles.ModalIcon} name="checkcircle" size={30} />
                                    <Text style={styles.ModalText}>Quran Planner</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </Modal>

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.audioBar}

                    onRequestClose={() => this.setState({ audioBar: false, playingStatus: 'nosound' })}>
                    <View style={{ flex: 1 }}>
                        <View style={{ flex: 1 }}></View>
                        <View style={styles.AudioModal}>

                            <View style={styles.AudioModalRow}>
                                <AntDesign style={{ color: 'white' }} name="stepbackward" size={25} />
                                {this.PlayPauseButton()}
                                <AntDesign style={{ color: 'white' }} name="stepforward" size={25}
                                // onPress={() => this.PlayNext()}
                                />
                            </View>
                        </View>
                    </View>
                </Modal>
            </SafeAreaView>


        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    ModalMainView: {
        backgroundColor: 'white', height: 200,
    },
    OuterView: {
        flexDirection: 'row', justifyContent: 'space-evenly', marginHorizontal: 15, marginVertical: 20
    },
    ModalText: {
        alignSelf: 'center', fontSize: 12
    },
    InnerView: {
        width: '30%'
    },
    ModalIcon: {
        color: 'black', alignSelf: 'center'
    },
    AudioModal: {
        backgroundColor: 'black', height: 60,
    },
    AudioModalRow: {
        flexDirection: 'row', justifyContent: 'space-evenly', marginHorizontal: 15, marginVertical: 20
    },

});
export default AyahDetail;

