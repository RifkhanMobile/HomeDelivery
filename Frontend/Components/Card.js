import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import { TouchableOpacity } from 'react-native'
import {Ionicons} from '@expo/vector-icons'
const Card = () => {
	return (
		<TouchableOpacity style={styles.card}>
			<Image
				source={require('./../assets/images/shop2.jpg')}
				style={styles.image}
			/>
			<View style={styles.details}>
				<Text numberOfLines={2} style={styles.productName}>
					2pxs women watches bracler set gorsl vwevev vwvevwev
				</Text>
				<View style={styles.reviewStars}>
					<Ionicons name="star" color="yellow" size={20} />
					<Text style={styles.reviewRate}>4/5 (71)</Text>
				</View>
				<View style={styles.coupons}>
					<Text style={styles.coupon1}>Free Delivery</Text>
					<Text style={styles.coupon2}>8 Vouchers</Text>
				</View>

				<View style={styles.priceContainer}>
					<Text style={styles.price}>Rs.456</Text>
					<Text
						style={{
							textDecorationLine: 'line-through',
							paddingLeft: 4
						}}>
						Rs.456
					</Text>
				</View>
			</View>
		</TouchableOpacity>
	)
}

export default Card

const styles = StyleSheet.create({
	card: {
		// flex: 1,
		height: 300,
		backgroundColor: 'white',
		width: '48%',
		margin: 4
	},
	image: {
		height: '55%',
		width: '100%',

		borderTopRightRadius: 4,
		borderTopLeftRadius: 4
	},
	name: {
		fontWeight: '500',
		fontSize: 18,
		textAlign: 'left',
		paddingHorizontal: 8
	},
	price: {
		fontWeight: '500',
		textAlign: 'justify',

		// paddingHorizontal: 8,
		fontSize: 18,
		color: 'red'
	},
	details: {
		flexDirection: 'column',
		paddingHorizontal: 8,
		paddingVertical: 4
	},
	productName: {
		fontSize: 18
	},
	reviewStars: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingTop: 4
	},
	reviewRate: {
		paddingLeft: 4
	},
	coupons: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingTop: 4
	},
	coupon1: {
		paddingHorizontal: 5,
		paddingVertical: 1,
		paddingRight: 4,
		borderWidth: 1,
		borderColor: 'blue',
		color: 'blue',
		fontSize: 12,
		marginRight: 4,
		borderRadius: 2
	},
	coupon2: {
		paddingHorizontal: 5,
		paddingVertical: 1,
		borderWidth: 1,
		borderColor: 'red',
		color: 'red',

		fontSize: 12,
		borderRadius: 2
	},
	priceContainer: {
		flexDirection: 'row',
		paddingTop: 4,
		alignItems: 'center'
	}
})
