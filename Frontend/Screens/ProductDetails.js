import { ScrollView, StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import { Ionicons, FontAwesome5 } from '@expo/vector-icons'
import HomeCard from '../Components/HomeCard'
import { TouchableOpacity } from 'react-native'
import Card from '../Components/Card'
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
const ProductDetails = ({ route, navigation }) => {
	const renderItem = itemData => {
		return <HomeCard />
	}

	const card = () => {
		return <Card />
	}
	return (
		<ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
			<Image
				source={require('./../assets/images/shop6.jpg')}
				style={styles.image}
			/>
			<View style={styles.cardComponent}>
				<Text style={styles.name}>Anchor Bundle</Text>
				{/* price */}
				<View style={styles.price}>
					<Text style={styles.newPrice}>Rs.2,330</Text>
					<Text style={styles.oldPrice}>Rs.3,330</Text>
				</View>
				{/* stars */}
				<View style={styles.startContainer}>
					<Text style={styles.icon}>
						<Ionicons name="star" color="red" size={18} />
					</Text>
					<Text style={styles.reviewRate}>5/5 (5)</Text>
				</View>
				{/* options */}
				<View style={styles.shareOptions}>
					<View style={styles.wishContainer}>
						<Ionicons name="heart" color="red" size={20} />
						<Text style={styles.text}>Add to Wishlist(5)</Text>
					</View>
					<View style={styles.shareContainer}>
						<Ionicons name="share" color="red" size={20} />
						<Text style={styles.text1}>Share Product</Text>
					</View>
				</View>

				{/* shop */}
				<View style={styles.shopContainer}>
					<Image
						source={require('./../assets/images/shop3.jpg')}
						style={styles.shopImage}
					/>
					<Text style={styles.shopName}>Marzook Traders</Text>
				</View>
			</View>

			{/* Rating & reviews */}
			<View style={styles.ratingContainer}>
				<Text style={styles.ratingHeader}>Rating & Reviews</Text>
				{/* Rating */}

				<View style={styles.ratingInnerContainer}>
					<Text style={styles.ratePoints}>5.0</Text>
					<Text style={styles.ratingStars}>
						<Ionicons name="star" color="#FF8C00" size={24} />
						<Ionicons name="star" color="#FF8C00" size={24} />
						<Ionicons name="star" color="#FF8C00" size={24} />
						<Ionicons name="star" color="#FF8C00" size={24} />
						<Ionicons name="star" color="#FF8C00" size={24} />
					</Text>
					<Text style={styles.ratingText}>Excellent</Text>
				</View>

				<View style={styles.boxContainer}>
					<View style={styles.box}>
						<Ionicons name="camera" size={20} color="black" />
						<Text style={styles.boxText}>Photos(5)</Text>
					</View>
					<View style={styles.box}>
						<Text style={styles.boxText1}>View all(15)</Text>
					</View>
				</View>
			</View>

			{/* Questions */}

			<View style={styles.questionContainer}>
				<Text style={styles.questionHeader}>
					Questions about this Products(0)
				</Text>

				<View style={styles.questionNoMassageContainer}>
					<Text style={styles.questionNoMassage}>
						There is no questions yet ask the seller now and their will show
						here
					</Text>
				</View>
				<Text style={styles.questionText}>Ask Questions</Text>
			</View>

			{/* follow and visit store */}
			<View style={styles.followAndVisitContainer}>
				<View style={styles.followContainer}>
					<Ionicons name="add" size={22} color="#FF8C00" />
					<Text style={styles.followAndVisitContainerText}>Follow</Text>
				</View>
				<View style={styles.visitStoreContainer}>
					<FontAwesome5 name="store" size={22} color="#FF8C00" />
					<Text style={styles.followAndVisitContainerText}>Visit Store</Text>
				</View>
			</View>

			{/* from the same stores products */}
			<View style={styles.sameStoreContainer}>
				<Text style={styles.sameStoreHeader}>From the same store</Text>
				<FlatList
					data={list}
					keyExtractor={item => item.id}
					renderItem={renderItem}
					horizontal={true}
					showsHorizontalScrollIndicator={false}
				/>
			</View>

			{/* similar products */}
			<View style={styles.similarProductsContainer}>
				<Text style={styles.similarProductsHeader}>
					People who Viewed This Item Also Viewed
				</Text>
				<View style={styles.cards}>
					<FlatList
						data={list}
						keyExtractor={item => item.id}
						renderItem={card}
						showsHorizontalScrollIndicator={false}
						numColumns={2}
					/>
				</View>
			</View>
		</ScrollView>
	)
}

export default ProductDetails

const styles = StyleSheet.create({
	image: {
		width: '100%',
		height: 300
	},
	cardComponent: {
		backgroundColor: 'white',
		borderRadius: 4,
		margin: 8,
		padding: 16
	},
	name: {
		fontSize: 20,
		fontWeight: '700',
		marginBottom: 8
	},
	price: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 8
	},
	newPrice: {
		fontSize: 20,
		fontWeight: '500',
		paddingRight: 4,
		color: 'red'
	},
	oldPrice: {
		textDecorationLine: 'line-through'
	},
	startContainer: {
		flexDirection: 'row',
		// marginBottom:8,
		paddingVertical: 16,
		borderTopWidth: 0.01,
		borderColor: 'lightblue',
		alignItems: 'center'
	},
	icon: {
		paddingRight: 8
	},
	reviewRate: {
		fontSize: 16
	},
	shareOptions: {
		flexDirection: 'row',
		flex: 1,
		justifyContent: 'flex-start',
		borderTopWidth: 0.01,
		borderTopColor: 'lightblue'
	},
	wishContainer: {
		width: '50%',
		flexDirection: 'row',
		paddingVertical: 16
	},
	shareContainer: {
		width: '50%',

		flexDirection: 'row',
		paddingVertical: 16,

		borderColor: 'lightblue',

		borderTopWidth: 0.01,
		paddingLeft: 8
	},
	text: {
		fontSize: 16,

		paddingHorizontal: 12,
		borderRightColor: 'lightblue',
		borderRightWidth: 1
	},
	text1: {
		paddingHorizontal: 16,
		fontSize: 16
	},
	shopContainer: {
		flexDirection: 'row'
	},
	shopImage: {
		width: 22,
		height: 22,
		borderRadius: '50%',
		marginRight: 10
	},
	shopName: {
		fontWeight: '700',
		fontSize: 18
	},
	ratingContainer: {
		flexDirection: 'column',
		padding: 16,
		marginHorizontal: 8,
		marginVertical: 4,
		backgroundColor: 'white',
		borderRadius: 4
	},
	ratingHeader: {
		fontSize: 20,
		fontWeight: '400',
		paddingBottom: 16
	},
	ratingInnerContainer: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center'
	},
	ratePoints: {
		fontSize: 24,
		fontWeight: '500',
		paddingRight: 8
	},
	ratingStars: {
		flexDirection: 'row',
		paddingRight: 8
	},
	ratingText: {
		fontSize: 18,
		padding: 4,
		backgroundColor: '#FF8C00',
		paddingHorizontal: 8,
		paddingVertical: 4,
		color: 'white',
		borderRadius: 4
	},
	boxContainer: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: 16,
		justifyContent: 'space-between'
	},
	box: {
		width: '45%',
		flexDirection: 'row',
		backgroundColor: 'lightgray',
		// margin: 4,
		padding: 4,
		borderRadius: 4,
		alignItems: 'center'
	},
	boxText: {
		paddingLeft: 4
	},
	boxText1: {
		padding: 2
	},
	questionContainer: {
		flexDirection: 'column',
		// alignItems: 'center',
		// marginVertical: 2,
		backgroundColor: 'white',
		borderRadius: 4,
		// padding: 8,
		marginHorizontal: 8,
		marginVertical: 4
	},
	questionHeader: {
		textAlign: 'left',
		fontSize: 18,
		paddingVertical: 8,
		paddingLeft: 8
	},
	questionNoMassageContainer: {
		alignItems: 'center',
		padding: 16
	},
	questionNoMassage: {
		textAlign: 'center',
		fontSize: 16,
		padding: 8
	},
	questionText: {
		color: '#FF8C00',
		textAlign: 'center',
		fontSize: 18,
		fontWeight: '500',
		borderTopColor: 'lightblue',
		borderColor: 'lightblue',
		borderTopWidth: 1,
		borderBottomWidth: 1,
		paddingVertical: 8
	},
	followAndVisitContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		padding: 8,
		backgroundColor: 'white',
		marginHorizontal: 8,
		paddingVertical: 16
	},
	followContainer: {
		width: '35%',
		flexDirection: 'row',
		borderRadius: 4,
		borderWidth: 2,
		borderColor: '#FF8C00',
		padding: 4,
		alignItems: 'center',
		justifyContent: 'center',
		marginHorizontal: 4
	},
	visitStoreContainer: {
		width: '35%',
		justifyContent: 'center',

		flexDirection: 'row',
		borderRadius: 4,
		borderWidth: 2,
		borderColor: '#FF8C00',
		padding: 4,
		alignItems: 'center',
		marginHorizontal: 4
	},
	followAndVisitContainerText: {
		paddingLeft: 6
	},
	sameStoreContainer: {
		marginHorizontal: 8,
		backgroundColor: 'white',
		borderRadius: 4,
		marginTop: 8,
		padding: 4
	},
	sameStoreHeader: {
		paddingVertical: 8,
		paddingLeft: 4,
		fontSize: 20,
		fontWeight: '400'
	},
	similarProductsContainer: {
		marginHorizontal: 8,
		marginVertical: 4,
		flexDirection: 'column'
	},
	similarProductsHeader: {
		padding: 8,
		fontSize: 19,
		fontWeight: '400',
		textAlign: 'center',
		color: 'red'
	},
	cards: {
		flexDirection: 'row',
		flexWrap: 'wrap',
	},
})
