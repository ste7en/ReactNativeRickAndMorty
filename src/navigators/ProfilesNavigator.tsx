import React from 'react'

import {createNativeStackNavigator} from '@react-navigation/native-stack'
import CharactersListScreen from '../containers/CharactersListScreen'
import {Character} from '../models/Character'
import CharacterDetailsScreen from '../containers/CharacterDetailsScreen'

export type ProfilesStackParams = {
  Characters: undefined
  Details: Character
}

const ProfilesStack = createNativeStackNavigator<ProfilesStackParams>()

function ProfilesNavigator() {
  return (
    <ProfilesStack.Navigator>
      <ProfilesStack.Screen
        name="Characters"
        component={CharactersListScreen}
      />
      <ProfilesStack.Screen name="Details" component={CharacterDetailsScreen} />
    </ProfilesStack.Navigator>
  )
}

export default ProfilesNavigator
