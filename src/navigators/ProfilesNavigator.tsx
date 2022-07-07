import React from 'react'

import {createNativeStackNavigator} from '@react-navigation/native-stack'
import CharactersListScreen from '../containers/CharactersListScreen'

export type ProfilesStackParams = {
  Characters: undefined
  Details: {id: number}
}

const ProfilesStack = createNativeStackNavigator<ProfilesStackParams>()

const Details = () => <></>

function ProfilesNavigator() {
  return (
    <ProfilesStack.Navigator>
      <ProfilesStack.Screen
        name="Characters"
        component={CharactersListScreen}
      />
      <ProfilesStack.Screen name="Details" component={Details} />
    </ProfilesStack.Navigator>
  )
}

export default ProfilesNavigator
