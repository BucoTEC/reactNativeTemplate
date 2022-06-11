import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

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
				<Text>hello from my new text eee</Text>
			</View>
			<TextInput style={{ margin: 30 }} placeholder="enter message ..." />
			<Button
				onPress={() => {
					alert("You tapped the button!");
				}}
				title="helo"
			/>
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
