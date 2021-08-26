import React from 'react';
import { StyleSheet, Text, View, FlatList, AsyncStorage, TouchableOpacity, Alert } from 'react-native';
import { Feather } from '@expo/vector-icons';
import axios from 'axios';
import { Input, Icon } from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons';
// import { Feather } from '@expo/vector-icons';



class Translation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            CityName: '',
            nameList: [
                { language: 'ar', langName: 'Arabic' },
                { language: 'az', langName: 'Azeri' },
                { language: 'bn', langName: 'Malay' },
                { language: 'cs', langName: 'Czech' },
                { language: 'de', langName: 'German' },
                { language: 'dv', langName: 'Divehi' },
                { language: 'en', langName: 'English' },
                { language: 'es', langName: 'Spanish' },
                { language: 'fa', langName: 'Farsi' },
                { language: 'fr', langName: 'French' },
                { language: 'ha', langName: 'Hausa' },
                { language: 'hi', langName: 'Hindi' },
                { language: 'id', langName: 'Indonesian' },
                { language: 'it', langName: 'Italian' },
                { language: 'ja', langName: 'Japanese' },
                { language: 'ko', langName: 'Korean' },
                { language: 'ku', langName: 'Kurdish' },
                { language: 'ml', langName: 'Malayalam' },
                { language: 'nl', langName: 'Dutch' },
                { language: 'no', langName: 'Norway' },
                { language: 'pl', langName: 'Polish' },
                { language: 'pt', langName: 'Portuguese' },
                { language: 'ro', langName: 'Romanian' },
                { language: 'ru', langName: 'Russian' },
                { language: 'sd', langName: 'Sindhi' },
                { language: 'so', langName: 'Somali' },
                { language: 'sq', langName: 'Albanian' },
                { language: 'sv', langName: 'Swedish' },
                { language: 'sw', langName: 'Swahili' },
                { language: 'ta', langName: 'Tamil' },
                { language: 'tg', langName: 'Tajik' },
                { language: 'th', langName: 'Thai' },
                { language: 'tr', langName: 'Turkish' },
                { language: 'tt', langName: 'Tatar' },
                { language: 'ug', langName: 'Uighur' },
                { language: 'ur', langName: 'Urdu' },
                { language: 'uz', langName: 'Uzbek' }
            ]

        }
    }

    async componentDidMount() {
        await axios.get('http://api.alquran.cloud/v1/edition')
            .then((response) => {
                if (response.data.code === 200) {
                    var data = response.data.data
                    this.state.nameList.map(i => {
                        data.map(item => {
                            if (item.language == i.language) {
                                item.langName = i.langName
                            }
                        })
                    })
                    this.setState({ responseData: data })
                }
            })
            .catch((error) => {
                Alert.alert("Please Check Your Internet Connection");
            });
    }


    async select(item) {
        const { params } = this.props.navigation.state;
        var obj = {
            number: params.number,
            name: params.englishName,
            translation: params.englishNameTranslation,
            ayah: params.numberOfAyahs,
            identifier: item.identifier
        }
        this.props.navigation.navigate('AyahDetail', obj)
    }


    renderRow = ({ item }) => {
        if (item.langName) {
            return (
                <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1 }}
                    onPress={() => this.select(item)}
                >
                    <View style={{ marginVertical: 15, marginLeft: 15 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 14 }}>{`${item.langName} : ${item.name}`}</Text>
                    </View>
                </TouchableOpacity>
            )
        }

    }

    render() {
        return (
            <View style={styles.container}>

                <View style={{ height: 70, backgroundColor: 'black', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Ionicons style={{ color: 'white', marginLeft: 15, marginTop: 30 }} name="md-arrow-back" size={30}
                        onPress={() => this.props.navigation.goBack()}
                    />
                    {/* <Text style={{ fontSize: 12, fontWeight: 'bold', color: 'white', marginTop: 35, marginLeft: 15 }}>20-Jan-2020</Text> */}
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white', marginTop: 30 }}>Translation</Text>
                    <View style={{ height: 70, backgroundColor: 'black', paddingHorizontal: 10 }}>
                        {/* <Feather style={{ color: 'white', marginRight: 15, marginTop: 30 }} name="settings" size={30}
                            onPress={() => this.props.navigation.navigate('ChangeView')} /> */}
                    </View>
                </View>

                <FlatList
                    style={{ padding: 10 }}
                    showsHorizontalScrollIndicator={false}
                    data={this.state.responseData}
                    renderItem={this.renderRow}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    Font: { fontSize: 18 },
    ViewTimings: { flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 30, marginTop: 5 }

});
export default Translation;