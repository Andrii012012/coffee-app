import { styles } from "./styles";
import ListLikedGoods from "./components/ListLikedGoods";
import { SafeAreaView } from "react-native-safe-area-context";
import { filterLiked } from "../../features/goods/selectors";
import { useAppSelector } from "../../hooks/useAppSelector";
import { Text, View } from "react-native";


export default function Liked(): JSX.Element {

    const likedGoods = useAppSelector(filterLiked);

    return (
        <SafeAreaView style={styles.liked}>
            {likedGoods.length > 0 ? <ListLikedGoods likedGoods={likedGoods} />
                : <View style={styles.body}><Text style={styles.message}>There is no product you like here</Text></View>}
        </SafeAreaView>
    );
}
