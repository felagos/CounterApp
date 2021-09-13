import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	TouchableNativeFeedback,
	Platform,
	TouchableOpacity,
} from 'react-native';

interface IProps {
	title: string;
	onPress: () => void;
	position: 'left' | 'right';
}

export const FabButton = ({title, onPress, position}: IProps) => {
	const positionFab = position === 'right' ? styles.right : styles.left;

	const fabContent = () => (
		<View style={styles.fab}>
			<Text style={styles.fabItem}>{title}</Text>
		</View>
	);

	const fabIOS = () => (
		<TouchableOpacity style={[styles.fabLocation, positionFab]}>
			{fabContent()}
		</TouchableOpacity>
	);

	const fabAndroid = () => (
		<View style={[styles.fabLocation, positionFab]}>
			<TouchableNativeFeedback
				onPress={onPress}
				background={TouchableNativeFeedback.Ripple('#28425B', false, 30)}>
				{fabContent()}
			</TouchableNativeFeedback>
		</View>
	);

	return Platform.OS === 'android' ? fabAndroid() : fabIOS();
};

const styles = StyleSheet.create({
	fab: {
		borderRadius: 100,
		backgroundColor: '#5856D6',
		width: 60,
		height: 60,
		justifyContent: 'center',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 0.32,
		shadowRadius: 5.46,
		elevation: 9,
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
