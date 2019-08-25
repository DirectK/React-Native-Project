import React from 'react';
import { View,  Image } from 'react-native';
import { NavigationInjectedProps, MaterialTopTabBar, MaterialTopTabBarProps } from "react-navigation";
import DefaultTheme from './styles/default-theme';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Ripple from 'react-native-material-ripple'

function ImageButton(props) {
  const { source, onPress, ...rest } = props
  let TouchableEffect = TouchableOpacity
  let finalProps = {
    ...rest, 
    onPress: onPress, 
    activeOpacity: 0.8
  }
  
  if (rest.type == 'ripple') {
    TouchableEffect = Ripple
    finalProps = {
      onPress: onPress,
      rippleCentered: true,
      rippleSize: 50,
      rippleDuration: 400
    }
  }

  return (
    <TouchableEffect {...finalProps}>
      <Image source={source} />
    </TouchableEffect>
  )
}
  
export class NavBar extends React.Component<NavigationInjectedProps & MaterialTopTabBarProps> {
  render() {
    const { navigation } = this.props

    return (
      <View style={DefaultTheme.NavBar.top}>
        <View style={DefaultTheme.NavBar.logo}>
          <ImageButton
            source={require('./res/img/logo/logo.png')} 
            onPress={() => navigation.navigate('Feed')} 
          />
        </View>
        <View style={DefaultTheme.NavBar.icons}>
          <ImageButton type='ripple' source={require('./res/img/qs/qs.png')} onPress={() => navigation.navigate('Qs')} />
          <ImageButton type='ripple' source={require('./res/img/chats/chats.png')} onPress={() => navigation.navigate('Chat')} />
          <View style={DefaultTheme.NavBar.midGap} />
          <ImageButton type='ripple' source={require('./res/img/people/people.png')} onPress={() => navigation.navigate('People')} />
          <ImageButton type='ripple' source={require('./res/img/settings/settings.png')} onPress={() => navigation.navigate('Settings')} />
        </View>
        <View style={DefaultTheme.NavBar.tabs}>
          <MaterialTopTabBar {...this.props} />
        </View>
      </View>
    );
  }
}
