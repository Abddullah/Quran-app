import React from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import axios from 'axios';

import SourateScreen from '../HomeScreens/Sourate';
import PageScreen from '../HomeScreens/Page';
import JuzScreen from '../HomeScreens/Juz';
import HizbScreen from '../HomeScreens/Hizb';

class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            SourateState: true,
            PageState: false,
            JuzState: false,
            HizbState: false
        }
    }

    ScreenView() {
        if (this.state.SourateState) {
            return (
                <SourateScreen navigation={this.props.navigation} />
            )
        }
        else if (this.state.PageState) {
            return (
                <PageScreen navigation={this.props.navigation} />
            )
        }
        else if (this.state.JuzState) {
            return (
                <JuzScreen navigation={this.props.navigation} />
            )
        }
        else {
            return (
                <HizbScreen navigation={this.props.navigation} />
            )
        }
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


                {/* <View style={{
                    flexDirection: 'row', marginTop: 15, justifyContent: 'center',
                    alignItems: 'center', marginHorizontal: 0, height: 50,
                    // backgroundColor: "red"
                }}>
                    <ScrollView style={{ marginHorizontal: "5%" }}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    >
                        <TouchableOpacity style={{ backgroundColor: "black", height: 50, width: 100, justifyContent: "center", alignItems: "center", padding: 2, borderRadius: 5 }}>
                            <Text style={{ color: this.state.SourateState ? 'white' : 'black', fontSize: 12, textAlign: "center", fontWeight: "bold" }}>Write ayah no's and print</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ backgroundColor: "black", height: 50, width: 100, justifyContent: "center", alignItems: "center", padding: 2, marginLeft: 5, borderRadius: 5 }}>
                            <Text style={{ color: this.state.SourateState ? 'white' : 'black', fontSize: 12, textAlign: "center", fontWeight: "bold" }}>Open all the bookmarks</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ backgroundColor: "black", height: 50, width: 100, justifyContent: "center", alignItems: "center", padding: 2, marginLeft: 5, borderRadius: 5 }}>
                            <Text style={{ color: this.state.SourateState ? 'white' : 'black', fontSize: 12, textAlign: "center", fontWeight: "bold" }}>Share all ayah of root</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ backgroundColor: "black", height: 50, width: 100, justifyContent: "center", alignItems: "center", padding: 2, marginLeft: 5, borderRadius: 5 }}>
                            <Text style={{ color: this.state.SourateState ? 'white' : 'black', fontSize: 12, textAlign: "center", fontWeight: "bold" }}>Select and share multiple ayah</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ backgroundColor: "black", height: 50, width: 100, justifyContent: "center", alignItems: "center", padding: 2, marginLeft: 5, borderRadius: 5 }}>
                            <Text style={{ color: this.state.SourateState ? 'white' : 'black', fontSize: 12, textAlign: "center", fontWeight: "bold" }}>Search surarh and ayah no.</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ backgroundColor: "black", height: 50, width: 100, justifyContent: "center", alignItems: "center", padding: 2, marginLeft: 5, borderRadius: 5 }}>
                            <Text style={{ color: this.state.SourateState ? 'white' : 'black', fontSize: 12, textAlign: "center", fontWeight: "bold" }}>Search Quraan in any language</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ backgroundColor: "black", height: 50, width: 100, justifyContent: "center", alignItems: "center", padding: 2, marginLeft: 5, borderRadius: 5 }}>
                            <Text style={{ color: this.state.SourateState ? 'white' : 'black', fontSize: 12, textAlign: "center", fontWeight: "bold" }}>Phonetic search</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ backgroundColor: "black", height: 50, width: 100, justifyContent: "center", alignItems: "center", padding: 2, marginLeft: 5, borderRadius: 5 }}>
                            <Text style={{ color: this.state.SourateState ? 'white' : 'black', fontSize: 12, textAlign: "center", fontWeight: "bold" }}>Voice command</Text>
                        </TouchableOpacity>

                    </ScrollView>
                </View> */}


                <View style={{
                    flexDirection: 'row', marginTop: 15, justifyContent: 'center',
                    alignItems: 'center', marginHorizontal: 30, height: 40,
                }}>

                    <TouchableOpacity style={{ backgroundColor: this.state.SourateState ? 'black' : 'white', height: 40, width: '25%', justifyContent: 'center', alignItems: 'center' }}
                        onPress={() => this.setState({ SourateState: true, PageState: false, JuzState: false, HizbState: false })}
                    >
                        <Text style={{
                            color: this.state.SourateState ? 'white' : 'black', fontSize: 16
                        }}>Sourate</Text>

                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: this.state.PageState ? 'black' : 'white', height: 40, width: '25%', justifyContent: 'center', alignItems: 'center' }}
                        onPress={() => this.setState({ SourateState: false, PageState: true, JuzState: false, HizbState: false })}
                    >
                        <Text style={{
                            color: this.state.PageState ? 'white' : 'black', fontSize: 16
                        }}>Page</Text>

                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: this.state.JuzState ? 'black' : 'white', height: 40, width: '25%', justifyContent: 'center', alignItems: 'center' }}
                        onPress={() => this.setState({ SourateState: false, PageState: false, JuzState: true, HizbState: false })}
                    >
                        <Text style={{
                            color: this.state.JuzState ? 'white' : 'black', fontSize: 16
                        }}>Juz</Text>

                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: this.state.HizbState ? 'black' : 'white', height: 40, width: '25%', justifyContent: 'center', alignItems: 'center' }}
                        onPress={() => this.setState({ SourateState: false, PageState: false, JuzState: false, HizbState: true })}
                    >
                        <Text style={{
                            color: this.state.HizbState ? 'white' : 'black', fontSize: 16
                        }}>Hizb</Text>

                    </TouchableOpacity>
                </View>
                {this.ScreenView()}
            </SafeAreaView >
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
export default HomeScreen;