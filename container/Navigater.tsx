import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import { colors } from "../styles/colors";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { TNavigationProp } from "../routes/typesRoutes";
import { useState } from "react";

interface IProps {
    isShow: boolean;
}

interface IListNavigate {
    screen: string;
    icon: string;
}

export default function Navigater(props: IProps): JSX.Element {

    let { isShow } = props;

    const navigation = useNavigation<TNavigationProp>();

    const [currentScreen, setCurrentScreen] = useState<number>(0);

    const listNavigate: IListNavigate[] = [{ screen: "Shop", icon: "home-sharp" }, { screen: 'Liked', icon: 'heart-sharp' }, { screen: "Basket", icon: 'basket-sharp' }];

    function hanglePress(item: IListNavigate, index: number) {
        navigation.navigate(item.screen);
        setCurrentScreen(index)
    }

    if (isShow) {
        return (
            <View style={styles.navigate}>
                <FlatList contentContainerStyle={styles.list} horizontal data={listNavigate} renderItem={({ item, index }) => (
                    <TouchableOpacity onPress={() => hanglePress(item, index)} style={{ position: 'relative' }}>
                        {/* @ts-ignore  */}
                        <Ionicons style={styles.icon} name={item.icon} size={40} color={currentScreen === index ? colors.brick : 'black'} />
                        {currentScreen === index && <View style={styles.decore}></View>}
                    </TouchableOpacity>
                )} />
            </View>
        )

    } else {
        return <></>;
    }

};

const styles = StyleSheet.create({
    navigate: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: 10,
        alignItems: 'center',
        backgroundColor: colors.white,
        zIndex: 0,
        height: 80,
    },
    list: {
        gap: 40,
        alignItems: 'center',
    },
    icon: {
        marginBottom: 10,
    },
    decore: {
        width: '40%',
        height: 8,
        backgroundColor: colors.brick,
        position: 'absolute',
        left: '30%',
        bottom: 0,
        borderRadius: 12,
    }
});