import React from 'react';
import {TextInput} from 'react-native';

const Input = (props) => (
  <TextInput
    placeholder={props.placeholder}
    placeholderTextColor="#6D6D6D"
    secureTextEntry={props.secureTextEntry}
    style={[
      {
        backgroundColor: '#333333',
        width: '90%',
        height: '17%',
        borderRadius: 4,
        color: 'white',
        paddingLeft: '6%',
      },
      props.style,
    ]}
  />
);

export {Input};
