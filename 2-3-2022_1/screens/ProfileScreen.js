import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView} from 'react-native';
import React from 'react';

const ProfileScreen = ({navigation}) => {
  return (
    <SafeAreaView style = {{flex: 1}}>
        <View style = {styles.container}>
            <Text style = {styles.headingStyle}>You are on Profile Screen</Text>  
        </View>
        <View>
            <Text style = {styles.creditStyle}>www.tni.ac.th</Text>
        </View>  
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    headingStyle:{
        fontSize: 24,
        color: '#000000'
    },
    creditStyle:{
        fontSize: 16,
        color: '#000000',
        textAlign: 'center',
        marginBottom: 20
    }
});
