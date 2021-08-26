

import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
// import { Entypo } from '@expo/vector-icons';


import HomeScreen from '../Screens/HomeScreen';
import QuranPlanner from '../Screens/QuranPlanner';
import Bookmark from '../Screens/Bookmarks';
import Notes from '../Screens/Notes';
import AyahOfDay from '../Screens/AyahOfDay';
import { Header } from 'react-native/Libraries/NewAppScreen';

const StackNavigation = createStackNavigator({
    FirstNavigation: createBottomTabNavigator({

        HomeScreen: {
            screen: HomeScreen,
            navigationOptions: {
                tabBarLabel: "Home",
                tabBarIcon: ({ tintColor }) => (
                    <Entypo style={{ color: tintColor }} name="home" size={25} color="black" />
                )
            },
        },
        QuranPlanner: {
            screen: QuranPlanner,
            navigationOptions: {
                tabBarLabel: "Planner",
                tabBarIcon: ({ tintColor }) => (
                    <FontAwesome style={{ color: tintColor }} name="list-ul" size={25} color="black" />
                )
            },
        },
        Bookmark: {
            screen: Bookmark,
            navigationOptions: {
                tabBarLabel: "Bookmark",
                tabBarIcon: ({ tintColor }) => (
                    <FontAwesome style={{ color: tintColor }} name="bookmark" size={25} color="black" />
                )
            },
        },
        // Notes: {
        //     screen: Notes,
        //     navigationOptions: {
        //         tabBarLabel: "Notes",
        //         tabBarIcon: ({tintColor}) => (
        //             <Feather style={{color:tintColor}} name="book-open" size={25} color="black" />
        //         )
        //     },
        // },
        Notes: {
            screen: Notes,
            navigationOptions: {
                tabBarLabel: "Times",
                tabBarIcon: ({ tintColor }) => (
                    <Ionicons style={{ color: tintColor }} name="ios-clock" size={25} color="black" />
                )
            },
        },
        AyahOfDay: {
            screen: AyahOfDay,
            navigationOptions: {
                tabBarLabel: "Ayah",
                tabBarIcon: ({ tintColor }) => (
                    <Entypo style={{ color: tintColor }} name="calendar" size={25} color="black" />
                )
            },
        },
    },
        {
            tabBarOptions: {
                activeTintColor: 'white',
                inactiveTintColor: 'gray',
                tabStyle: { backgroundColor: 'black' }
            }
        }
    )
}
,
{
    defaultNavigationOptions: {
      headerShown: false,
    },
}
)


export default createAppContainer(StackNavigation);
