import React, {Component} from 'react';
import {SafeAreaView, ScrollView, View, Image, Text} from 'react-native';
import {Button, Input} from './src/components';

export default class App extends Component {
  render() {
    return (
      <SafeAreaView
        style={{
          flex: 1,
        }}>
        <ScrollView contentContainerStyle={{flex: 1}}>
          <View
            style={{
              flex: 1,
              backgroundColor: 'black',
              justifyContent: 'center',
            }}>
            <Image
              style={{width: '35%', height: '35%', marginLeft: '10%'}}
              source={require('./src/images/logo.png')}
            />
          </View>
          <View style={{flex: 2, backgroundColor: 'black', paddingLeft: '10%'}}>
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: 32,
                marginTop:'5%'
              }}>
              Sign In
            </Text>
            <Input placeholder={'Email or phone number'} style={{marginTop:'7%'}} />
            <Input placeholder={'Password'} style={{marginTop:'4%'}}/>
            <Button
              text={'Sign In'}
              style={{marginTop:'10%'}}
              onPress={() => {
                console.log('tusa basildi');
              }}
            />
          </View>
          <View
            style={{
              flex: 2,
              backgroundColor: 'black',
              justifyContent: 'center',
            }}>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{width: 20, height: 20, marginLeft: '10%'}}
                source={require('./src/images/facebook.png')}
              />
              <Text style={{color: 'gray', marginLeft: '3%'}}>
                Login with Facebook
              </Text>
            </View>
            <Text
              style={{
                fontSize: 16,
                color: 'gray',
                marginLeft: '10%',
                marginTop: '10%',
              }}>
              New to Netflix?{' '}
              <Text style={{color: 'white', fontWeight: 'bold'}}>
                Sign up now
              </Text>
              .
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
