import { StyleSheet, View, SafeAreaView, Image, Linking } from 'react-native';
import React from 'react';

import {DrawerContentScrollView, DrawerItemList, DrawerItem} from "@react-navigation/drawer";
import { ScrollView } from 'react-native-gesture-handler';

import {Container, Header, Content, Button, ListItem, Text, Left, Icon, Body, Right} from "native-base"

const MenuScreen = ({navigation}) => {
  return (
    <ScrollView style={{flex:1}}>
        <View>
            <Text style={styles.menustyle}>Main Menu</Text>

            {/* code from native-base */}
            <Content>
                <ListItem icon style = {{marginBottom:10, marginTop:10}}
                    onPress={() => navigation.navigate('HomeScreenStack')}
                >
                    <Left>
                        <Button style={{ backgroundColor: "#FF9501" }}>
                            <Icon active name="home" />
                        </Button>
                    </Left>
                    <Body>
                        <Text>หน้าหลัก</Text>
                    </Body>
                    <Right>
                        <Icon active name="arrow-forward" />
                    </Right>
                </ListItem>
                <ListItem icon style = {{marginBottom:10, marginTop:10}}
                    onPress={() => navigation.navigate('ProductScreenStack')}
                >
                    <Left>
                        <Button style={{ backgroundColor: "#007AFF" }}>
                            <Icon active name="wifi" />
                        </Button>
                    </Left>
                    <Body>
                        <Text>สินค้า</Text>
                    </Body>
                    <Right>
                        <Icon active name="arrow-forward" />
                    </Right>
                </ListItem>
                <ListItem icon style = {{marginBottom:10, marginTop:10}}
                    onPress={() => navigation.navigate('LoginScreen')}
                >
                    <Left>
                        <Button style={{ backgroundColor: "#007AFF" }}>
                            <Icon active name="log-in" />
                        </Button>
                    </Left>
                    <Body>
                        <Text>เข้าสู่ระบบ</Text>
                    </Body>
                    <Right>
                        <Icon active name="arrow-forward" />
                    </Right>
                </ListItem>
            </Content>
        </View>
    </ScrollView>
  );
};

export default MenuScreen;

const styles = StyleSheet.create({
    sideMenuProfileIcon: {
    resizeMode: 'center',
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    alignSelf: 'center',
    },
    iconStyle: {
    width: 15,
    height: 15,
    marginHorizontal: 5,
    },
    customItem: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    },
    menustyle: {
        color:'blue',
        fontSize:20,
        fontWeight:'bold',
        padding:20,
    }
    });
