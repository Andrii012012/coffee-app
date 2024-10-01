import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../styles";
import { IGoods } from "../../../features/goods/type";
import { Ionicons } from "@expo/vector-icons";
import { filterLiked } from "../../../features/goods/selectors";
import { TNavigationProp } from "../../../routes/typesRoutes";
import { useNavigation } from "@react-navigation/native";
import { useAppSelector } from "../../../hooks/useAppSelector";

export default function ListLikedGoods(): JSX.Element {

    const likedGoods = useAppSelector(filterLiked);

    const goTo = useNavigation<TNavigationProp>();

    return (
        <FlatList data={likedGoods} renderItem={({ item }: { item: IGoods }) => (
            <TouchableOpacity onPress={() => goTo.navigate('Goods', { id: Number(item.id) })} style={styles.wrapper}>
                <Image style={styles.image} source={{ uri: item.image }} />
                <View style={styles.infoCoffee}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.text}>{item.text}</Text>
                </View>
                <View>
                    <Text style={styles.price}>{item.price} $</Text>
                    <View style={styles.bodyRating}>
                        <Text style={styles.rating}>{item.rating}</Text>
                        <Ionicons name='star-sharp' size={30} color='gold' />
                    </View>
                </View>
            </TouchableOpacity>
        )} />
    );
}