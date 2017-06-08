'use strict';
import React from 'react';
import ReactNative, {
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableOpacity,
  NativeModules,
  NativeEventEmitter,
  ListView,
  ScrollView,
  Image,
} from 'react-native';

var Carousel = require('react-native-carousel');

export default class RenderCarousel extends React.Component 
{
  constructor(props){
    super(props);
    this.data = this.props.response;
  }
  render() {
    const elements = this.data.map((data) => {
    return (
       <View style={styles.container}>
          <Image style={{width: 375, height: 200}}
            source={{uri: data["children"][0]["source"]["Web"]}}/>
             </View>
      )
    })
    return (
      <Carousel animate={false} indicatorOffset={225} indicatorAtBottom={false}  height={250} width={375}>
      {elements}
      </Carousel>

    );
  }
}
var styles = StyleSheet.create({
  container: {
    width:375,
    height:200,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});


