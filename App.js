import React, {Component} from 'react'
//import firebase from 'firebase'
import { View } from 'react-native'
import {Header} from './src/ReuseComponents'
// import AlbumList from './src/Album/AlbumList'
import LoginForm from './src/Authentication/LoginForm'

export default class App extends Component {

  /* componentWillMount(){
    firebase.initializeApp({
      {
        apiKey: "AIzaSyCswRXWIyp-6LRh3CWnZocma7SlNQZJli8",
        authDomain: "authalbum.firebaseapp.com",
        databaseURL: "https://authalbum.firebaseio.com",
        projectId: "authalbum",
        storageBucket: "authalbum.appspot.com",
        messagingSenderId: "72248287465",
        appId: "1:72248287465:web:99776421eac53122"
      }
    })
  } */

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

