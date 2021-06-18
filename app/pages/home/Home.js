import React, {useState} from 'react';
import {connect} from 'react-redux';
import {View, Modal} from 'react-native';
import {
  Container,
  Header,
  Content,
  Footer,
  FooterTab,
  Button,
  Icon,
  Text,
  Left,
  Body,
  Right,
  Title,
  Form,
  Item,
  Input,
  Label,
} from 'native-base';

function Home({navigation, dispatch, name, modalVisible}) {
  const [prodId, setProdId] = useState('bbb');
  const [prodName, setProdName] = useState('测试2');
  const [prodDesc, setProdDesc] = useState('dfdf');
  const [prodPrice, setProdPrice] = useState(10);

  const setModalVisible = modalVisible => {
    dispatch({
      type: 'home/updateState',
      payload: {
        modalVisible,
      },
    });
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>主页{name}</Text>
      <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <Container>
            <Header>
              <Left />
              <Body>
                <Title>添加你的物品</Title>
              </Body>
              <Right />
            </Header>
            <Content>
              <Form>
                <Item floatingLabel>
                  <Label>ID</Label>
                  <Input
                    value={prodId}
                    onChange={e => {
                      setProdId(e.target.value);
                    }}
                  />
                </Item>
                <Item floatingLabel last>
                  <Label>名称</Label>
                  <Input
                    value={prodName}
                    onChange={e => {
                      setProdName(e.target.value);
                    }}
                  />
                </Item>
                <Item floatingLabel last>
                  <Label>描述</Label>
                  <Input
                    value={prodDesc}
                    onChange={e => {
                      setProdDesc(e.target.value);
                    }}
                  />
                </Item>
                <Item floatingLabel last>
                  <Label>价格</Label>
                  <Input
                    value={prodPrice}
                    onChange={e => {
                      setProdPrice(e.target.value);
                    }}
                  />
                </Item>
              </Form>
            </Content>
            <Footer>
              <FooterTab>
                <Button
                  vertical
                  primary
                  onPress={() => {
                    dispatch({
                      type: 'list/addProduct',
                      dispatch,
                      payload: {
                        prodId,
                        prodName,
                        prodDesc,
                        prodPrice,
                      },
                    });
                    setModalVisible(!modalVisible);
                  }}>
                  <Icon name="open" />
                  <Text>确定</Text>
                </Button>
                <Button
                  vertical
                  light
                  onPress={() => {
                    setModalVisible(!modalVisible);
                  }}>
                  <Icon name="close" />
                  <Text>取消</Text>
                </Button>
              </FooterTab>
            </Footer>
          </Container>
        </Modal>
        <Button onPress={() => setModalVisible(true)}>
          <Text>添加</Text>
        </Button>
      </View>
    </View>
  );
}

export default connect(({home}) => {
  return {
    name: home.name,
    modalVisible: home.modalVisible,
  };
})(Home);
