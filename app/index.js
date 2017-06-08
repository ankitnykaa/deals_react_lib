'use strict';
import React from 'react';
import {AppRegistry,Text,View} from 'react-native';

const FetchInventoryDetails = require('./DealsInitialiser/FetchInventoryDetails');

class Main extends React.Component{
	render(){
		if(this.props.source =="deals"){
		   return (	
			<FetchInventoryDetails data={this.props}/>
		);
		}
		else{
			return(
				<View><Text>Not from deals
				</Text></View>
			);
		}
	
	}
}
AppRegistry.registerComponent('Main', () => Main);