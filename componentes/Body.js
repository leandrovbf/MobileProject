import React from 'react';
import{Text, ScrollView, Image, View, StyleSheet} from 'react-native';

const Body = () =>{
    return(
        <View>
        <View style={style.view}>
            <Image
                style={{width:90, height: 90,}}
                source={{
                    uri: 'https://reactnative.dev/img/tiny_logo.png',
                }}
            />
            <Text style={style.text}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean posuere, justo ac pharetra scelerisque,
                 libero velit faucibus turpis, eu aliquam mauris nibh ac libero. Proin arcu nibh, luctus scelerisque sodales eget, convallis a arcu.
                  Phasellus ut facilisis odio. Pellentesque ut dictum ante, hendrerit suscipit leo. Sed et nunc felis. Donec ac sollicitudin nisi. Quisque
                   convallis mi eget odio fringilla rutrum. Sed vestibulum enim vehicula ligula semper ullamcorper. Proin placerat leo in dolor viverra,
                    eget consectetur leo bibendum. Donec vehicula mi eu erat congue, et accumsan lacus facilisis. Aliquam mattis porta odio at
                     pretium. Curabitur ipsum arcu, dapibus eu diam sed, semper porta ipsum.
            </Text>
        
        </View>
        <View style={style.view}>
        <Image
            style={{width:90, height: 90,}}
            source={{
                uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
        />
        <Text style={style.text}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean posuere, justo ac pharetra scelerisque,
             libero velit faucibus turpis, eu aliquam mauris nibh ac libero. Proin arcu nibh, luctus scelerisque sodales eget, convallis a arcu.
              Phasellus ut facilisis odio. Pellentesque ut dictum ante, hendrerit suscipit leo. Sed et nunc felis. Donec ac sollicitudin nisi. Quisque
               convallis mi eget odio fringilla rutrum. Sed vestibulum enim vehicula ligula semper ullamcorper. Proin placerat leo in dolor viverra,
                eget consectetur leo bibendum. Donec vehicula mi eu erat congue, et accumsan lacus facilisis. Aliquam mattis porta odio at
                 pretium. Curabitur ipsum arcu, dapibus eu diam sed, semper porta ipsum.
        </Text>
    
    </View>
    </View>    
    
    );
}
const style = StyleSheet.create({
    view:{
        flex:1,
        flexDirection:'row', 
        flexWrap:'wrap',
        padding:10
    },
    text:{
        width:'70%',
        paddingLeft:20, 
        paddingRight:20
    }

})
export default Body;