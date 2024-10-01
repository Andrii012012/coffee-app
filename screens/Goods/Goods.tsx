import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { IRoutes } from "../../routes/typesRoutes";
import { useState } from "react";
import { useAppDispatch } from "../../hooks/useAppDispatch";;
import { useAppSelector } from "../../hooks/useAppSelector";
import { addGoods } from "../../features/basket/basket";
import { TSizeCoffee } from "../../interface/sizeCoffee";
import { styles } from "./styles";
import Header from "./components/Header";
import InfoGoods from "./components/InfoGoods";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Goods({ route }: { route: RouteProp<IRoutes, 'Goods'> }): JSX.Element {

    const indexGoods: number = route.params.id;

    const data = useAppSelector((state) => state.goodsReducer.goods[indexGoods]);

    const [price, setPrice] = useState<number>(data.price);

    const [sizeCoffee, setSizeCoffee] = useState<TSizeCoffee>('S');

    const dispatch = useAppDispatch();

    function buyNow() {
        dispatch(addGoods({ ...data, price: price, sizeCoffee: sizeCoffee, selected: false, }));
    }

    return (
        <SafeAreaView style={styles.goods}>
            <ScrollView>
                <View style={styles.container}>
                    <Header data={data} />
                    <InfoGoods data={data} setSizeCoffee={setSizeCoffee} setPrice={setPrice} sizeCoffee={sizeCoffee} />
                </View>
                <View style={styles.bodyOrder}>
                    <View style={styles.infoPrice}>
                        <Text style={styles.textPrice}>Price</Text>
                        <Text style={styles.price}>$ {price}</Text>
                    </View>
                    <TouchableOpacity onPress={() => buyNow()} style={styles.btn}>
                        <Text style={styles.textBtn}>Buy Now</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
