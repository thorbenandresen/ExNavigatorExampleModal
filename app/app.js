

'use strict';

var React = require('react-native');

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
          <TouchableOpacity onPress={this.props.openModal}>
            <Text>Open Modal</Text>
          </TouchableOpacity>
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
