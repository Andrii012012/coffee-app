import { Ionicons } from "@expo/vector-icons";
import { FlatList, ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../styles";
import { TNavigationProp } from "../../../routes/typesRoutes";
import { useNavigation } from "@react-navigation/native";
import { IGoods } from "../../../features/goods/type";
import { filterGoods } from "../../../features/goods/selectors";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { addGoods } from "../../../features/basket/basket";
import { useAppDispatch } from "../../../hooks/useAppDispatch";


export default function ListGoods(): JSX.Element {

    const goTo = useNavigation<TNavigationProp>();

    const goodsCoffee: IGoods[] = useAppSelector(filterGoods);

    const dispatch = useAppDispatch();

    function buyNow(item: IGoods) {
        dispatch(addGoods({ ...item, sizeCoffee: 'S', selected: false, }));
    }

    return (
        <FlatList contentContainerStyle={styles.list} data={goodsCoffee} renderItem={({ item }: { item: IGoods }) => (
            <TouchableOpacity onPress={() => goTo.navigate('Goods', { id: Number(item.id) })} key={item.title} style={styles.itemCoffee}>
                <ImageBackground style={styles.imageCoffee} source={{ uri: item.image }}>
                    <View style={styles.bodyRating}>
                        <Ionicons style={styles.star} name="star" size={20} color='gold' />
                        <Text style={styles.ratingText}>{item.rating}</Text>
                    </View>
                </ImageBackground>
                <Text style={styles.titleCoffe}>{item.title}</Text>
                <Text style={styles.textCoffe}>{item.text}</Text>
                <View style={styles.wrapperCoffee}>
                    <Text style={styles.priceCoffee}>$ {item.price}</Text>
                    <TouchableOpacity onPress={() => buyNow(item)} style={styles.actionCoffee}>
                        <Ionicons name="add-outline" size={30} color="white" />
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
        )} />
    );
}