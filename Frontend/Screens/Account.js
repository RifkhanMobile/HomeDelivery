import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React, { useEffect, useRef } from 'react'
import IconButton from '../UI/IconButton'
import { FontAwesome5 } from '@expo/vector-icons'
import { Fontisto } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { ScrollView } from 'react-native'
import { Image } from 'react-native'
import { FlatList } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { Pressable } from 'react-native'
const Account = ({ route, navigation }) => {
	const list = [{ id: 1 }, { id: 12 }, { id: 'sdf' }]
	// auto scroll in tracking package
	const flatListRef = useRef(null)

	// orders handler

	const ordersHandler = () => {
		console.log('pressed')
		navigation.navigate('Orders')
	}
	const renderItem = () => {
		return (
			<View style={styles.trackProduct}>
				<View style={styles.trackImageContainer}>
					<Image
						source={require('./../assets/images/shop1.webp')}
						style={styles.trackImage}
					/>
				</View>
				<View style={styles.trackDetailsContainer}>
					<Text style={styles.trackingStatus}>Delivered</Text>
					<Text
						style={styles.trackingMessage}
						numberOfLines={2}
						ellipsizeMode="tail">
						Your Package has been delivered,Please Tap here to share a review
					</Text>
				</View>
			</View>
		)
	}
	const renderProduct = () => {
		return (
			<TouchableOpacity
				style={[
					styles.trackProduct,
					{ borderBottomColor: 'gray', borderBottomWidth: 1 }
				]}>
				<View style={styles.trackImageContainer}>
					<Image
						source={require('./../assets/images/shop1.webp')}
						style={styles.trackImage}
					/>
				</View>
				<View style={styles.trackDetailsContainer}>
					<Text
						// style={styles.trackingStatus}
						numberOfLines={2}
						ellipsizeMode="tail"
						style={{ color: 'black', fontSize: 16 }}>
						Mens Cotton t-shirt neck short sleeve 3g3 g34gg34 trfb brbrtthrt
						nrtn bnyn errbf rbrtbrb
					</Text>

					<View
						style={{
							width: '100%',
							paddingVertical: 8,
							flexDirection: 'row',
							alignItems: 'flex-start',
							justifyContent: 'space-between'
							// paddingHorizontal: 16
						}}>
						<Text style={{ fontSize: 16, fontWeight: '500' }}>Rs.5618</Text>
						<Text
							style={{
								paddingHorizontal: 8,
								paddingVertical: 1,
								borderWidth: 2,
								borderRadius: 10,
								borderColor: 'red',
								color: 'red',
								fontWeight: '500'
							}}>
							Delivered
						</Text>
					</View>
				</View>
			</TouchableOpacity>
		)
	}

	return (
		<ScrollView
			style={{ backgroundColor: 'lightgray', flex: 1 }}
			showsVerticalScrollIndicator={false}>
			<View style={styles.ordersContainer}>
				<Text style={styles.header}>My Orders</Text>
				<View style={styles.ordersIconsList}>
					<Pressable
						style={styles.iconsList}
						onPress={() => navigation.navigate('Orders', { type: 'pay' })}>
						<Ionicons name="card-outline" size={35} color="gray" />
						<Text>To Pay</Text>
					</Pressable>

					<Pressable
						style={styles.iconsList}
						onPress={() => navigation.navigate('Orders', { type: 'ship' })}>
						<FontAwesome5 name="clipboard-list" size={35} color="gray" />

						<Text>To Ship</Text>
					</Pressable>

					<Pressable
						style={styles.iconsList}
						onPress={() => navigation.navigate('Orders', { type: 'receive' })}>
						<FontAwesome5 name="shipping-fast" size={35} color="gray" />

						<Text>To Receive</Text>
					</Pressable>
					<Pressable style={styles.iconsList} onPress={() => {}}>
						<Ionicons
							name="ios-chatbox-ellipses-outline"
							size={35}
							color="gray"
						/>
						<Text>Messages</Text>
					</Pressable>
				</View>
				<View style={styles.actionContainer}>
					<Pressable
						style={styles.actionInnerContainer}
						onPress={() => navigation.navigate('Orders', { type: 'return' })}>
						<View style={styles.actionInnerContainerReturn}>
							<Fontisto name="arrow-return-left" size={18} color="black" />
						</View>
						<Text style={styles.actionText}>My Returns</Text>
					</Pressable>

					<Pressable
						style={styles.actionInnerContainer}
						onPress={() => navigation.navigate('Orders', { type: 'cancel' })}>
						<MaterialCommunityIcons
							name="text-box-remove-outline"
							size={32}
							color="black"
						/>
						<Text style={styles.actionText}>My Cancellations</Text>
					</Pressable>
				</View>
			</View>

			{/* track package */}
			<View style={styles.trackPackage}>
				<Text style={styles.header}>Track Package</Text>
				<FlatList
					ref={flatListRef}
					data={list}
					renderItem={renderItem}
					keyExtractor={item => item.id}
					horizontal={true}
					pagingEnabled={true}
					showsHorizontalScrollIndicator={false}
				/>
			</View>
			<View style={styles.deliveryProducts}>
				<Text style={styles.header}>Delivered Products</Text>

				<View>
					<FlatList
						ref={flatListRef}
						data={list}
						renderItem={renderProduct}
						keyExtractor={item => item.id}
						showsVerticalScrollIndicator={false}
						numColumns={1}
					/>
				</View>
			</View>
		</ScrollView>
	)
}

export default Account

const styles = StyleSheet.create({
	ordersContainer: {
		flexDirection: 'column',
		backgroundColor: 'white',
		padding: 12
	},
	header: {
		fontSize: 18,
		fontWeight: '500'
	},
	ordersIconsList: {
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		alignItems: 'center',
		paddingVertical: 16
	},
	iconsList: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center'
	},
	actionContainer: {
		marginVertical: 24,
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		alignItems: 'center'
	},
	actionInnerContainer: {
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		alignItems: 'center'
	},
	actionInnerContainerReturn: {
		borderWidth: 3,
		borderRadius: 4,
		borderColor: 'gray',
		padding: 2
	},
	actionText: {
		paddingLeft: 8
	},
	// trach package
	trackPackage: {
		marginTop: 4,
		flexDirection: 'column',
		backgroundColor: 'white',
		padding: 12,
		height: 'auto'
	},
	trackProduct: {
		width: Dimensions.get('window').width * 0.95,
		flexDirection: 'row',
		alignItems: 'center',
		paddingVertical: 16
	},
	trackImageContainer: {
		width: 60,
		height: 60
	},
	trackImage: {
		flex: 1,
		borderRadius: 4
	},
	trackDetailsContainer: {
		flex: 1,
		flexDirection: 'column',
		paddingHorizontal: 8,
		alignItems: 'flex-start',
		justifyContent: 'space-around'
	},
	trackingStatus: {
		paddingHorizontal: 2,
		fontWeight: '500',
		fontSize: 16,
		color: 'red'
	},
	trackingMessage: {
		padding: 2,
		fontSize: 15
	},
	// delivery products
	deliveryProducts: {
		marginTop: 4,
		flexDirection: 'column',
		backgroundColor: 'white',
		padding: 12
	}
})
