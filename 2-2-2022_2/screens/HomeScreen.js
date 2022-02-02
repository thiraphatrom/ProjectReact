import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView} from 'react-native';
import React from 'react';

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style = {{flex: 1}}>
        <View style = {styles.container}>
            <Text style = {styles.headingStyle}>Home Screen</Text>
            <TouchableOpacity 
                style = {styles.buttonStyle}
                onPress={() => navigation.navigate('SettingScreen')}
            >
                <Text style = {styles.textStyle}>Go to setting Tab</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style = {styles.buttonStyle}
            >
                <Text style = {styles.textStyle}>Open News Screen</Text>
            </TouchableOpacity>
        </View>
        <View>
            <Text style = {styles.creditStyle}>www.tni.ac.th</Text>
        </View>  
    </SafeAreaView>
  );
};

export default HomeScreen;

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
