import React from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import axios from 'axios';
class HizbScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            responseData: []
        }
    }
    async componentDidMount() {
        await axios.get('http://api.alquran.cloud/v1/surah')
            .then((response) => {
                // console.log(response.data.data);
                if (response.data.code === 200) {
                    this.setState({ responseData: response.data.data })
                }
                // console.log(this.state.responseData);
            })
            .catch((error) => {
                Alert.alert("Please Check Your Internet Connection");
            });
    }

    renderRow = ({ item }) => {
        return (
            <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1 }}
                onPress={() => this.props.navigation.navigate('AyahDetail',
                    { number: item.number, name: item.englishName, translation: item.englishNameTranslation, ayah: item.numberOfAyahs }
                )}>
                <View style={{ marginVertical: 15, marginLeft: 15 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 14 }}>{item.number}</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 14, marginLeft: 10 }}>{item.englishName}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 12, marginLeft: 30 }}>{item.englishNameTranslation}</Text>
                        <Text style={{ fontSize: 12, marginLeft: 5 }}>(Ayahs {item.numberOfAyahs})</Text>
                    </View>
                </View>
                <Text style={{ fontWeight: 'bold', fontSize: 14, marginVertical: 15, marginRight: 15 }}>{item.name}</Text>
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <View style={{flex:1}}>
                <FlatList
                    // style={{ marginBottom:125 }}
                    showsHorizontalScrollIndicator={false}
                    data={this.state.responseData}
                    renderItem={this.renderRow}
                    keyExtractor={(item) => item.number}
                />
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
export default HizbScreen;