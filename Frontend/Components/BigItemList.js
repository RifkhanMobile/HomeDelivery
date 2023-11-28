import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import HomeCard from './HomeCard'
import { FlatList } from 'react-native'
import Card2_1 from './Card2_1'

const BigItemList = ({ title, subTitle }) => {
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

	const displayItems = list.slice(0, 10)

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.title}>{title}</Text>
				<Text style={styles.subTitle}>{subTitle}</Text>
			</View>
			<ScrollView
				style={styles.listContainer}
				horizontal={true}
				showsHorizontalScrollIndicator={false}>
				<View style={styles.list}>
					{displayItems.map(item => (
						<HomeCard />
					))}
				</View>
			</ScrollView>
		</View>
	)
}

export default BigItemList

const styles = StyleSheet.create({
	container: {
		// flexDirection: 'column',
		height: 470,
		marginHorizontal: 8,
		borderRadius: 4,
		backgroundColor: 'white',
		padding: 8,
		marginVertical: 8
	},
	header: {
		flexDirection: 'row',
		padding: 8,
		alignItems: 'center'
	},
	title: {
		paddingRight: 8,
		fontSize: 20,
		textTransform: 'capitalize',
		fontWeight: '600'
	},
	subTitle: {
		fontSize: 20,
		fontWeight: '600',
		color: 'red'
	},
	listContainer: {
		overflow: 'scroll'
	},
	list: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		width: 640
	}
})
