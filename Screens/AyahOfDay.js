import React from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import axios from 'axios';
import { ScrollView } from 'react-native-gesture-handler';

class AyahOfDay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            responseData: [],
            SurahNumber: '',
            AyahDetail: [],
            CheckTrue: true,
            ayahNumber: '',
            ayahInEng: '',
            ayahInArabic: ''

        }
    }
    async ShowSurah() {
        this.setState({ ayahInEng: '', ayahInArabic: '' })
        await axios.get(`http://api.alquran.cloud/v1/surah/${this.state.SurahNumber}/en.asad`)
            .then((translationResponse) => {
                if (translationResponse.data.code === 200) {
                    var trans = translationResponse.data.data.ayahs;
                    axios.get(`http://api.alquran.cloud/v1/surah/${this.state.SurahNumber}`)
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
                                console.log(this.state.AyahDetail)

                            }
                        })
                        .catch((error) => {
                            Alert.alert("Please Check Your Internet Connection");
                        });
                }
            });
            this.setState({SurahNumber:''})
    }
    async ShowAyah() {
        this.setState({ AyahDetail: [] })
        await axios.get(`http://api.alquran.cloud/v1/ayah/${this.state.ayahNumber}/editions/quran-uthmani,en.asad,en.pickthall`)
            .then((Response) => {
                console.log(Response.data.data[0].text)
                if (Response.data.code === 200) {
                    this.setState({
                        ayahInArabic: Response.data.data[0].text,
                        ayahInEng: Response.data.data[1].text,
                    })
                    // console.log(this.state.Year)
                }
                else {

                }
            })
            .catch((error) => {
                Alert.alert("Please Check Your Internet Connection");
            });
            this.setState({ayahNumber:''})
    }

    renderRow = ({ item }) => {
        return (
            <View style={{ marginHorizontal: 15, borderBottomWidth: 1, flex: 1 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 14, marginTop: 5 }}>{item.data.numberInSurah}</Text>
                </View>
                <Text style={{ fontWeight: 'bold', fontSize: 16, marginTop: 15 }}>{item.data.text}</Text>
                <Text style={{ fontWeight: 'bold', fontSize: 14, marginTop: 10 }}>{item.engData.text}</Text>
            </View>
        )
    }
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={{ height: 70, backgroundColor: 'black', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Entypo style={{ color: 'white', marginLeft: 15, marginTop: 30 }} name="menu" size={30}
                        onPress={() => this.props.navigation.openDrawer()}
                    />
                    {/* <Text style={{ fontSize: 12, fontWeight: 'bold', color: 'white', marginTop: 35, marginLeft: 15 }}>20-Jan-2020</Text> */}
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white', marginTop: 30 }}>SEARCH AL-QURAN</Text>
                    <View style={{ height: 70, backgroundColor: 'black' }}>
                        <Feather style={{ color: 'white', marginRight: 15, marginTop: 30 }} name="settings" size={30}
                            onPress={() => this.props.navigation.navigate('ChangeView')} />
                    </View>
                </View>
                <Text style={{ fontSize: 18, fontWeight: 'bold', alignSelf: 'center', marginTop: 10 }}>Search Surah and Ayah</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 15, marginVertical: 5 }}>
                    <TextInput
                        style={[styles.InputField]}
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType={'default'}
                        underlineColorAndroid="transparent"
                        placeholder="Surah No"
                        returnKeyType={'next'}
                        maxLength={16}
                        placeholderTextColor="#517e8d"
                        onChangeText={SurahNumber => this.setState({ SurahNumber })}
                        value={this.state.SurahNumber}
                    />
                    <TouchableOpacity
                        style={[styles.btnContinue]}
                        onPress={() => this.ShowSurah(this.state.SurahNumber)}>
                        <Text style={styles.btnContinueText}>Search</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 15, marginVertical: 5 }}>
                    <TextInput
                        style={[styles.InputField]}
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType={'email-address'}
                        underlineColorAndroid="transparent"
                        placeholder="Ayah No"
                        returnKeyType={'next'}
                        maxLength={16}
                        placeholderTextColor="#517e8d"
                        onChangeText={ayahNumber => this.setState({ ayahNumber })}
                        value={this.state.ayahNumber}
                    />
                    <TouchableOpacity
                        style={[styles.btnContinue]}
                        onPress={() => this.ShowAyah(this.state.ayahNumber)}
                    >
                        <Text style={styles.btnContinueText}>Search</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView style={{marginHorizontal:15}}>
                    <Text style={{ fontWeight: 'bold', fontSize: 18, marginTop: 15 }}>{this.state.ayahInArabic}</Text>
                    <Text style={{ fontWeight: 'bold', fontSize: 18, marginTop: 10 }}>{this.state.ayahInEng}</Text>
                </ScrollView>

                <FlatList
                    style={{ padding: 10 }}
                    showsHorizontalScrollIndicator={false}
                    data={this.state.AyahDetail}
                    renderItem={this.renderRow}
                    keyExtractor={(item, index) => index.toString()}
                />
                <View>

                </View>
            </SafeAreaView>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    InputField: {
        width: '60%',
        // marginTop: 5,
        // marginHorizontal:15,
        borderWidth: 2,
        borderColor: 'black',
        // borderBottomWidth: 2,
        // borderBottomColor: 'black',
        padding: 5,
        borderRadius: 5,
        fontSize: 18,
        color: '#343434',
        textAlign: 'left',
    },

    btnContinue: {
        // marginTop:5,
        width: '35%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        backgroundColor: 'black',
    },

    btnContinueText: {
        textAlign: 'center',
        fontSize: 16,
        color: '#ffffff',
        alignSelf: 'center'
    },
});
export default AyahOfDay;