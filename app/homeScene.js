

'use strict';

var React = require('react-native');
var Button = require('react-native-button');
var YourRouter = require('./router.js');

var {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableOpacity,
  Animated,
  Dimensions
} = React;

var {
  height: deviceHeight
} = Dimensions.get('window');



class component extends Component {

  constructor(props){
      super (props)

      this.state = {
        offset: new Animated.Value(-deviceHeight)
      //  offset: new Animated.Value(deviceHeight)
      }
  }

  componentDidMount() {
    Animated.timing(this.state.offset, {
      duration: 150,
      toValue: 0
    }).start();
  }



  closeModal() {
    Animated.timing(this.state.offset, {
      duration: 150,
      toValue: -deviceHeight
      //toValue: deviceHeight
    }).start(this.props.closeModal);
  }



  render() {

      return (
        <View style={styles.flexCenter}>
          <Button onPress={() => {
            // Get a route object from the router
            let profile = {
              name: 'Jane',
              photoUrl: 'http://api.randomuser.me/portraits/thumb/women/39.jpg',
            };
            let route = YourRouter.getProfileRoute(profile);

            // `navigator` is passed into your scene component when you have
            // implemented getSceneClass in your route
            this.props.navigator.push(route);
          }}>
            Navigate to a profile
          </Button>
          <Button onPress={this.props.openModal}>Open Modal</Button>

          {/*
          <TouchableOpacity onPress={this.props.openModal}>
            <Text>Open Modal</Text>
          </TouchableOpacity>
          */}

        </View>

      )
  }
}

var styles = StyleSheet.create({
  flexCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});


module.exports = component
