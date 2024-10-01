import { styles } from "./styles";
import ListLikedGoods from "./components/ListLikedGoods";
import { SafeAreaView } from "react-native-safe-area-context";


export default function Liked(): JSX.Element {

    return (
        <SafeAreaView style={styles.liked}>
            <ListLikedGoods />
        </SafeAreaView>
    );
}
