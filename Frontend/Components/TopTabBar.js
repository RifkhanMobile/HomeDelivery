import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Pressable } from 'react-native'
import { ScrollView } from 'react-native'

const TopTabBar = ({ type }) => {
	const [list, setList] = useState({
		all: type === 'all' ? true : false,
		pay: type === 'pay' ? true : false,
		ship: type === 'ship' ? true : false,
		receive: type === 'receive' ? true : false,
		return: type === 'return' ? true : false,
		cancel: type === 'cancel' ? true : false
	})

	const pressHandler = type => {
		setList(current => {
			return {
				all: type === 'all' ? true : false,
				pay: type === 'pay' ? true : false,
				ship: type === 'ship' ? true : false,
				receive: type === 'receive' ? true : false,
				return: type === 'return' ? true : false,
				cancel: type === 'cancel' ? true : false
			}
		})
	}
	return (
		<ScrollView
			style={styles.topBarContainer}
			horizontal={true}
			showsHorizontalScrollIndicator={false}>
			<Pressable
				style={[styles.topBar, list.all && styles.activeTabBar]}
				onPress={() => pressHandler('all')}>
				All
			</Pressable>
			<Pressable
				style={[styles.topBar, list.pay && styles.activeTabBar]}
				onPress={() => pressHandler('pay')}>
				To Pay
			</Pressable>
			<Pressable
				style={[styles.topBar, list.ship && styles.activeTabBar]}
				onPress={() => pressHandler('ship')}>
				To Ship
			</Pressable>
			<Pressable
				style={[styles.topBar, list.receive && styles.activeTabBar]}
				onPress={() => pressHandler('receive')}>
				To Receive
			</Pressable>
			<Pressable
				style={[styles.topBar, list.return && styles.activeTabBar]}
				onPress={() => pressHandler('return')}>
				My Returns
			</Pressable>
			<Pressable
				style={[styles.topBar, list.cancel && styles.activeTabBar]}
				onPress={() => pressHandler('cancel')}>
				My Cancellations
			</Pressable>
		</ScrollView>
	)
}

export default TopTabBar

const styles = StyleSheet.create({
	topBarContainer: {
		backgroundColor: 'white',
		flexDirection: 'row',

		height: 200
	},
	topBar: {
		padding: 14,
		fontSize: 18,
		alignItems: 'center'
	},
	activeTabBar: {
		borderBottomColor: 'red',
		borderBottomWidth: 2
	}
})
