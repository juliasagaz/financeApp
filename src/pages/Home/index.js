import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Header from "../../components/Header";
import Balance from "../../components/Balance";
import Movements from "../../components/Movements";
import Actions from "../../components/Actions";
const list = [
    {
        id: 1,
        label: "Boleto conta luz",
        value: "300,00",
        date: "17/06/2024",
        type: 0, //despesas
    },
    {
        id: 2,
        label: "Pix cliente X",
        value: "2.500,00",
        date: "19/06/2024",
        type: 1, //entrada
    },
    {
        id: 3,
        label: "Salário",
        value: "7.200,00",
        date: "23/06/2024",
        type: 1, //entrada
    },
];
export default function Home({navigation}) {
    return (
        <View style={styles.container}>
            <Header name="Eduardo C." />
            <Balance saldo="1.000.000,00" gastos="-527,00" />
            <Actions />
            <Text style={styles.title}>Últimas movimentações</Text>
            <FlatList
                style={styles.list}
                data={list}
                keyExtractor={(item) => String(item.id)}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => <Movements data={item} />}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fafafa",
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        margin: 14,
    },
    list: {
        marginStart: 14,
        marginEnd: 14,
    },
});