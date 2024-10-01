import { useAppSelector } from "../../hooks/useAppSelector";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import ListBasket from "./components/ListBasket";
import { ScrollView, Text, TouchableOpacity } from "react-native";
import { filterSumMoney } from "../../features/basket/selectors";

export default function Basket(): JSX.Element {

    const goods = useAppSelector(state => state.basketReducer.goods);

    const sum = useAppSelector(filterSumMoney);

    return (
        <SafeAreaView style={styles.basket}>
            {goods.length > 0 && <ScrollView>
                <ListBasket goods={goods} />
                <Text style={styles.sum}>{sum} $</Text>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnText}>Place an order</Text>
                </TouchableOpacity>
            </ScrollView>}
        </SafeAreaView>
    )
}
