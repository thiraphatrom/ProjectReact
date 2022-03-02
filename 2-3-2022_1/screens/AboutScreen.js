import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

// route คือ รับค่ามาจาก Home Screen
const AboutScreen = ({route}) => {
    const {email} = route.params;
    return (
        <View style = {styles.container}>
            <Text>เกี่ยวกับ</Text>
            <Text>Email : {email}</Text>
        </View>
    )
}

//เปลี่ยน export ด้วย
export default AboutScreen

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center'
    }
})
