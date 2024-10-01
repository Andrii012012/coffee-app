import { ScrollView, Text, TouchableOpacity } from "react-native";
import { styles } from "../styles";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { changeTypeCoffee } from "../../../features/goods/goods";
import { TTypeCoffee, typesCoffee } from "../../../constants/typesCoffee";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { colors } from "../../../styles/colors";


export default function ListTypeCoffee(): JSX.Element {

    const typeCoffeeSeach = useAppSelector((state) => state.goodsReducer.filters.typeCoffee);

    const dispatch = useAppDispatch();
    
    function activeElement(typeCoffee: TTypeCoffee): void {
        dispatch(changeTypeCoffee(typeCoffee));
    }

    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {typesCoffee.map((item, index) => (
                <TouchableOpacity onPress={(_) => activeElement(item)} style={{ ...styles.item, backgroundColor: typeCoffeeSeach === item ? colors.brick : colors.lightGray }} key={index}>
                    <Text style={{ ...styles.textCoffee, color: typeCoffeeSeach === item ? colors.white : colors.dark }}>{item}</Text>
                </TouchableOpacity>
            ))}
        </ScrollView>
    );
}