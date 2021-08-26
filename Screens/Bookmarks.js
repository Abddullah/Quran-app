import React from 'react';
import { StyleSheet, Text, View, Button,SafeAreaView } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import axios from 'axios';

class Bookmarks extends React.Component {

    // async componentDidMount(){
    //     await axios.get('http://api.alquran.cloud/v1/ayah/262/ar.alafasy')
    //     .then((response) => {console.log(response)});
    // }
   
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={{ height: 70, backgroundColor: 'black', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Entypo style={{ color: 'white', marginLeft: 15, marginTop: 30 }} name="menu" size={30}
                        onPress= {()=> this.props.navigation.openDrawer()}
                    />
                    {/* <Text style={{ fontSize: 12, fontWeight: 'bold', color: 'white', marginTop: 35, marginLeft: 15 }}>20-Jan-2020</Text> */}
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white', marginTop: 30 }}>SEARCH AL-QURAN</Text>
                    <View style={{ height: 70, backgroundColor: 'black' }}>
                        <Feather style={{ color: 'white', marginRight: 15, marginTop: 30 }} name="settings" size={30} 
                            onPress= {()=> this.props.navigation.navigate('ChangeView')}/>
                    </View>
                </View>
                <View style={{justifyContent:'center', alignItems:'center', flex:1}}>
                    <Text>Bookmarks</Text>
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
export default Bookmarks;