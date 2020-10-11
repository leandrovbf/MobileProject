import React from 'react';
import{Text, View, StyleSheet} from 'react-native'

const Header = () =>{
    return(
        <View style={style.view}>
            <Text style={style.textStyle}>App Maravilhoso</Text>
        </View>
    );    
}

const style = StyleSheet.create({
    view:{
        backgroundColor:'rgb(84,50,168)', 
        padding:20,
        width:'100%'
    },
    textStyle:{
        color: 'rgb(255,255,255)',
        textAlign: 'center',
        fontSize: 30,
    }
})

export default Header;