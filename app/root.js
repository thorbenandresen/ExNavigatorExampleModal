/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');

import ExNavigator from '@exponent/react-native-navigator';
import cloneReferencedElement from 'react-native-clone-referenced-element';

var Button = require('react-native-button');
var YourRouter = require('./router.js');
var TopModal = require('./topModal.js');



var {
  AppRegistry,
  View,
  Text,
  StyleSheet
} = React;

class Component extends  React.Component {

  constructor(props){
      super(props)

      this.state = {
        modal: true,
      }
  }

  openModal() {
    console.log("Hello form Open Modal");
    this.setState({modal: true})
  }

  augmentScene(scene) {
  return cloneReferencedElement(scene, {...this.props});
}

  render () {
    return (

      <View style={styles.container}>
        <ExNavigator
          augmentScene={this.augmentScene.bind(this)}
          initialRoute={YourRouter.getAppRoute()}
          style={{ flex: 1 }}
          sceneStyle={{ paddingTop: 64 }}
        />
        {this.state.modal ? <TopModal closeModal={() => this.setState({modal: false}) }/> : null }
      </View>

    )
  }



}

var styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});





module.exports = Component
