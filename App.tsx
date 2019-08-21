import React from 'react';
import { Button, View, Text} from 'react-native';
import { NavigationInjectedProps, createStackNavigator, createAppContainer, createMaterialTopTabNavigator } from "react-navigation";
import { NavBar } from './NavBar';
import DefaultTheme from './styles/default-theme';

class FeedScreen extends React.Component<NavigationInjectedProps> { 
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: "center"}}>
        <Text>Feed Screen</Text>
        <Button title='Settings' onPress={() => this.props.navigation.push('Settings')} />
      </View>
    );
  }
}


class ChatScreen extends React.Component<NavigationInjectedProps> { 
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: "center"}}>
        <Text>Chat Screen</Text>
      </View>
    );
  }
}

class QsScreen extends React.Component<NavigationInjectedProps> { 
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: "center"}}>
        <Text>Qs Screen</Text>
      </View>
    );
  }
}

class PeopleScreen extends React.Component<NavigationInjectedProps> { 
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: "center"}}>
        <Text>People Screen</Text>
      </View>
    );
  }
}

class SettingsScreen extends React.Component<NavigationInjectedProps> { 
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: "center"}}>
        <Text>Settings Screen</Text>
      </View>
    );
  }
}

const TabNavigator = createMaterialTopTabNavigator(
  {
    Feed: FeedScreen,
    Chat: ChatScreen
  },
  {
    tabBarOptions: {
      style: {
        position: 'relative',
        zIndex: -1,
        height: 40,
        backgroundColor: DefaultTheme.Colors.secondary.backgroundColor
      },
      tabStyle: {
        height: 40
      },
      indicatorStyle: {
        backgroundColor: '#fff'
      }
    },
    tabBarComponent: props => (
      <NavBar {...props} />
    )
  }
);

const AppContainer = createAppContainer(createStackNavigator({
    Main: TabNavigator,
    Qs: QsScreen,
    People: PeopleScreen,
    Settings: SettingsScreen
  }, {
    defaultNavigationOptions: {
      header: null
    }
  }
))

export default class App extends React.Component {
  render() {
    return <AppContainer />
  }
};
