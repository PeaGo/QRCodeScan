import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Vibration,
  Dimensions,
} from 'react-native';
import Camera from 'react-native-camera';

export default class CameraScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scanning: true,
      cameraType: Camera.constants.Type.back,
      data : '',
      typeCode : ''
    };
  }
  _handleBarCodeRead(data, type) {
    Vibration.vibrate();
    this.setState({ 
        scanning: false,
        'data' : data,
        typeCode : type    
    });
   
  }
  render() {
    if (this.state.scanning) {
      return (
        <View style={styles.container}>
          <View style={styles.rectangleContainer}>
            <Camera style={styles.camera} type={this.state.cameraType} onBarCodeRead={({data, type})=> {
              this._handleBarCodeRead(data,type);
            }}>
              <View style={styles.rectangleContainer}>
                <View style={styles.rectangle} />
              </View>
            </Camera>
          </View>
        </View>
      );
    }
    else {
      return (
        <View style={styles.container}>
        <Image source={require('../image/success_icon.png')} style={styles.img}></Image>
        <Text style={styles.text}>{this.state.data}</Text>
        <View><Button title={'Quét lại'} onPress= {
            () => {
                this.setState({
                    scanning : true
                })
            }
        }></Button></View>
        
    </View>
      );
    }
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  camera: {
    flex: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    height: Dimensions.get('window').width,
    width: Dimensions.get('window').width,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  rectangleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },

  rectangle: {
    height: 250,
    width: 250,
    borderWidth: 2,
    borderColor: '#00FF00',
    backgroundColor: 'transparent',
  },
text : {
    color : '#fff',
    padding : 5,
    borderRadius : 2,
    backgroundColor : 'green',
    fontSize : 23,
    width : Dimensions.get('window').width,
    textAlign : 'center',
    marginBottom : 20
},
img : {
    width : 100,
    height : 100,
    backgroundColor : 'transparent',
    marginBottom : 30
},
});