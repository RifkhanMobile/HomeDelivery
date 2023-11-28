import { StatusBar } from 'expo-status-bar'
import { PaperProvider } from 'react-native-paper'
import { StyleSheet, Text, View, Dimensions, Animated } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import Home from './Screens/Home'
import Account from './Screens/Account'
import Notification from './Screens/Notification'
import Card from './Screens/Card'
import React, { useState, useEffect, useRef } from 'react'
import { Ionicons } from '@expo/vector-icons'

import { AntDesign } from '@expo/vector-icons'
// icons from
import { MaterialCommunityIcons } from '@expo/vector-icons'
import SearchBar from './Components/SearchBar'
import ProductDetails from './Screens/ProductDetails'
import IconButton from './UI/IconButton'
import Orders from './Screens/Orders'

export default function App() {
	const Tab = createBottomTabNavigator()

	const Stack = createStackNavigator()

	const HomeOverView = () => {
		return (
			<Stack.Navigator>
				<Stack.Screen
					name="Home"
					component={Home}
					options={{
						headerShown: true,
						headerTransparent: true,
						headerTitle: ({}) => <SearchBar width="0.8" />,
						// headerStyle:{backgroundColor:'#8B008B'},
						headerTitleAlign: 'center'
						// headerStyle:{backgroundColor:scrolling ? 'black' : 'transparent'}
					}}
				/>
				<Stack.Screen
					name="ProductDetails"
					component={ProductDetails}
					options={{
						headerShown: true,

						headerStyle: { backgroundColor: 'green', marginLeft: 0 },
						headerTintColor: 'white',
						headerTitle: () => <SearchBar width="0.6" />,
						headerTitleAlign: 'left'
					}}
				/>
			</Stack.Navigator>
		)
	}

	const AccountOverView = () => {
		return (
			<Stack.Navigator initialRouteName="Account">
				<Stack.Screen
					name="Account"
					component={Account}
					options={{
						headerShown: true,
						tabBarActiveTintColor: 'white',
						headerTitle: 'Mohammed Rifkhan',
						headerStyle: { backgroundColor: '#8B008B' },
						headerTintColor: 'white',
						headerRight: ({ size, color }) => {
							return (
								<IconButton name="settings-outline" color="white" size={24} />
							)
						},
						headerLeft: () => {
							return (
								<IconButton
									name="add"
									size={24}
									color="red"
									backgroundColor={true}
								/>
							)
						}
					}}
				/>
				<Stack.Screen
					name="Orders"
					component={Orders}
					options={{
						headerShown: true,
						tabBarActiveTintColor: 'white',
						headerTitle: 'My Orders',
						headerStyle: { backgroundColor: 'white' },
						headerTintColor: 'black'
					}}
				/>
			</Stack.Navigator>
		)
	}
	return (
		<PaperProvider>
			<NavigationContainer>
				<Tab.Navigator
					initialRouteName="HomeOverView"
					screenOptions={{
						headerShown: false,
						tabBarStyle: { backgroundColor: '#8B008B' },
						tabBarActiveTintColor: 'white',
						tabBarShowLabel: false
					}}>
					<Tab.Screen
						name="HomeOverView"
						component={HomeOverView}
						options={{
							tabBarIcon: ({ color, size }) => (
								<Ionicons name="home" size={24} color={color} />
							)
						}}
					/>
					<Tab.Screen
						name="Card"
						component={Card}
						options={{
							tabBarIcon: ({ color, size }) => {
								return <AntDesign name="shoppingcart" size={32} color={color} />
							}
						}}
					/>
					<Tab.Screen
						name="AccountOverView"
						component={AccountOverView}
						options={{
							tabBarIcon: ({ color, size }) => {
								return (
									<MaterialCommunityIcons
										name="account"
										size={32}
										color={color}
									/>
								)
							}
						}}
					/>

					{/* <Tab.Screen
						name="Notification"
						component={Notification}
						options={{
							tabBarIcon: ({ color, size }) => {
								return (
									<Ionicons name="notifications" size={size} color={color} />
								)
							}
						}}
					/> */}
				</Tab.Navigator>
			</NavigationContainer>
		</PaperProvider>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	}
})
