import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { RouteProp, useNavigation } from "@react-navigation/native";
import { IRoutes, TNavigationProp } from "../../routes/typesRoutes";
import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Main({ route }: { route: RouteProp<IRoutes, 'Main'> }): JSX.Element {

    let { hangleChange } = route.params;

    const goTo = useNavigation<TNavigationProp>();

    function hangleAction() {
        hangleChange();
        goTo.navigate('Shop');
    }

    return (
        <SafeAreaView style={styles.main}>
            <ScrollView contentContainerStyle={styles.wrapper}>
                <View style={styles.image}>
                    <Image
                        source={require('../../assets/coffe-image.png')} />
                </View>
                <View style={styles.content}>
                    <Text style={styles.title}>Fall in love with Coffee in Blissfull Delight</Text>
                    <Text style={styles.subTitle}>Welcome to our cozy coffee corner, where every cup is a delightful for you</Text>
                    <TouchableOpacity onPress={hangleAction} style={styles.btn}>
                        <Text style={styles.btnText}>Get Started</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}