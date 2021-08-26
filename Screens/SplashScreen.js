import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    ImageBackground,
    ActivityIndicator,
    Alert,
    AsyncStorage,
} from 'react-native';


class SplashScreen extends Component {
    constructor(props) {
        super(props);
        this.decisionToNavigate = this.decisionToNavigate.bind(this);
    }

    static navigationOptions = {
        header: null
    };

    componentDidMount() {
        setTimeout(() => {
            this.decisionToNavigate();
        }, 3000);
    }

    decisionToNavigate() {
        const { navigate } = this.props.navigation;
        AsyncStorage.getItem("userId").then((value) => {
            if (value) {
                const { navigate } = this.props.navigation;
                navigate("QuranPlanner");
            }
            else {
                navigate("DashBoard");
            }
        }).catch(function (err) {
            Alert.alert(err.toString())
        }).done();
    }

    render() {
        return (
            <ImageBackground style={styles.container} source={require('../Images/SplashLogo.jpg')}>
                <View style={{ justifyContent: 'center', alignSelf: 'center' }}>
                    <ActivityIndicator size={"large"} />
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#F5FCFF'
    }
});

export default SplashScreen;