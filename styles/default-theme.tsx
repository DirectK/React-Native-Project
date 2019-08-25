import { StyleSheet, StatusBar, Dimensions } from 'react-native';

const highlightColors = {
  highlightBright:  { backgroundColor: '#D0E7FF' },
  highlightDefault: { backgroundColor: '#92BDE7' },
  highlightDark:    { backgroundColor: '#1E2D5B' }
}

const baseColors = StyleSheet.create({
  primary:   { backgroundColor: '#044389' },
  secondary: { backgroundColor: '#255C99' },
  ...highlightColors
})

const navBar = StyleSheet.create({
  top: {
    position: 'relative',
    width: '100%',
    elevation: 10,
    ...baseColors.primary,
  },
  icons: {
    zIndex: 50,
    position: 'relative',
    flexDirection: 'row', 
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    marginTop: StatusBar.currentHeight,
    padding: 7
  },
  midGap: {
    width: 50
  },
  tabs: {
    zIndex: 30,
    position: 'relative'
  },
  logo: {
    zIndex: 100,
    position: 'absolute',
    left: Dimensions.get('screen').width / 2 - 34,
    top: StatusBar.currentHeight + 5
  }
})

const screen = {
  flex: 1,
  backgroundColor: '#EDEDED'
}

const text = StyleSheet.create({
  sm: {
    fontSize: 12
  }
})

const screens = {
  Feed: {
    Item: StyleSheet.create({
      container: { 
        marginTop: 20
      },
      content: {
        backgroundColor: '#fff',
        paddingVertical: 25,
         marginTop: 20
      },
      timeMenuContainer: {
        marginLeft: 20,
        flexDirection: 'row', 
        justifyContent: 'space-between',
        alignItems: 'center'
      },
      accessTime: {
        flexDirection: 'row',
        alignItems:'center'
      },
      accessTimeImg: {
        marginRight: 3
      },
      questionText: {
        marginTop: 15,
        marginHorizontal: 20
      },
      actionOuterContainer: {
        paddingHorizontal: 10,
        backgroundColor: '#fff',
        elevation: 5
      },
      actionInnerContainer: {
        borderTopColor: '#D4D4D4',
        borderTopWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "flex-start"
      },
      detailsContainer: {
        width: '100%',
        position: 'absolute'
      },
      detailsTitle: {
        width: '70%',
        height: 35,
        borderRadius: 90,
        backgroundColor: '#D2D2D2',
        alignSelf: 'center',
        flexDirection: 'row', 
        alignItems: 'center'
      },
      detailsName: {
        height: 35,
        paddingHorizontal: 20,
        marginTop: 4,
        borderRadius: 90,
        backgroundColor: '#EDEDED',
        alignSelf: 'center',
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: "space-around"
      },
      detailsPicture: {
        width: '100%',
        position: 'absolute',
        alignItems: 'center',
        top: -12
      }
    })
  },
  Chat: {
    Item: {
      
    }
  }
}

const DefaultTheme = {
  Colors: baseColors,
  NavBar: navBar,
  Screen: screen,
  Screens: screens,
  Text: text
}

export default DefaultTheme