import { View, ImageBackground, Text } from "react-native";
import { styles } from "./styles";
import ListTypeCoffee from "./components/ListTypeCoffee";
import ListGoods from "./components/ListGoods";
import SeachGoods from "./components/SeachGoods";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Shop(): JSX.Element {

    return (
        <SafeAreaView style={styles.shop}>
            <View style={styles.header}>
                <SeachGoods />
            </View>
            <View style={styles.content}>
                <View style={styles.bodyBanner}>
                    <ImageBackground style={styles.banner} source={require("../../assets/two-cup-coffe-fon.jpg")}>
                        <View style={styles.info}>
                            <Text style={styles.textInfo}>Promo</Text>
                        </View>
                        <Text style={styles.titleBanner}>Buy one get one FREE</Text>
                    </ImageBackground>
                </View>
                <View style={styles.bodyCoffee}>
                    <View style={{ marginBottom: 20 }}>
                        <ListTypeCoffee />
                    </View>
                    <ListGoods />
                </View>
            </View>
        </SafeAreaView>
    );
}