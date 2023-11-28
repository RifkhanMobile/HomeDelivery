import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native'
const IconButton = ({ name, color, size, backgroundColor }) => {
	return (
		<TouchableOpacity
			style={[styles.container, backgroundColor && styles.extraStyles]}>
			<Ionicons name={name} color={color} size={size} />
		</TouchableOpacity>
	)
}

export default IconButton

const styles = StyleSheet.create({
	container: {
		marginHorizontal: 12,
		marginVertical: 4
	},
	extraStyles: {
		padding: 8,
		borderRadius: '50%',
		backgroundColor: 'white'
	}
})
