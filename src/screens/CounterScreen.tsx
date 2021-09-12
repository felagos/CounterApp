import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {FabButton} from '../components/FabButton';

export const CounterScreen = () => {
	const [counter, setCounter] = useState(10);

	const handleAddCounter = () => {
		setCounter(counter + 1);
	};

	const handleSubtractCounter = () => {
		setCounter(counter - 1);
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Contador: {counter}</Text>
			<FabButton title="+1" onPress={handleAddCounter} position="right" />
			<FabButton title="-1" onPress={handleSubtractCounter} position="left" />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
	},
	title: {
		textAlign: 'center',
		fontSize: 40,
	},
});
