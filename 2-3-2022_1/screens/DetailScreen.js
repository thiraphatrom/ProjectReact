import {StyleSheet, View, ActivityIndicator, FlatList} from 'react-native';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button, Badge } from 'native-base';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  HeaderButtons,
  HeaderButton,
  Item,
} from 'react-navigation-header-buttons';

const IoniconsHeaderButton = props => (
  <HeaderButton IconComponent={Ionicons} iconSize={23} {...props} />
);

const DetailScreen = ({navigation, route}) => {
  
  const {id, title} = route.params;

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
          <Item
            title="menu"
            iconName="arrow-back-outline"
            onPress={() => navigation.goBack()}
          />
        </HeaderButtons>
      ),
      //title:'รายละเอียดสินค้า' //set แบบ static
      title: title //set แบบ dynamic
    })
  },[navigation])//จะเกิดขึ้นเมื่อ navigate title

  const [detail, setDetail] = useState([]);
  const [loading, setLoading] = useState(false);

  //getData() for get data from backend
  const getData = async (id) => {
    setLoading(true);
    const res = await axios.get('https://api.codingthailand.com/api/course/'+id)
    setDetail(res.data.data);
    setLoading(false);
  }
  
  useEffect (() => {
    getData(id);
  },[id]) //เรียกข้อมูลเฉพาะค่าที่ ID ตรงกัน

  const _onRefresh = ()=> {
    getData(id);
  }

  return (
    <View>
        <FlatList
            data = {detail}
            keyExtractor = {(item, index )=> item.ch_id.toString()}
            onRefresh = {_onRefresh}
            refreshing = {loading} 
            renderItem = {({item, index}) => (
              <ListItem thumbnail>
                <Left>
                  <Text>{index+1}</Text>
                </Left>
                <Body>
                    <Text>{item.ch_title}</Text>
                    <Text note numberOfLines={1}>{item.ch_detail}</Text>
                </Body>
                <Right>
                    <Badge danger>
                        <Text>{item.ch_view}</Text>
                    </Badge>
                </Right>
              </ListItem>
            )}
        />
    </View>
  )
}

export default DetailScreen

const styles = StyleSheet.create({})