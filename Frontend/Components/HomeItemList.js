import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import HomeCard from './HomeCard'

const HomeItemList = ({ title, subTitle }) => {
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.title}>{title}</Text>
				<Text style={styles.subTitle}>{subTitle}</Text>
			</View>
			<ScrollView
				style={styles.list}
				pagingEnabled={true}
				horizontal={true}
				showsHorizontalScrollIndicator={false}>
				<HomeCard />
				<HomeCard />
				<HomeCard />
				<HomeCard />
				<HomeCard />
				<HomeCard />
			</ScrollView>
		</View>
	)
}

export default HomeItemList

const styles = StyleSheet.create({
	container: {
		flexDirection: 'column',
		height: 270,
		marginHorizontal: 8,
        borderRadius:4,
        backgroundColor:'white',
        padding:8,
        marginVertical:8,
        // width:1000
	},
	header: {
        flexDirection: 'row',
        padding: 8,
        alignItems:'center',
	},
	title: {
        paddingRight:8,
		fontSize: 20,
		textTransform: 'capitalize',
		fontWeight: '600'
	},
    subTitle:{
        fontSize: 20,
        fontWeight: '600',
        color:'red'
    },
	list: {
		height: 200,
		flexDirection: 'column',
	}
})
