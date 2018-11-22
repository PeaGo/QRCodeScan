import React, { Component } from 'react'
import { View, Text, Button, StyleSheet, BackAndroid } from 'react-native'

export default class StartScreen extends Component {
    constructor(props) {
        super (props);
        this.state = {
            movies : [],
        }
    }
    getMoviesFromApiAsync() {
        fetch('https://facebook.github.io/react-native/movies.json')
          .then((response) => response.json())
          .then((responseJson) => {
            this.setState({
                movies : responseJson.movies ,
            })
          })
          .catch((error) => {
            console.error(error);
          });
      }
    render() {
        //var data = this.getMoviesFromApiAsync();
        //console.log(this.state.movies);
        return (
            <View style={{
                flex: 1,
                backgroundColor: '#F5F2F2',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <View style={{
                    height: 30,
                    width: 200,
                    marginBottom : 30
                }}>
                    <Button title={'Quét mã QR'} onPress={() => {
                        this.props.navigation.navigate('CameraScreen');
                    }} />
                </View>
                <View style={{
                    height: 30,
                    width: 200
                }}>
                    <Button title={'Thoát'} onPress={() => {
                        //this.getMoviesFromApiAsync();
                        BackAndroid.exitApp();
                    }} />
                </View>

            </View>
        );
    }
}