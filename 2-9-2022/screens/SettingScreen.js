import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView} from 'react-native';
import React from 'react';

const SettingScreen = ({navigation}) => {
  return (
    <SafeAreaView style = {{flex: 1}}>
        <View style = {styles.container}>
            <Text style = {styles.headingStyle}>Setting Screen</Text>
            <TouchableOpacity 
                style = {styles.buttonStyle}
                onPress={() => navigation.navigate('HomeScreen')}
            >
                <Text style = {styles.textStyle}>Go to Home Tab</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style = {styles.buttonStyle}
            >
                <Text style = {styles.textStyle}>Open News Screen</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style = {styles.buttonStyle}
                onPress={() => navigation.navigate('ProfileScreen')}
            >
                <Text style = {styles.textStyle}>Open Profile Screen</Text>
            </TouchableOpacity>
        </View>
        <View>
            <Text style = {styles.creditStyle}>www.tni.ac.th</Text>
        </View>  
    </SafeAreaView>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    headingStyle:{
        fontSize: 24,
        color: '#000000',
        margin: 30
    },
    creditStyle:{
        fontSize: 16,
        color: '#000000',
        textAlign: 'center',
        marginBottom: 20
    },
    textStyle:{
        fontSize: 18,
        color: '#000000',
        textAlign: 'center',
    },
    buttonStyle:{
        width: '100%',
        backgroundColor: 'lightgray',
        padding: 10,
        marginVertical: 5
    }
});
