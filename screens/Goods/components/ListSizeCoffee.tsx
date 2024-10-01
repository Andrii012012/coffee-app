import { FlatList, Text, TouchableOpacity } from "react-native";
import { styles } from "../styles";
import { colors } from "../../../styles/colors";
import { TSizeCoffee } from "../../../interface/sizeCoffee";
import { IGoods } from "../../../features/goods/type";

interface IProps {
    sizeCoffee: TSizeCoffee;
    data: IGoods;
    setSizeCoffee: React.Dispatch<React.SetStateAction<TSizeCoffee>>;
    setPrice: React.Dispatch<React.SetStateAction<number>>;
}

export default function ListSizeCoffee(props: IProps): JSX.Element {

    let { data, sizeCoffee, setSizeCoffee, setPrice } = props;

    const typeSizeCoffee: TSizeCoffee[] = ['S', 'M', 'L'];

    function changeSizeCoffee(item: TSizeCoffee) {
        setSizeCoffee(item);
        if (item === 'M') {
            setPrice(Math.round(data.price * 1.2));
        } else if (item === 'L') {
            setPrice(Math.round(data.price * 1.4));
        }
        else {
            setPrice(data.price);
        }
    }

    return (
        <FlatList contentContainerStyle={styles.wrapperSizeCoffee} data={typeSizeCoffee} renderItem={({ item }) => (
            <TouchableOpacity onPress={() => changeSizeCoffee(item)} style={sizeCoffee !== item ? styles.sizeCoffee : { ...styles.sizeCoffee, borderColor: colors.brick, backgroundColor: colors.lightGray }}>
                <Text style={sizeCoffee !== item ? styles.symbolSize : { ...styles.symbolSize, color: colors.brick }}>{item}</Text>
            </TouchableOpacity>
        )} />
    );
}