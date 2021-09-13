import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface IProps {
	title: string;
	onPress: () => void;
	position: 'left' | 'right';
}

export const FabButton = ({title, onPress, position}: IProps) => {
	const positionFab = position === 'right' ? styles.right : styles.left;
	return (
		<TouchableOpacity
			style={[styles.fabLocation, positionFab]}
			onPress={onPress}>
			<View style={styles.fab}>
				<Text style={styles.fabItem}>{title}</Text>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	fab: {
		borderRadius: 100,
		backgroundColor: '#5856D6',
		width: 60,
		height: 60,
		justifyContent: 'center',
	},
	fabItem: {
		color: 'white',
		alignSelf: 'center',
		fontSize: 25,
		fontWeight: 'bold',
	},
	fabLocation: {
		position: 'absolute',
		bottom: 25,
	},
	left: {
		left: 25,
	},
	right: {
		right: 25,
	},
});
