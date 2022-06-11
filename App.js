import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
	return (
		<View style={styles.container}>
			<Text style={styles.header}>Zdravo Riade</Text>
			<StatusBar style="auto" />
			<View
				style={{
					justifyContent: "flex-start",
					marginTop: 1,
				}}
			>
				<Text>hello from my new text</Text>
			</View>
			<Button title="helo" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},

	header: {
		// fontSize: "50px",
		color: "red",
	},
});
