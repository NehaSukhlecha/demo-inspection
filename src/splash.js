import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

let Wekan = require('./assets/wekan.png');

const Splash = () => {
  return (
    <View style={styles.content}>
      <Image style={styles.img} source={Wekan} />
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 100,
    height: 100,
  },
});

export default Splash;
