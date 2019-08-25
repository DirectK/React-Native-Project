import React from 'react'
import { View, RefreshControl, Image, Text, TouchableOpacity, Dimensions } from 'react-native';
import { FlatList, TouchableHighlight } from 'react-native-gesture-handler';
import { TextButton } from 'react-native-material-buttons';
import Collapsible from 'react-native-collapsible';
import Theme from '../styles/default-theme';
import { NavigationInjectedProps } from 'react-navigation';

export default class ChatScreen extends React.Component<NavigationInjectedProps> {
  state = { refreshing: false }

  onRefresh = () => {
    this.setState({ refreshing: true })
    setTimeout(() => this.setState({ refreshing: false }), 1000)
  }

  render() {
    return (
      <FlatList
        contentContainerStyle={{ paddingBottom: 25 }}
        refreshControl={
          <RefreshControl refreshing={this.state.refreshing} onRefresh={this.onRefresh} />
        }
        style={Theme.Screen} 
        data={[{key: '1'}, {key: '2'}, {key: '3'}, {key: '4'}]} 
        renderItem={() => <ChatItem navigation={this.props.navigation} />} 
      />
    )
  }
}

class ChatItem extends React.Component<NavigationInjectedProps> {
  static Styles = Theme.Screens.Chat.Item

  state = { conversationsCollapsed: true }

  Conversation = () => (
    <View style={{ backgroundColor: '#000' }}>
      <TouchableOpacity activeOpacity={0.95} onPress={() => this.props.navigation.navigate('Conversation')}>
        <View style={{ backgroundColor: '#fff', flexDirection: 'row', alignItems: 'center', paddingRight: 20, paddingVertical: 10 }}>
          <Image style={{ zIndex: 2, position: 'relative', left: 20 }} source={require('../res/img/no-picture/no-picture.png')} />
          <View style={{ zIndex: 1, flex: 1 }}>
            <View>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <View style={{ maxWidth: 450 / Dimensions.get('screen').scale, backgroundColor: '#244972', borderTopLeftRadius: 90, borderTopRightRadius: 180, borderBottomLeftRadius: 90, paddingVertical: 5, paddingLeft: 30, paddingRight: 20, justifyContent: 'center' }}>
                  <Text numberOfLines={1} style={[Theme.Text.sm, {color: '#fff'}]}>Trevor Hansen</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                  <Image style={{marginRight: 3}} source={require('../res/img/access-time/access-time.png')} />
                  <Text style={Theme.Text.sm}>now</Text>
                </View>
              </View>
            </View>
            <Text numberOfLines={1} style={[Theme.Text.sm, { backgroundColor: '#EAEAEA', borderRadius: 90, paddingVertical: 5, paddingLeft: 30, paddingRight: 10 }]}>
              Lorem ipsum dolor sit amet, soluta
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  )

  Conversations = () => {
    const Conversation = this.Conversation

    return (
      <Collapsible align={'bottom'} collapsed={this.state.conversationsCollapsed}>
        <View style={{ backgroundColor: '#fff', marginHorizontal: 20, elevation: 5, marginBottom: 10 }}>
          <View style={{ marginVertical: 10 }}>
            <Conversation />
            <Conversation />
            <Conversation />
          </View>
          <View style={{ paddingHorizontal: 15 }}>
            <View style={{ borderTopColor: '#D4D4D4', borderTopWidth: 1, flexDirection: 'row', alignItems: 'center', justifyContent: "flex-end"}}>
              <TextButton title='SHOW MORE' titleColor='#a0a0a0' onPress={() => {}} />
            </View>
          </View>
        </View>
      </Collapsible>
    )
  }

  render() {
    const Conversations = this.Conversations

    return (
      <View style={{ marginTop: 50 }}>
        <View style={{ backgroundColor: '#fff', elevation: 5 }}>
          <View style={{ width: '100%', position: 'absolute', alignItems: 'flex-start', top: -30 }}>
            <View style={{ backgroundColor: '#245B98', borderTopRightRadius: 90, height: 30, paddingLeft: 15, paddingRight: 20, justifyContent: 'center' }}>
              <Text style={[Theme.Text.sm, {color: '#fff'}]}>Your question</Text>
            </View>
          </View>
          <View style={{ width: '100%', position: 'absolute', alignItems: 'flex-end', top: -30 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', borderTopLeftRadius: 90, height: 30, paddingLeft: 20, paddingRight: 15, justifyContent: 'center' }}>
              <Image style={{marginRight: 3}} source={require('../res/img/access-time/access-time.png')} />
              <Text style={Theme.Text.sm}>just now</Text>
            </View>
          </View>
          <View style={{ borderColor: '#245B98', borderTopWidth: 2 }} />
          <TouchableOpacity activeOpacity={0.3} onPress={() => this.setState({ conversationsCollapsed: !this.state.conversationsCollapsed })}>
            <View style={{ flexDirection: 'row', paddingHorizontal: 15, paddingVertical: 10, alignItems:'center' }}>
              <Image source={require('../res/img/no-picture/no-picture-hex.png')} />
              <Text numberOfLines={2} style={{flex: 1, marginLeft: 15}}>Lorem ipsum dolor sit amet, soluta regione urbanitas vis in, qui elit populo ut?</Text>
            </View>
          </TouchableOpacity>
        </View>
        <Conversations />
      </View>
    )
  }
}