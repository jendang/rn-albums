import React, {Component} from 'react'
//import firebase from 'firebase'
import { View } from 'react-native'
import {Header} from './src/ReuseComponents'
// import AlbumList from './src/Album/AlbumList'
import LoginForm from './src/Authentication/LoginForm'

export default class App extends Component {
  render() {
    return (
      //flex: 1 to scroll it fullscreen
      <View style={{ flex: 1 }}>
        <Header headerText={`Authentication`} />
        {/* <AlbumList /> */}
        <LoginForm />
      </View>
    );
  }
}

