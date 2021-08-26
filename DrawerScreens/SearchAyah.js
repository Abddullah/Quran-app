import React from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

class SearchAyah extends React.Component {

   
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={{ height: 70, backgroundColor: 'black', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Entypo style={{ color: 'white', marginLeft: 15, marginTop: 30 }} name="menu" size={30}/>
                    {/* <Text style={{ fontSize: 12, fontWeight: 'bold' , color:'white',marginTop:35, marginLeft:15}}>20-Jan-2020</Text> */}
                    <Text style={{ fontSize: 18, fontWeight: 'bold' , color:'white', marginTop:30}}>SEARCH AL-QURAN</Text>
                    <View style={{ height: 70, backgroundColor: 'black' }}>
                        <Feather style={{ color: 'white', marginRight: 15, marginTop: 30 }} name="settings" size={30} />
                    </View>
                </View>
                <View style={{justifyContent:'center', alignItems:'center', flex:1}}>
                    <Text>SearchAyah</Text>
                </View>
            </SafeAreaView>

        )
    }
}        

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
export default SearchAyah;