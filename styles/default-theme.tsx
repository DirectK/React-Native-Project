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
    top: StatusBar.currentHeight + 5,
  }
})

const DefaultTheme = {
  Colors: baseColors,
  NavBar: navBar
}

export default DefaultTheme