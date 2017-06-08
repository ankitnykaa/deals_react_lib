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
import RenderCarousel from '../Carousel/index'

var FetchInventoryDetails = React.createClass({
 
  getInitialState: function() {
    return {
      inventory_id :this.props.data.inventoryId,
      jsonData: ''
    };
  },
   componentDidMount: function() {
    this.fetchData();
  },

  fetchData: function() {
    console.log(this.inventory_id);
    return fetch('https://nykaa-widgets-staging.nykaa.com/inventory/'+this.state.inventory_id+'/json/')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
        jsonData: responseJson
      });
      })
      .catch((error) => {
        console.error(error);
      }).done();
  },
  render:function() {
    console.log(this.state.jsonData["wtype"]);
    if(this.state.jsonData == ''){
      return <Text>Loading</Text>;
    }

    if (this.state.jsonData.wtype == "CAROUSEL") {
      return(
        <RenderCarousel response={this.state.jsonData["children"]}/>
      );
    }
    else{
      return(<Text>Component not defined</Text>);
    }
    
  },

});
module.exports = FetchInventoryDetails;