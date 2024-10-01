import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../styles";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { changeSelected, IGoodsBasket } from "../../../features/basket/basket";
import { colors } from "../../../styles/colors";

interface IProps {
    goods: IGoodsBasket[]
}

export default function ListBasket(props: IProps): JSX.Element {

    let { goods } = props;

    const dispatch = useAppDispatch();

    function hangelSelected(index: number, selected: boolean): void {
        dispatch(changeSelected({ index: index, selected: selected }));
    }

    return (
        <FlatList keyExtractor={() => String(Math.random() * 12)} contentContainerStyle={styles.list} data={goods} renderItem={({ item, index }) => (
            <View key={index} style={styles.item}>
                <TouchableOpacity onPress={() => hangelSelected(index, !item.selected)} style={item.selected ? { ...styles.checkbox, backgroundColor: colors.brick } : { ...styles.checkbox, backgroundColor: '#0000' }}></TouchableOpacity>
                <View style={styles.content}>
                    <Image style={styles.image} source={{ uri: item.image }} />
                    <View style={styles.bodyInfo}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.text}>{item.text}</Text>
                    </View>
                    <View>
                        <Text style={styles.price}>{item.price} $</Text>
                        <Text style={styles.size}>Size - {item.sizeCoffee}</Text>
                    </View>
                </View>
            </View>
        )} />
    )
}