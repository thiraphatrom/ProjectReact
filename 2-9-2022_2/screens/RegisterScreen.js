import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { HeaderBackButton } from '@react-navigation/stack';

const RegisterScreen = ({navigation}) => {
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <HeaderBackButton onPress={() => navigation.goBack()} tintColor="white"/>
            ),
        });
      });
  return (
    <View>
      <Text>RegisterScreen</Text>
    </View>
  )
}

export default RegisterScreen