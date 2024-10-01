import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Main from "../screens/Main/Main";
import Shop from "../screens/Shop/Shop";
import Goods from "../screens/Goods/Goods";
import { IRoutes } from "./typesRoutes";
import Navigater from "../container/Navigater";
import { useState } from "react";
import { View } from "react-native";
import Liked from "../screens/Liked/Liked";
import Basket from "../screens/Basket/Basket";

export default function Navigation(): JSX.Element {

    const [isShowNavigation, setIsShowNavigation] = useState<boolean>(false);

    function hangleChangeState(): void {
        setIsShowNavigation(true);
    }

    const Stack = createStackNavigator<IRoutes>();

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Main"
                    component={Main}
                    initialParams={{ hangleChange: hangleChangeState }}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name='Shop'
                    component={Shop}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name='Goods'
                    component={Goods}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name='Liked'
                    component={Liked}
                    options={
                        {
                            headerShown: false,
                        }
                    }
                />
                <Stack.Screen
                    name='Basket'
                    component={Basket}
                    options={{
                        headerShown: false,
                    }}
                />
            </Stack.Navigator>
            {isShowNavigation && <View style={{ marginBottom: 80, }}></View>}
            <Navigater isShow={isShowNavigation} />
        </NavigationContainer>
    )
}