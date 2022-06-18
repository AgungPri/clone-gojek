import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import iconAccount from './assets/icon/go-food.png';

export default class App extends Component {
  render() {
    return (
      // <View style={{ backgroundColor: 'pink', flex: 1 }} > ini bagian awal mula dari blank page untuk menentukan ui kasar
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, backgroundColor: 'white' }}>
          {/* halaman atas search bar */}
          <View style={{ marginHorizontal: 17, flexDirection: 'row', marginTop: 20, marginLeft: 50, paddingTop: 15 }}>
            <View style={{ position: 'relative' }}>
              <TextInput placeholder='what do you want to eat?' style={{
                borderWidth: 1, borderColor: '#E8E8E8',
                borderRadius: 25, height: 40, fontSize: 13, paddingLeft: 45, paddingRight: 50, marginRight: 18
                , backgroundColor: 'white'
              }} />
              <Image source={require('./assets/icon/search.png')} style={{ position: 'absolute', top: 5, left: 12 }} />
            </View>
            <View style={{ width: 35, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
              <Image source={require('./assets/icon/promo.png')} />
            </View>
          </View>
          {/* halaman gopay */}
          <View style={{ marginHorizontal: 17 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'blue', borderTopLeftRadius: 4, borderTopRightRadius: 4, padding: 14 }}>
              <Image source={require('./assets/icon/gopay.png')} />
              <Text style={{ color: 'white', fontSize: 17, fontWeight: 'bold' }}>Rp 50.000</Text>
            </View>
            <View></View>
          </View>
        </View>
        <View style={{ height: 54, flexDirection: 'row', backgroundColor: 'white' }}>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image style={{ width: 26, height: 26 }} source={require('./assets/icon/account-active.png')} />
            <Text style={{ fontSize: 10, color: '#545454', marginTop: 4, color: 'green' }}>Home</Text>
          </View>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image style={{ width: 26, height: 26 }} source={{
              uri: 'https://images.tokopedia.net/img/cache/900/VqbcmM/2022/6/11/fef7836d-ca5c-4414-b6a5-5294e7d04d23.jpg',
            }} />
            <Text style={{ fontSize: 10, color: '#545454', marginTop: 4, }}>Orders Nepto</Text>
          </View>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image style={{ width: 26, height: 26 }} source={iconAccount} />
            <Text style={{ fontSize: 10, color: '#545454', marginTop: 4, }}>Help</Text>
          </View>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image style={{ width: 26, height: 26 }} source={require('./assets/icon/account-active.png')} />
            <Text style={{ fontSize: 10, color: '#545454', marginTop: 4, }}>Inbox</Text>
          </View>
          <View style={{
            flex: 1, alignItems: 'center', justifyContent: 'center'
          }}>
            <Image style={{ width: 26, height: 26 }} source={require('./assets/icon/account.png')} />
            <Text style={{ fontSize: 10, color: '#545454', marginTop: 4, }}>Account</Text>
          </View>
        </View >
      </View >
    );
  }
}

const styles = StyleSheet.create({
});
