/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Switch,
  Text,
  View
} from 'react-native'

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions
} from 'react-native/Libraries/NewAppScreen'
import Test from './src/shared/components/Test/Test'
import { ReduxContainer } from './src/containers/ReduxContainer'

const App = () => {
  return (
    <ReduxContainer>
      <Test />
    </ReduxContainer>
  )
}

const styles = StyleSheet.create({})

export default App
