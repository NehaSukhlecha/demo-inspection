import React from 'react';

import {
    StyleSheet,
    Text,
    Image,
    View,
    TouchableOpacity,
  } from 'react-native';

let Add = require('../assets/add.png');


const Header = ({
    showForm,
  }) => {
    return (
        <View style={styles.container}>
          <Text style={styles.title}>Report List</Text>

        <TouchableOpacity onPress={showForm} >
            <Image style={styles.img} source={Add} />
        </TouchableOpacity>
          
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#A0E7E5',
        height: 70,
        padding: 20,
        alignItems:''
    },
    title: {
        flex:1,
        fontSize: 18,
        fontWeight: 'bold',
    },
    img: {
        width: 32,
        alignItems:'flex-end',
        justifyContent:'flex-end',
        height: 32,
    },
});

export default Header;
