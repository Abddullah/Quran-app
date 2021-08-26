import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
// import { Feather } from '@expo/vector-icons';


class QuranPlanner extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            responseValue:[]
        }
    }

    // async componentDidMount() {
    //     await axios.get('http://api.alquran.cloud/v1/ayah/262/ar.alafasy')
    //         .then((response) => {
    //             // console.log(response.data.data);
    //             if (response.data.code === 200) {
    //                 this.setState({ responseValue: response.data.data })
    //             }
    //             // console.log(this.state.responseValue);
    //         })
    //         .catch((error) => {
    //             Alert.alert("Please Check Your Internet Connection");
    //         });
    // }

    // renderRow = ({ item }) => {
    //     return (
    //         <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1 }}
    //             onPress={() => this.props.navigation.navigate('AyahDetail',
    //                { number: item.number, name:item.englishName, translation:item.englishNameTranslation, ayah:item.numberOfAyahs}
    //             )}>
    //             <View style={{ marginVertical:15, marginLeft:15 }}>
    //                 <View style={{flexDirection:'row'}}>
    //                     <Text style={{ fontWeight: 'bold', fontSize: 14 }}>{item.number}</Text>
    //                     <Text style={{ fontWeight: 'bold', fontSize: 14, marginLeft:10 }}>{item.englishName}</Text>
    //                 </View>
    //                 <View style= {{flexDirection:'row'}}>
    //                     <Text style={{ fontSize: 12, marginLeft: 30 }}>{item.englishNameTranslation}</Text>
    //                     <Text style={{ fontSize: 12, marginLeft: 5 }}>(Ayahs {item.numberOfAyahs})</Text>
    //                 </View>
    //             </View>
    //             <Text style={{ fontWeight: 'bold', fontSize: 14, marginVertical: 15, marginRight:15 }}>{item.name}</Text>
    //         </TouchableOpacity>
    //     )
    // }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={{ height: 70, backgroundColor: 'black', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Entypo style={{ color: 'white', marginLeft: 15, marginTop: 30 }} name="menu" size={30}
                        onPress= {()=> this.props.navigation.openDrawer()}
                    />
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white', marginTop: 30 }}>SEARCH AL-QURAN</Text>
                    <View style={{ height: 70, backgroundColor: 'black' }}>
                        <Feather style={{ color: 'white', marginRight: 15, marginTop: 30 }} name="settings" size={30} 
                            onPress= {()=> this.props.navigation.navigate('ChangeView')}/>
                    </View>
                </View>

                {/* <FlatList
                        style={{ padding: 10 }}
                        showsHorizontalScrollIndicator={false}
                        data={this.state.responseValue}
                        renderItem={this.renderRow}
                        keyExtractor={(item, index) => index.toString()}
                    /> */}

                {/* <View style={{ flexDirection: 'row', marginTop: 5 }}>
                    <View style={{ width: 55, height: 60, borderWidth: 1, marginLeft: 5, borderRadius: 5, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ justifyContent: 'center', alignItems: 'center', fontSize: 8,padding:5 }}>Write ayah {'\n'} no's and {'\n'}print</Text>
                    </View>
                    <View style={{ width: 55, height: 60, borderWidth: 1, marginLeft: 5, borderRadius: 5, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ justifyContent: 'center', alignItems: 'center', fontSize: 12 }}>Open all the bookmarks</Text>
                    </View>
                    <View style={{ width: 55, height: 60, borderWidth: 1, marginLeft: 5, borderRadius: 5, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ justifyContent: 'center', alignItems: 'center', fontSize: 12 }}>Share all the ayah of root</Text>
                    </View>
                    <View style={{ width: 55, height: 60, borderWidth: 1, marginLeft: 5, borderRadius: 5, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ justifyContent: 'center', alignItems: 'center', fontSize: 12 }}>Select and share multiple ayah</Text>
                    </View>
                    <View style={{ width: 55, height: 60, borderWidth: 1, marginLeft: 5, borderRadius: 5, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ justifyContent: 'center', alignItems: 'center', fontSize: 12 }}>Search surah and ayah no</Text>
                    </View>
                    <View style={{ width: 55, height: 60, borderWidth: 1, marginLeft: 5, borderRadius: 5, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ justifyContent: 'center', alignItems: 'center', fontSize: 12 }}>Write ayah no's and print</Text>
                    </View>
                </View> */}

                <Text style={{ alignSelf: 'center', fontSize: 18 }}>أَعـوذُ بِاللهِ مِنَ الشَّيْـطانِ الرَّجيـم </Text>
                <Text style={{ alignSelf: 'center', fontSize: 18 }}>بِسْمِ ٱللّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيم</Text>
                <ScrollView>
                    <View style={styles.OuterBox}>
                        <TouchableOpacity style={styles.VideoBox} onPress={() => this.props.navigation.navigate('AyahDetail')}>
                            <View style={{ flexDirection: 'row', marginHorizontal: 5, marginTop: 5 }}>
                                <MaterialIcons style={{ marginRight: 5 }} name="check-box-outline-blank" size={20} />
                                <Text style={{ fontSize: 18, marginRight: 5 }}>V-I</Text>
                                <Text style={{ fontSize: 18, marginRight: 5 }}>الفاتحة</Text>
                                <AntDesign style={{ color: 'black', }} name="playcircleo" size={20} />
                            </View>
                            <AntDesign style={{ color: 'black', alignSelf: 'flex-end', marginRight: 10 }} name="caretup" size={25} />
                            <Image style={{ width: '100%', height: '55%', }} source={require('../Images/Ayah.jpg')} />
                            <AntDesign style={{ flex: 1, color: 'black', marginRight: 10, marginLeft: 5 }} name="caretdown" size={25} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.ImageBox} onPress={() => this.props.navigation.navigate('AyahDetail')}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ flexDirection: 'row', margin: 5 }}>
                                    <FontAwesome style={{ color: 'black', }} name="bookmark" size={20} />
                                    <FontAwesome style={{ marginLeft: 5, borderRadius: 2 }} name="mail-forward" size={20} />
                                </View>
                                <View style={{ flexDirection: 'row', margin: 5 }}>
                                    <Text style={{ fontSize: 18 }}>الفاتحة</Text>
                                    <SimpleLineIcons style={{ color: 'black', }} name="options-vertical" size={20} />
                                </View>
                            </View>
                            <Image style={{ width: '100%', height: '80%', }} source={require('../Images/Ayah.jpg')} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.OuterBox}>
                        <TouchableOpacity style={styles.VideoBox} onPress={() => this.props.navigation.navigate('AyahDetail')}>
                            <View style={{ flexDirection: 'row', marginHorizontal: 5, marginTop: 5 }}>
                                <MaterialIcons style={{ marginRight: 5 }} name="check-box-outline-blank" size={20} />
                                <Text style={{ fontSize: 18, marginRight: 5 }}>V-I</Text>
                                <Text style={{ fontSize: 18, marginRight: 5 }}>الفاتحة</Text>
                                <AntDesign style={{ color: 'black', }} name="playcircleo" size={20} />
                            </View>
                            <AntDesign style={{ color: 'black', alignSelf: 'flex-end', marginRight: 10 }} name="caretup" size={25} />
                            <Image style={{ width: '100%', height: '55%', }} source={require('../Images/Ayah.jpg')} />
                            <AntDesign style={{ flex: 1, color: 'black', marginRight: 10, marginLeft: 5 }} name="caretdown" size={25} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.ImageBox} onPress={() => this.props.navigation.navigate('AyahDetail')}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ flexDirection: 'row', margin: 5 }}>
                                    <FontAwesome style={{ color: 'black', }} name="bookmark" size={20} />
                                    <FontAwesome style={{ marginLeft: 5, borderRadius: 2 }} name="mail-forward" size={20} />
                                </View>
                                <View style={{ flexDirection: 'row', margin: 5 }}>
                                    <Text style={{ fontSize: 18 }}>الفاتحة</Text>
                                    <SimpleLineIcons style={{ color: 'black', }} name="options-vertical" size={20} />
                                </View>
                            </View>
                            <Image style={{ width: '100%', height: '80%', }} source={require('../Images/Ayah.jpg')} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.OuterBox}>
                        <TouchableOpacity style={styles.VideoBox} onPress={() => this.props.navigation.navigate('AyahDetail')}>
                            <View style={{ flexDirection: 'row', marginHorizontal: 5, marginTop: 5 }}>
                                <MaterialIcons style={{ marginRight: 5 }} name="check-box-outline-blank" size={20} />
                                <Text style={{ fontSize: 18, marginRight: 5 }}>V-I</Text>
                                <Text style={{ fontSize: 18, marginRight: 5 }}>الفاتحة</Text>
                                <AntDesign style={{ color: 'black', }} name="playcircleo" size={20} />
                            </View>
                            <AntDesign style={{ color: 'black', alignSelf: 'flex-end', marginRight: 10 }} name="caretup" size={25} />
                            <Image style={{ width: '100%', height: '55%', }} source={require('../Images/Ayah.jpg')} />
                            <AntDesign style={{ flex: 1, color: 'black', marginRight: 10, marginLeft: 5 }} name="caretdown" size={25} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.ImageBox} onPress={() => this.props.navigation.navigate('AyahDetail')}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ flexDirection: 'row', margin: 5 }}>
                                    <FontAwesome style={{ color: 'black', }} name="bookmark" size={20} />
                                    <FontAwesome style={{ marginLeft: 5, borderRadius: 2 }} name="mail-forward" size={20} />
                                </View>
                                <View style={{ flexDirection: 'row', margin: 5 }}>
                                    <Text style={{ fontSize: 18 }}>الفاتحة</Text>
                                    <SimpleLineIcons style={{ color: 'black', }} name="options-vertical" size={20} />
                                </View>
                            </View>
                            <Image style={{ width: '100%', height: '80%', }} source={require('../Images/Ayah.jpg')} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.OuterBox}>
                        <TouchableOpacity style={styles.VideoBox} onPress={() => this.props.navigation.navigate('AyahDetail')}>
                            <View style={{ flexDirection: 'row', marginHorizontal: 5, marginTop: 5 }}>
                                <MaterialIcons style={{ marginRight: 5 }} name="check-box-outline-blank" size={20} />
                                <Text style={{ fontSize: 18, marginRight: 5 }}>V-I</Text>
                                <Text style={{ fontSize: 18, marginRight: 5 }}>الفاتحة</Text>
                                <AntDesign style={{ color: 'black', }} name="playcircleo" size={20} />
                            </View>
                            <AntDesign style={{ color: 'black', alignSelf: 'flex-end', marginRight: 10 }} name="caretup" size={25} />
                            <Image style={{ width: '100%', height: '55%', }} source={require('../Images/Ayah.jpg')} />
                            <AntDesign style={{ flex: 1, color: 'black', marginRight: 10, marginLeft: 5 }} name="caretdown" size={25} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.ImageBox} onPress={() => this.props.navigation.navigate('AyahDetail')}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ flexDirection: 'row', margin: 5 }}>
                                    <FontAwesome style={{ color: 'black', }} name="bookmark" size={20} />
                                    <FontAwesome style={{ marginLeft: 5, borderRadius: 2 }} name="mail-forward" size={20} />
                                </View>
                                <View style={{ flexDirection: 'row', margin: 5 }}>
                                    <Text style={{ fontSize: 18 }}>الفاتحة</Text>
                                    <SimpleLineIcons style={{ color: 'black', }} name="options-vertical" size={20} />
                                </View>
                            </View>
                            <Image style={{ width: '100%', height: '80%', }} source={require('../Images/Ayah.jpg')} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.OuterBox}>
                        <TouchableOpacity style={styles.VideoBox} onPress={() => this.props.navigation.navigate('AyahDetail')}>
                            <View style={{ flexDirection: 'row', marginHorizontal: 5, marginTop: 5 }}>
                                <MaterialIcons style={{ marginRight: 5 }} name="check-box-outline-blank" size={20} />
                                <Text style={{ fontSize: 18, marginRight: 5 }}>V-I</Text>
                                <Text style={{ fontSize: 18, marginRight: 5 }}>الفاتحة</Text>
                                <AntDesign style={{ color: 'black', }} name="playcircleo" size={20} />
                            </View>
                            <AntDesign style={{ color: 'black', alignSelf: 'flex-end', marginRight: 10 }} name="caretup" size={25} />
                            <Image style={{ width: '100%', height: '55%', }} source={require('../Images/Ayah.jpg')} />
                            <AntDesign style={{ flex: 1, color: 'black', marginRight: 10, marginLeft: 5 }} name="caretdown" size={25} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.ImageBox} onPress={() => this.props.navigation.navigate('AyahDetail')}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ flexDirection: 'row', margin: 5 }}>
                                    <FontAwesome style={{ color: 'black', }} name="bookmark" size={20} />
                                    <FontAwesome style={{ marginLeft: 5, borderRadius: 2 }} name="mail-forward" size={20} />
                                </View>
                                <View style={{ flexDirection: 'row', margin: 5 }}>
                                    <Text style={{ fontSize: 18 }}>الفاتحة</Text>
                                    <SimpleLineIcons style={{ color: 'black', }} name="options-vertical" size={20} />
                                </View>
                            </View>
                            <Image style={{ width: '100%', height: '80%', }} source={require('../Images/Ayah.jpg')} />
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </SafeAreaView>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    OuterBox: { flexDirection: 'row', marginTop: 5, marginHorizontal: 15, backgroundColor: 'white' },
    VideoBox: { borderWidth: 2, width: '50%', borderRadius: 5, height: 180, flex: 1 },
    ImageBox: { borderWidth: 2, width: '50%', borderRadius: 5, height: 180 }

});
export default QuranPlanner;