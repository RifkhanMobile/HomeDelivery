import { StyleSheet, Text, View, Dimensions, Image } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import ImageCrousel from '../Components/ImageCrousel'
import { Ionicons } from '@expo/vector-icons'
import CategoryComponent from '../Components/CategoryComponent'
import { ScrollView, Animated } from 'react-native'

import HomeCard from '../Components/HomeCard'
import HomeItemList from '../Components/HomeItemList'
import BigItemList from '../Components/BigItemList'
import { FlatList } from 'react-native'
import { TouchableOpacity } from 'react-native'
import Card from '../Components/Card'
const Home = ({ route, navigation }) => {
	const list = [
		{ id: 1 },
		{ id: 12 },
		{ id: 'sdf' },
		{ id: 'fewf' },
		{ id: 'vdg' },
		{ id: 'vsdgv' },
		{ id: 'yt' },
		{ id: 'ytt' },
		{ id: 'ty' },
		{ id: 'w' },
		{ id: 'wfdf' },
		{ id: 'fweef' },
		{ id: 'fwref' },
		{ id: 'fwegf' },
		{ id: 'fwsef' },
		{ id: 'fwhef' },
		{ id: 'fwgef' }
	]

	const card = () => {
		return <Card />
	}

	return (
		<ScrollView showsVerticalScrollIndicator={false}>
			<ImageCrousel />

			<CategoryComponent />
			<HomeItemList title="Top sale" />
			<BigItemList title="Today Offers" subTitle="Limited" />
			<HomeItemList title="Everything Under" subTitle="Rs.99" />
			<BigItemList title="Categories" />

			<View style={styles.productCardContainer}>
				<Text style={styles.title}>Just For You</Text>
				<View style={styles.cards}>
					<FlatList
						data={list}
						renderItem={card}
						keyExtractor={item => item.id}
						numColumns={2}
					/>
				</View>
			</View>
		</ScrollView>
	)
}

export default Home

const styles = StyleSheet.create({
	productCardContainer: {
		flexDirection: 'column',
		padding: 4,
		backgroundColor: 'white',
		marginHorizontal: 8
	},
	title: {
		paddingLeft: 8,
		fontSize: 20,
		textTransform: 'capitalize',
		fontWeight: '600',
		paddingVertical: 8
	},
	cards: {
		flexDirection: 'row',
		flexWrap: 'wrap'
	}
})
