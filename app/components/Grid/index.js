'use strict';

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View, Text } from 'react-native';
import ResponsiveImage from 'react-native-responsive-image';


var Grid = React.createClass({
	render: function() {
		return (
			<View style={{flex: 1, justifyContent: 'center',}}>
				<Text style={styles.hello}>Collections @ Nykaa</Text>
                <View style={{flexDirection: 'row',}}>
                    <ResponsiveImage source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}} initWidth="138" initHeight="138"/>
                    <ResponsiveImage source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}} initWidth="138" initHeight="138"/>
                    <ResponsiveImage source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}} initWidth="138" initHeight="138"/>
                </View>
            </View>
		);
	}
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  hello: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

module.exports = Grid;