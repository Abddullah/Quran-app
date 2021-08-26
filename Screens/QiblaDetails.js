import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, FlatList, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import axios from 'axios';



class Notes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            values: [],
            Month: [],
            Date: [],
            Year: [],
            CityName: '',
            CountryName: ''
        }
    }
    componentDidMount() {
        var data = {
            city: this.props.navigation.state.params.City,
            country: this.props.navigation.state.params.Country,
        }
        this.setState({
            CountryName: data.country,
            CityName: data.city
        })
        this.Time(data)
    };

    async Time(data) {
        await axios.get(`http://api.aladhan.com/v1/timingsByCity?city=${data.city}&country=${data.country}`)
            .then((Response) => {
                if (Response.data.code === 200) {
                    this.setState({
                        values: Response.data.data.timings, Month: Response.data.data.date.hijri.month,
                        Date: Response.data.data.date.hijri, Year: Response.data.data.date.hijri.designation
                    })
                    console.log(this.state.Year)
                }
            }
            )
    }

    render() {
        return (
            <ScrollView style={styles.container}>

                <View style={{ height: 70, backgroundColor: 'black', flexDirection: 'row', justifyContent: 'space-between' }}>
                    {/* <Entypo style={{ color: 'white', marginLeft: 15, marginTop: 30 }} name="menu" size={30}/> */}
                    <Text style={{ fontSize: 12, fontWeight: 'bold', color: 'white', marginTop: 35, marginLeft: 15 }}>20-Jan-2020</Text>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white', marginTop: 30 }}>SEARCH AL-QURAN</Text>
                    <View style={{ height: 70, backgroundColor: 'black' }}>
                        <Feather style={{ color: 'white', marginRight: 15, marginTop: 30 }} name="settings" size={30} />
                    </View>
                </View>


                <Image style={{ width: 140, height: 140, alignSelf: 'center' }} source={require('../Images/compass.png')} />
                <View style={{ borderBottomWidth: 2, margin: 15 }}></View>
                <Text style={{ fontSize: 18, fontWeight: 'bold', alignSelf: 'center', }}>{this.state.CityName} City</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 16, marginTop: 10, alignSelf: 'center' }}>{this.state.Month.en}</Text>
                    <Text style={{ fontSize: 16, marginTop: 10, alignSelf: 'center' }}> {this.state.Date.day},</Text>
                    <Text style={{ fontSize: 16, marginTop: 10, alignSelf: 'center' }}>{this.state.Date.year}</Text>
                    <Text style={{ fontSize: 16, marginTop: 10, alignSelf: 'center' }}> {this.state.Year.abbreviated}</Text>
                </View>

                <View style={{ borderBottomWidth: 2, marginHorizontal: 15, marginTop: 15 }}></View>

                <View style={styles.ViewTimings}>
                    <Text style={styles.Font}>Fajr</Text>
                    <Text style={styles.Font}>{this.state.values.Fajr}</Text>
                </View>
                <View style={styles.ViewTimings}>
                    <Text style={styles.Font}>Sunrise</Text>
                    <Text style={styles.Font}>{this.state.values.Sunrise}</Text>
                </View>
                <View style={styles.ViewTimings}>
                    <Text style={styles.Font}>Dhuhr</Text>
                    <Text style={styles.Font}>{this.state.values.Dhuhr}</Text>
                </View>
                <View style={styles.ViewTimings}>
                    <Text style={styles.Font}>Asr</Text>
                    <Text style={styles.Font}>{this.state.values.Asr}</Text>
                </View>
                <View style={styles.ViewTimings}>
                    <Text style={styles.Font}>Sunset</Text>
                    <Text style={styles.Font}>{this.state.values.Sunset}</Text>
                </View>
                <View style={styles.ViewTimings}>
                    <Text style={styles.Font}>Maghrib</Text>
                    <Text style={styles.Font}>{this.state.values.Maghrib}</Text>
                </View>
                <View style={styles.ViewTimings}>
                    <Text style={styles.Font}>Isha</Text>
                    <Text style={styles.Font}>{this.state.values.Isha}</Text>
                </View>
                <View style={styles.ViewTimings}>
                    <Text style={styles.Font}>Imsak</Text>
                    <Text style={styles.Font}>{this.state.values.Imsak}</Text>
                </View>
                <View style={styles.ViewTimings}>
                    <Text style={styles.Font}>Midnight</Text>
                    <Text style={styles.Font}>{this.state.values.Midnight}</Text>
                </View>

            </ScrollView>

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
export default Notes;