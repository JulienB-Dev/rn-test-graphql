import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client"
import { enableScreens } from "react-native-screens"
import { SafeAreaProvider, initialWindowMetrics } from "react-native-safe-area-context"
import { ToggleStorybook } from "../storybook/toggle-storybook"
import React, { useState, useEffect, useRef } from "react"

import {
  useBackButtonHandler,
  RootNavigator,
  canExit,
  setRootNavigation,
  useNavigationPersistence,
} from "./navigators"

import { NAVIGATION_PERSISTENCE_KEY } from "./enums/navigationTypes"

import * as storage from "./utils/storage"
import "./utils/ignore-warnings"

enableScreens()

const App = () => {
  const navigationRef = useRef()

  const [client, setClient] = useState(null)

  useEffect(() => {
    const apolloClient = new ApolloClient({
      uri: "http://localhost:4000",
      cache: new InMemoryCache(),
    })
    setClient(apolloClient)
  }, [])

  setRootNavigation(navigationRef)
  useBackButtonHandler(navigationRef, canExit)

  const { initialNavigationState, onNavigationStateChange } = useNavigationPersistence(
    storage,
    NAVIGATION_PERSISTENCE_KEY,
  )

  return client ? (
    <ApolloProvider client={client}>
      <ToggleStorybook>
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
          <RootNavigator
            ref={navigationRef}
            initialState={initialNavigationState}
            onStateChange={onNavigationStateChange}
          />
        </SafeAreaProvider>
      </ToggleStorybook>
    </ApolloProvider>
  ) : null
}

export default App
