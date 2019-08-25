import React from 'react'
import { View, Text } from 'react-native'
import { NavigationInjectedProps, createStackNavigator, createAppContainer, createMaterialTopTabNavigator } from "react-navigation"
import { NavBar } from './NavBar'
import Theme from './styles/default-theme'
import * as Screens from './screens'

class QsScreen extends React.Component<NavigationInjectedProps> { 
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: "center"}}>
        <Text>Qs Screen</Text>
      </View>
    )
  }
}

class PeopleScreen extends React.Component<NavigationInjectedProps> { 
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: "center"}}>
        <Text>People Screen</Text>
      </View>
    )
  }
}

class SettingsScreen extends React.Component<NavigationInjectedProps> {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: "center"}}>
        <Text>Settings Screen</Text>
      </View>
    )
  }
}

const TabNavigator = createMaterialTopTabNavigator(
  {
    Feed: Screens.FeedScreen,
    Chat: Screens.ChatScreen
  },
  {
    tabBarOptions: {
      style: {
        position: 'relative',
        zIndex: -1,
        height: 40,
        ...Theme.Colors.secondary
      },
      tabStyle: {
        height: 40
      },
      indicatorStyle: {
        backgroundColor: '#fff'
      }
    },
    tabBarComponent: props => <NavBar {...props} />
  }
)

const AppContainer = createAppContainer(createStackNavigator({
    Main: {
      screen: TabNavigator,
      navigationOptions: {
        header: null
      }
    },
    Qs: QsScreen,
    People: PeopleScreen,
    Settings: SettingsScreen,
    Conversation: Screens.ConversationScreen
  }
))

export default class App extends React.Component {
  render() {
    return <AppContainer />
  }
}
