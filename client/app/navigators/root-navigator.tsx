/**
 * The root navigator is used to switch between major navigation flows of your app.
 * Generally speaking, it will contain an auth flow (registration, login, forgot password)
 * and a "main" flow (which is contained in your MainNavigator) which the user
 * will use once logged in.
 */
import React from "react"
import { NavigationContainer, NavigationContainerRef } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

import { translate } from "../i18n"

import { ListMessagesScreen, SendMessageScreen } from "../screens"
import { color } from "../theme"

const Tab = createBottomTabNavigator()

const RootTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="SendMessageScreen"
      tabBarOptions={{
        activeTintColor: color.palette.brand,
        inactiveTintColor: color.palette.lightGrey,
        labelStyle: { fontSize: 12 },
        style: { backgroundColor: "rgba(37, 26, 52, 1)" },
      }}
    >
      <Tab.Screen
        name="SendMessageScreen"
        component={SendMessageScreen}
        options={{
          tabBarLabel: translate("navigation.sendMessageScreen"),
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="send" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="ListMessagesScreen"
        component={ListMessagesScreen}
        options={{
          tabBarLabel: translate("navigation.listMessagesScreen"),
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="email" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export const RootNavigator = React.forwardRef<
  NavigationContainerRef,
  Partial<React.ComponentProps<typeof NavigationContainer>>
>((props, ref) => {
  return (
    <NavigationContainer {...props} ref={ref}>
      <RootTab />
    </NavigationContainer>
  )
})

RootNavigator.displayName = "RootNavigator"
