import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "../styles";
import { changeLiked } from "../../../features/goods/goods";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { TNavigationProp } from "../../../routes/typesRoutes";
import { useNavigation } from "@react-navigation/native";
import { IGoods } from "../../../features/goods/type";

interface IProps {
    data: IGoods,
}

export default function Header(props: IProps): JSX.Element {

    let { data } = props;

    const dispatch = useAppDispatch();

    const goTo = useNavigation<TNavigationProp>();

    function hangleIsLiked(isLiked: boolean, index: number) {
        dispatch(changeLiked({ isLiked, index }));
    }

    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={() => goTo.goBack()}>
                <Ionicons name='chevron-back-outline' size={40} />
            </TouchableOpacity>
            <Text style={styles.text}>Detail</Text>
            <TouchableOpacity>
                <Ionicons onPress={() => hangleIsLiked(!data.liked, Number(data.id))} name="heart-sharp" size={45} color={data.liked ? 'red' : 'black'} />
            </TouchableOpacity>
        </View>
    );
}