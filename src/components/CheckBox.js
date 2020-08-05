import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

const CheckBox = (props) => (
  <View style={[{ flexDirection: 'row', alignItems: 'center', marginTop: '4%' }, props.style]}>
    <TouchableOpacity
      activeOpacity={1}
      onPress={props.onPress}
      style={{
        width: 20,
        height: 20,
        borderWidth: 1.5,
        borderColor: 'gray',
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 2,
      }}>
      {props.status && (
        <View
          style={{
            width: 15,
            height: 15,
            backgroundColor: 'gray',
          }}
        />
      )}
    </TouchableOpacity>
    <Text style={{color: 'gray', fontWeight:"bold"}}>{props.text}</Text>
  </View>
);

export {CheckBox};