import React from 'react';
import { View,  Image, SafeAreaView } from 'react-native';
import { NavigationInjectedProps, MaterialTopTabBar, MaterialTopTabBarProps } from "react-navigation";
import DefaultTheme from './styles/default-theme';
import { TouchableOpacity } from 'react-native-gesture-handler';

function ImageButton(props) {
  const { source, onPress, ...rest } = props

  return (
    <TouchableOpacity {...rest} onPress={onPress} activeOpacity={0.8}>
      <Image source={source} />
    </TouchableOpacity>
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
          <ImageButton source={require('./res/img/qs/qs.png')} onPress={() => navigation.navigate('Qs')} />
          <ImageButton source={require('./res/img/chats/chats.png')} onPress={() => navigation.navigate('Chat')} />
          <View style={DefaultTheme.NavBar.midGap} />
          <ImageButton source={require('./res/img/people/people.png')} onPress={() => navigation.navigate('People')} />
          <ImageButton source={require('./res/img/settings/settings.png')} onPress={() => navigation.navigate('Settings')} />
        </View>
        <View style={DefaultTheme.NavBar.tabs}>
          <MaterialTopTabBar {...this.props} />
        </View>
      </View>
    );
  }
}
