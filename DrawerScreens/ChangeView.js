import React from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, CheckBox, AsyncStorage } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

class ChangeView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            check1: false,
            check2: false,
            check3: false,
            check4: false,
            check5: false,
            check6: false,
            ArabicSize: 14,
            TranslationSize: 14,
            translate: ''
        }
    }
    CheckBox1() {
        this.setState({ check1: !this.state.check1 })
    }
    CheckBox2() {
        this.setState({ check2: !this.state.check2 })
    }
    CheckBox3() {
        this.setState({ check3: !this.state.check3 })
    }
    CheckBox4() {
        this.setState({ check4: !this.state.check4 })
    }
    CheckBox5() {
        this.setState({ check5: !this.state.check5 })
    }
    CheckBox6() {
        this.setState({ check6: !this.state.check6 })
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={{ height: 70, backgroundColor: 'black', flexDirection: 'row', justifyContent: 'space-between' }}>
                    {/* <Entypo style={{ color: 'white', marginLeft: 15, marginTop: 30 }} name="menu" size={30}/> */}
                    <Text style={{ fontSize: 12, fontWeight: 'bold', color: 'white', marginTop: 35, marginLeft: 15 }}>20-Jan-2020</Text>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white', marginTop: 30 }}>SEARCH AL-QURAN</Text>
                    <View style={{ height: 70, backgroundColor: 'black' }}>
                        <Feather style={{ color: 'white', marginRight: 15, marginTop: 30 }} name="settings" size={30} />
                    </View>
                </View>

                <Text style={{ fontSize: 18, fontWeight: 'bold', alignSelf: 'center', marginTop: 10 }}>View Mode:-</Text>
                <View style={{ flexDirection: 'row', marginHorizontal: 15, marginTop: 10 }}>
                    <CheckBox
                        value={this.state.check1}
                        onChange={() => this.CheckBox1()}
                    />
                    <Text style={{ marginTop: 5 }}>Only arabic complete surah</Text>
                </View>
                <View style={{ flexDirection: 'row', marginHorizontal: 15, marginTop: 10 }}>
                    <CheckBox
                        value={this.state.check2}
                        onChange={() => this.CheckBox2()}
                    />
                    <Text style={{ marginTop: 5 }}>Only arabic two ayah in single line</Text>
                </View>
                <View style={{ flexDirection: 'row', marginHorizontal: 15, marginTop: 10 }}>
                    <CheckBox
                        value={this.state.check3}
                        onChange={() => this.CheckBox3()}
                    />
                    <Text style={{ marginTop: 5 }}>only arabic in different line</Text>
                </View>
                <View style={{ flexDirection: 'row', marginHorizontal: 15, marginTop: 10 }}>
                    <CheckBox
                        value={this.state.check4}
                        onChange={() => this.CheckBox4()}
                    />
                    <Text style={{ marginTop: 5 }}>Arabic and translation on different layouts</Text>
                </View>
                <View style={{ flexDirection: 'row', marginHorizontal: 15, marginTop: 10 }}>
                    <CheckBox
                        value={this.state.check5}
                        onChange={() => this.CheckBox5()}
                    />
                    <Text style={{ marginTop: 5 }}>word by word translation</Text>
                </View>
                <View style={{ flexDirection: 'row', marginHorizontal: 15, marginTop: 10 }}>
                    <CheckBox
                        value={this.state.check6}
                        onChange={() => this.CheckBox6()}
                    />
                    <Text style={{ marginTop: 5 }}>Only arabic complete surah</Text>
                </View>

                <View style={{ borderBottomWidth: 2, marginHorizontal: 15 }}></View>

                <Text style={{ fontSize: 18, fontWeight: 'bold', alignSelf: 'center', marginTop: 10 }}>Font Size:-</Text>
                <View style={{ flexDirection: 'row', marginHorizontal: 15, marginTop: 10, justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Arabic</Text>
                    <View style={{ borderWidth: 1, flexDirection: 'row' }}>
                        <TouchableOpacity style={{ width: 50, height: 30, backgroundColor: 'black' }}
                            onPress={() => this.setState({ ArabicSize: this.state.ArabicSize - 1 })}>
                            <Text style={{ fontSize: 20, alignSelf: 'center', color: 'white' }}>-</Text>
                        </TouchableOpacity>
                        <View style={{ width: 50, height: 30, }}>
                            <Text style={{ fontSize: 20, alignSelf: 'center', }}>{this.state.ArabicSize}</Text>
                        </View>
                        <TouchableOpacity style={{ width: 50, height: 30, backgroundColor: 'black' }}
                            onPress={() => this.setState({ ArabicSize: this.state.ArabicSize + 1 })}>
                            <Text style={{ fontSize: 20, alignSelf: 'center', color: 'white' }}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', marginHorizontal: 15, marginTop: 10, justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Translation</Text>
                    <View style={{ borderWidth: 1, flexDirection: 'row' }}>
                        <TouchableOpacity style={{ width: 50, height: 30, backgroundColor: 'black' }}
                            onPress={() => this.setState({ TranslationSize: this.state.TranslationSize - 1 })}>
                            <Text style={{ fontSize: 20, alignSelf: 'center', color: 'white' }}>-</Text>
                        </TouchableOpacity>
                        <View style={{ width: 50, height: 30, }}>
                            <Text style={{ fontSize: 20, alignSelf: 'center', }}>{this.state.TranslationSize}</Text>
                        </View>
                        <TouchableOpacity style={{ width: 50, height: 30, backgroundColor: 'black' }}
                            onPress={() => this.setState({ TranslationSize: this.state.TranslationSize + 1 })}>
                            <Text style={{ fontSize: 20, alignSelf: 'center', color: 'white' }}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ borderBottomWidth: 2, marginHorizontal: 15, marginTop: 15 }}></View>

                <Text style={{ fontSize: 18, fontWeight: 'bold', alignSelf: 'center', marginTop: 10 }}>Font Color:-</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity style={{ width: 30, height: 30, backgroundColor: 'black', margin: 10 }}></TouchableOpacity>
                    <TouchableOpacity style={{ width: 30, height: 30, backgroundColor: 'blue', margin: 10 }}></TouchableOpacity>
                    <TouchableOpacity style={{ width: 30, height: 30, backgroundColor: 'red', margin: 10 }}></TouchableOpacity>
                    <TouchableOpacity style={{ width: 30, height: 30, backgroundColor: 'purple', margin: 10 }}></TouchableOpacity>

                </View>

            </SafeAreaView>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        fontSize: 20,
        padding: 10
    }
});
export default ChangeView;