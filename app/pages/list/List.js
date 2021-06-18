import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import {Text, ListItem, Body, Right} from 'native-base';
import {connect} from 'react-redux';

function renderItem({item}) {
  return (
    <ListItem>
      <Body>
        <Text>{item.prodName}</Text>
        <Text>{item.prodPrice}</Text>
      </Body>
      <Right>
        <Text>{item.prodPrice}</Text>
      </Right>
    </ListItem>
  );
}

function List({navigation, dispatch, data, stickyHeaderIndices}) {
  const [listdata] = useState(data);
  useEffect(() => {
    dispatch({
      type: 'list/getProducts',
      dispatch,
    });
  }, []);

  return (
    <FlatList
      data={listdata}
      renderItem={renderItem}
      keyExtractor={item => item.name}
      stickyHeaderIndices={stickyHeaderIndices}
    />
  );
}

function mapStateToProps({list}) {
  return {data: list.data, stickyHeaderIndices: list.stickyHeaderIndices};
}

export default connect(mapStateToProps)(List);
