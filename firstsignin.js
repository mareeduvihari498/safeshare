import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View,TextInput, Keyboard, Dimensions } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FirebaseRecaptchaVerifier, FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha';
import * as firebase from 'firebase';
import Textinput from './Textinput';
import * as Cellular from 'expo-cellular';
import * as SecureStore from 'expo-secure-store';
import countrycode from './countrycode';
import Constants from 'expo-constants';

export function trail(){
    const k ='trail'
    return k
}
export function trail1(){
    return 'trail1'
}

