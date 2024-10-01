import { Ionicons } from "@expo/vector-icons";
import { Image, Text, View } from "react-native";
import { styles } from "../styles";
import { colors } from "../../../styles/colors";
import { IGoods } from "../../../features/goods/type";
import { TSizeCoffee } from "../../../interface/sizeCoffee";
import { useState } from "react";
import ListSizeCoffee from "./ListSizeCoffee";

interface IProps {
    data: IGoods,
    setSizeCoffee: React.Dispatch<React.SetStateAction<TSizeCoffee>>;
    setPrice: React.Dispatch<React.SetStateAction<number>>;
    sizeCoffee: TSizeCoffee;
}

export default function InfoGoods(props: IProps): JSX.Element {

    let { data, setPrice, setSizeCoffee, sizeCoffee } = props;

    const [isReadMore, setIsReadMore] = useState<Boolean>(false);

    return (
        <View style={styles.infoGoods}>
            <Image style={styles.imageCoffee} source={{ uri: data.image }} />
            <Text style={styles.nameCoffee}>{data.text}</Text>
            <View style={styles.body}>
                <Text style={styles.additive}>Ice/Hot</Text>
                <View style={styles.bodyIcons}>
                    <Ionicons style={styles.icon} color={colors.brick} name="bicycle-outline" size={30} />
                    <Ionicons style={styles.icon} color={colors.brick} name="cafe-outline" size={30} />
                    <Ionicons style={styles.icon} color={colors.brick} name="gift-outline" size={30} />
                </View>
            </View>
            <View style={styles.bodyRating}>
                <Ionicons style={styles.iconStar} color='gold' name="star" size={35} />
                <Text style={styles.textRating}>{data.rating}</Text>
            </View>
            <View style={styles.bodyLine}>
                <View style={styles.line}></View>
            </View>
            <Text style={styles.titleDescription}>Description</Text>
            <Text style={styles.description}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia eveniet similique quasi fugit assumenda mollitia
                {!isReadMore ? <Text style={{ marginRight: 10 }}>..<Text style={styles.specialText} onPress={() => setIsReadMore(!isReadMore)}> Read More</Text></Text>
                    : <Text>quam architecto
                        aperiam, sit distinctio blanditiis</Text>}
            </Text>
            <View style={styles.bodySizeCoffe}>
                <Text style={styles.textSize}>Size</Text>
                <ListSizeCoffee sizeCoffee={sizeCoffee} setPrice={setPrice} setSizeCoffee={setSizeCoffee} data={data} />
            </View>
        </View>
    );
}