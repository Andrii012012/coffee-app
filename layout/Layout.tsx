import { ReactElement } from "react";
import { View, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function Layout({ children }: { children: ReactElement }): JSX.Element {

    return (
        <View style={styles.container}>
            {children}
            <StatusBar />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        position: 'relative',
    }
})