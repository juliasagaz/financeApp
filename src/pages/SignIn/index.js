import React, { useState } from "react";
import { View, StyleSheet, Image } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import Header from "../../components/Header";

export default function SignIn({ navigation }) {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");

    const handleLogin = () => {
        if (!email.trim() || !senha.trim()) {
            setError("Por favor, preencha todos os campos.");
            return;
        } else {
            navigation.navigate("Home");
        }
    };

    return (
        <View style={estilo.container}>
             <Image source={require('../../components/nu.jpg')}/>
            <View style={estilo.separator} />
            <View style={estilo.formContainer}>
                {error ? <Text style={estilo.errorText}>{error}</Text> : null}
                <Text>Email</Text>
                <TextInput
                    activeUnderlineColor="purple"
                    label={"Email"}
                    placeholder={"Digite seu e-mail"}
                    value={email}
                    onChangeText={setEmail}
                    style={estilo.input}
                />
                <Text>Senha</Text>
                <TextInput
                    activeUnderlineColor="purple"
                    label={"Senha"}
                    placeholder={"Digite sua Senha"}
                    value={senha}
                    onChangeText={setSenha}
                    style={estilo.input}
                    secureTextEntry // Para esconder a senha
                />
                <Button mode="contained" onPress={handleLogin} buttonColor="purple">
                    Entrar
                </Button>
                <Button onPress={() => navigation.navigate("SignUp")} textColor="purple">
                    Registrar
                </Button>
            </View>
        </View>
    );
};

const estilo = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFF",
        alignItems: "center",
        justifyContent: 'flex-start',
        paddingRight: 20,
        paddingLeft: 20,
    },
    header: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 20,
        marginBottom: 10,
    },
    logo: {
        width: 100,
        height: 100,
    },
    title: {   
        fontSize: 24,
        fontWeight: "bold",
        color: "purple",
    },
    separator: {
        width: "100%",
        height: 2,
        backgroundColor: "purple",
        marginBottom: 20,
    },
    formContainer: {
        width: "100%",
        marginTop: 20,
    },
    lefttext: {
        alignItems: "flex-start",
    },
    input: {
        width: "100%",
        marginBottom: 10,
    },
    errorText: {
        color: "red",
        marginBottom: 10,
    },
});
