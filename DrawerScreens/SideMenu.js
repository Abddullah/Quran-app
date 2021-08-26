import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { Text, TouchableOpacity, View, Image, } from 'react-native';
import { width, height, } from 'react-native-dimension';
import { TextInput, ScrollView } from 'react-native-gesture-handler';
import { AntDesign, Entypo, Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export default class signUpParent extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ height: height(30), justifyContent: 'center', alignItems: 'center', }}>
                        <Image source={require('../Images/Profile.png')} style={{ width: width(25), height: width(25), marginLeft: 100 }}></Image>
                    </View>
                    {/* <View style = {{justifyContent:'center', alignItems: 'center', marginLeft: 20}}>
            <Text style = {{fontSize: 13, alignSelf: 'flex-start', fontWeight: 'bold'}}>Parent</Text>
          </View> */}
                </View>
                <ScrollView>
                    <View style={{ borderBottomWidth: 2, borderBottomColor: '#EAEAEAEA', marginLeft: 30 }}>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('DashBoard')} style={{ marginLeft: 5, flexDirection: 'row', marginVertical: height(2),}}>
                            <AntDesign
                                name='home'
                                type='font-awesome'
                                color='#651fff'
                                size={24}
                                containerStyle={{ width: width(10) }}
                            />
                            <View style={{ marginLeft: 15, marginTop: 1, }}>
                                <Text style={{ color: 'black', fontSize: 13 }}>HOME</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ borderBottomWidth: 2, borderBottomColor: '#EAEAEAEA', marginLeft: 30 }}>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('ViewMode') }} style={{ marginLeft: 5, flexDirection: 'row', marginVertical: height(2), }}>
                            <Ionicons
                                name='md-add-circle'
                                type='font-awesome'
                                color='#651fff'
                                size={24}
                                containerStyle={{ width: width(10) }}
                            />
                            <View style={{ marginLeft: 15, marginTop: 1, }}>
                                <Text style={{ color: 'black', fontSize: 13 }}>View Mode</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ borderBottomWidth: 2, borderBottomColor: '#EAEAEAEA', marginLeft: 30 }}>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('SearchAyah') }} style={{ marginLeft: 5, flexDirection: 'row', marginVertical: height(2), }}>
                            <FontAwesome
                                name='list'
                                type='font-awesome'
                                color='#651fff'
                                size={24}
                                containerStyle={{ width: width(10) }}
                            />
                            <View style={{ marginLeft: 15, marginTop: 1, }}>
                                <Text style={{ color: 'black', fontSize: 13 }}>Search Ayah</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        );
    }
}


