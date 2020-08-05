import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const Button = (props) => (
  <TouchableOpacity
    activeOpacity={0.8}
    onPress={props.onPress}
    style={[
      {
        backgroundColor: 'red',
        width: '90%',
        height: '17%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
      },
      props.style,
    ]}>
    <Text
      style={{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
      }}>
      {props.text}
    </Text>
  </TouchableOpacity>
);

export {Button};
