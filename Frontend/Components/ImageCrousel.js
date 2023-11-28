import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import shop1 from './../assets/images/shop1.webp'
import shop2 from './../assets/images/shop2.jpg'
import shop3 from './../assets/images/shop3.jpg'
import shop4 from './../assets/images/shop5.jfif'
import shop5 from './../assets/images/shop6.jpg'
import { Image } from 'react-native'
import { ScrollView } from 'react-native'
import SearchBar from './SearchBar'

const images = [
	{
		id: 1,
		image: shop1
	},
	{
		id: 2,
		image: shop2
	},
	{
		id: 3,
		image: shop3
	},
	{
		id: 4,
		image: shop4
	},
	{
		id: 5,
		image: shop5
	}
]

const ImageCrousel = () => {
	return (
		<ScrollView style={styles.container} horizontal={true} pagingEnabled={true}>
			{images.map(image => (
				<Image
					key={image.id}
					source={image.image}
					style={{
						width: Dimensions.get('window').width,
						height: 200
					}}
				/>
			))}
		</ScrollView>
	)
}

export default ImageCrousel

const styles = StyleSheet.create({
	container: {
		// backgroundColor:'black',
		// flex: 1,
		height: 200
	},
	searchContainer: {
		height: 200,
		flex: 1
	}
})
