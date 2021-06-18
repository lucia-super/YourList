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
  const [prodId, setProdId] = useState('');
  const [prodName, setProdName] = useState('');
  const [prodDesc, setProdDesc] = useState('');
  const [prodPrice, setProdPrice] = useState(0);

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
          animationType="fade"
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
                  <Input value={prodId} onChangeText={setProdId} />
                </Item>
                <Item floatingLabel last>
                  <Label>名称</Label>
                  <Input value={prodName} onChangeText={setProdName} />
                </Item>
                <Item floatingLabel last>
                  <Label>描述</Label>
                  <Input value={prodDesc} onChangeText={setProdDesc} />
                </Item>
                <Item floatingLabel last>
                  <Label>价格</Label>
                  <Input
                    value={prodPrice}
                    type="number"
                    onChangeText={setProdPrice}
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
                        prodImage: '',
                        prodPrice,
                      },
                    });

                    setProdId('');
                    setProdName('');
                    setProdDesc('');
                    setProdPrice(0);
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
