import { Ionicons } from "@expo/vector-icons";
import { TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../styles";
import { colors } from "../../../styles/colors";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { changeSeach } from "../../../features/goods/goods";
import debounce from "../../../utils/debounce";


export default function SeachGoods(): JSX.Element {

    const dispatch = useAppDispatch();

    function seach(value: string): void {
        dispatch(changeSeach(value));
    }

    const debunceSeach = debounce(seach);

    return (
        <View style={styles.container}>
            <View style={styles.containerInput}>
                <TextInput onChangeText={(event) => debunceSeach(event)} placeholderTextColor={colors.gray} placeholder='Seach coffee' style={styles.input} />
                <Ionicons style={styles.iconSearch} name="search-outline" color={'white'} size={30} />
            </View>
            <TouchableOpacity style={styles.menu}>
                <Ionicons name="grid-outline" color={colors.white} size={30} />
            </TouchableOpacity>
        </View>
    )
}