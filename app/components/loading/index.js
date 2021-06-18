import React from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
const Get = props => {
  return (
    <View>
      <Text>你好:{props.name}</Text>
    </View>
  );
};
export default connect(({homeModel}) => {
  return {
    name: homeModel.name,
  };
})(Get);
