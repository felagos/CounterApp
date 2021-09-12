import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface IProps {
	title: string;
	onPress: () => void;
	position: 'left' | 'right';
}

export const FabButton = ({title, onPress, position}: IProps) => {
	const positionFab =
		position === 'right' ? styles.fabLocationRight : styles.fabLocationLeft;
	return (
		<TouchableOpacity style={positionFab} onPress={onPress}>
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
	fabLocationRight: {
		position: 'absolute',
		bottom: 25,
		right: 25,
	},
	fabLocationLeft: {
		position: 'absolute',
		bottom: 25,
		left: 25,
	},
});
