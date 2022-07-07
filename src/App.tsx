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

import {NavigationContainer} from '@react-navigation/native'
import ProfilesNavigator from './navigators/ProfilesNavigator'
import {ApiProvider} from '@reduxjs/toolkit/dist/query/react'
import {api} from './redux/api'

const App = () => {
  return (
    <NavigationContainer>
      <ApiProvider api={api}>
        <ProfilesNavigator />
      </ApiProvider>
    </NavigationContainer>
  )
}

export default App
