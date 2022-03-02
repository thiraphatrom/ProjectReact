import { Alert, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Container, Header, Content, Form, Item, Input, Label, Button, Icon } from 'native-base';
import { HeaderBackButton } from '@react-navigation/stack';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {userStoreContext} from '../context/UserContext';

const validateSchema = Yup.object().shape({
  email: Yup.string().email('รูปแบบอีเมล์ไม่ถูกต้อง').required('กรุณากรอกอีเมล์ใหม่'),
  password: Yup.string().min(3, 'รหัสผ่านต้อง 3 ตัวอักษรขึ้้นไป').required('กรุณาป้อนรหัสผ่าน'),
});

const LoginScreen = ({navigation}) => {
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <HeaderBackButton onPress={() => navigation.goBack()} tintColor="white"/>
            ),
        });
    });

    const userStore = React.useContext(userStoreContext);

    return (
        <Container>
          <Content padder>
            <Formik
            //ค่าเริ่มต้นของข้อมูลโดยกำหนดให้ตรงกับ backend
              initialValues={{
                email: '',
                password: '',
              }}
              validationSchema={validateSchema}
              //เมืื่อคลิกปุ่ม Register ให้ทำงานส่วนนี้
              onSubmit={async (values, {setSubmitting}) => {
                // same shape as initial values
                //alert(JSON.stringify(values));
                try {
                    const url = 'https://api.codingthailand.com/api/login';
                    const res = await axios.post(url, {
                      email : values.email,
                      password : values.password
                    });
                    //alert(JSON.stringify(res.data));
                    //เก็บข้อมูลหรือเก็บ Token ลงเครื่อง
                    await AsyncStorage.setItem('@token', JSON.stringify(res.data));
                    //get profile >> การทำงานที่ post man
                    const urlProfile = 'https://api.codingthailand.com/api/profile';
                    const resProfile = await axios.get(urlProfile, {
                        headers : {
                            Authorization : 'Bearer ' + res.data.access_token
                        }
                    });
                    //alert(JSON.stringify(resProfile.data.data.user));
                    //เก็บข้อมูล Profile ลง AsyncStorage
                    await AsyncStorage.setItem('@profile', JSON.stringify(resProfile.data.data.user));

                    //get and update profile by context(Global State)
                    const profile = await AsyncStorage.getItem('@profile')
                    userStore.updateProfile(JSON.parse(profile));

                    alert('เข้าสู่ระบบเรียบร้อยแล้ว');
                    navigation.navigate('HomeScreen');

                } catch (error) { 
                    alert(error.response.data.message);
                } finally {//ให้ปุ่มสามารถกลับมาคลิกได้อีก
                    setSubmitting(false);
                }
              }}
            >
              {/* //errors ใช้สำหรับการตรวจสอบ State(ถ้าผู้ใช้ไม่กรอกข้อมูลให้ error อะไรเกิดขึ้น) */}
              {/* //touched เมื่อผู้ใช้ไปกดที่ name และเลื่อนเมาส์ออกไปด้านนอกช่อง input โดยไม่กรอกข้อมูล */}
              {({ errors, touched, values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                <Form>
                  <Item fixedLabel last error = {errors.email && touched.email?true:false}>
                    <Label>Email</Label>
                    <Input 
                      value = {values.email}
                      onChangeText = {handleChange('email')}
                      onBlur = {handleBlur('email')}
                      keyboardType = 'email-address'
                    />
                    {errors.email && touched.email && <Icon name = 'close-circle'/>}
                  </Item>
                  {
                    errors.email && touched.email &&(
                      <Item>
                        <Label style ={{color:'red'}}>{errors.email}</Label>
                      </Item>
                    )
                  }
                  <Item fixedLabel last error = {errors.password && touched.password?true:false}>
                    <Label>Password</Label>
                    <Input 
                      value = {values.password}
                      onChangeText = {handleChange('password')}
                      onBlur = {handleBlur('password')}
                      keyboardType = 'number-pad'
                      secureTextEntry = {true}
                    />
                    {errors.password && touched.password && <Icon name = 'close-circle'/>}
                  </Item>
                  {
                    errors.password && touched.password &&(
                      <Item>
                        <Label style ={{color:'red'}}>{errors.password}</Label>
                      </Item>
                    )
                  }
                  <Button 
                    block large style = {{marginTop:30, backgroundColor:'lightblue'}}
                    onPress = {handleSubmit}
                    //ไว้สำหรับเปิดหรือปิด ปุ่มการทำงาน
                    disabled = {isSubmitting}  
                  >
                    <Text style = {{color:'#ffffff', fontSize:15, fontWeight:'bold'}}>Login</Text>
                  </Button>
                </Form>
              )}
            </Formik>        
          </Content>
        </Container>
      )
}

export default LoginScreen

const styles = StyleSheet.create({})