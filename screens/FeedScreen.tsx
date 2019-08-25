import React from 'react'
import { View, Text, Image, TouchableOpacity, RefreshControl } from 'react-native';
import Theme from '../styles/default-theme';
import { TextButton } from 'react-native-material-buttons';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import Ripple from 'react-native-material-ripple';
import { FlatList } from 'react-native-gesture-handler';

export default class FeedScreen extends React.Component {
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
        renderItem={() => <FeedItem />} 
      />
    )
  }
}

class FeedItemMenu extends React.Component {
  _menu = null;
 
  setMenuRef = ref => { this._menu = ref }
  showMenu = () => { this._menu.show() }
  hideMenu = () => { this._menu.hide() }

  rippleOpts = {
    rippleCentered: true,
    rippleSize: 50,
    rippleDuration:300
  }

  menuButton = (
    <Ripple onPress={this.showMenu} {...this.rippleOpts} >
      <View style={{paddingHorizontal: 20}}>
        <Image source={require('../res/img/menu-dot/menu-dot.png')} />
      </View>
    </Ripple>
  )

  render() {
    return (
      <Menu ref={this.setMenuRef} button={this.menuButton}>
        <MenuItem onPress={this.hideMenu}>Menu item 1</MenuItem>
        <MenuItem onPress={this.hideMenu}>Menu item 2</MenuItem>
        <MenuItem onPress={this.hideMenu}>Menu item 3</MenuItem>
      </Menu>
    )
  }
}

class FeedItem extends React.Component {
  static Menu = FeedItemMenu
  static Styles = Theme.Screens.Feed.Item

  render() {
    return (
      <View style={FeedItem.Styles.container}>
        <View style={FeedItem.Styles.content}>
          <View style={FeedItem.Styles.timeMenuContainer}>
            <View style={FeedItem.Styles.accessTime}>
              <Image style={FeedItem.Styles.accessTimeImg} source={require('../res/img/access-time/access-time.png')} />
              <Text style={Theme.Text.sm}>2hrs</Text>
            </View>
            <FeedItem.Menu />
          </View>
          <Text style={FeedItem.Styles.questionText}>
            Lorem ipsum dolor sit amet, soluta regione urbanitas vis in, qui elit populo ut?
          </Text>
        </View>
        <View style={FeedItem.Styles.actionOuterContainer}>
          <View style={FeedItem.Styles.actionInnerContainer}>
            <TextButton title='RESPOND' titleColor='#a0a0a0' onPress={() => {}} />
            <TextButton title='ASK IT YOURSELF' titleColor='#a0a0a0' onPress={() => {}} />
          </View>
        </View>
        <View style={FeedItem.Styles.detailsContainer}>
          <View style={FeedItem.Styles.detailsTitle}> 
            <View style={{flex: 1, alignItems: 'flex-end'}}>
              <Text style={Theme.Text.sm}>FRIEND</Text>
            </View>
            <View style={{width: 80}} />
            <View style={{flex: 1, alignItems: 'flex-start'}}>
              <Text style={Theme.Text.sm}>QUESTION</Text>
            </View>
          </View>
          <View style={FeedItem.Styles.detailsName}>
            <Text style={Theme.Text.sm}>Trevor Hansen</Text>
          </View>
          <View style={FeedItem.Styles.detailsPicture}>
            <Image source={require('../res/img/no-picture/no-picture-hex.png')} />
          </View>
        </View>
      </View>
    )
  }
}
