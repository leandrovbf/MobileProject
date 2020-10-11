import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import Header from './componentes/Header';
import Body from './componentes/Body';

export default class App extends React.Component{
  render(){
    return(
      <ScrollView style={{marginTop:27, flex:1}}>
        <Header></Header>
        <Body></Body>
      </ScrollView>
    );
  }
}