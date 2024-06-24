import React, { useState } from "react";
import { View, StyleSheet, Image } from "react-native";
import { Button, Icon, Text, TextInput } from "react-native-paper";
import { styles } from "../../config/Style.js";
import Header from "../../components/Header/index.js";

export default function SignUp({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [repetirSenha, setRepetirSenha] = useState("");
  const [hidePassword, setHidePassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = () => {
    // Verificar se os campos de email, senha e repetir senha estão preenchidos
    if (!email.trim() || !senha.trim() || !repetirSenha.trim()) {
      setError("Por favor, preencha todos os campos.");
      return;
    }

    // Verificar se as senhas são iguais
    else if (senha !== repetirSenha) {
      setError("As senhas não estão iguais. Por favor, tente novamente.");
      return;
    }
    else {
        navigation.navigate('SignIn')
    }
  };

  return (
    <View style={estilo.container}>
        <Image source={require('../../components/nu.jpg')}/>
      <View style={styles.container_inner}>
        <Text variant="titleLarge">Página de Registro!</Text>
        {error ? <Text style={styles.errorText}>{error}</Text> : null}
        <TextInput
          activeUnderlineColor="purple"
          label={"Email"}
          placeholder={"Digite seu e-mail"}
          value={email}
          onChangeText={setEmail}
          style={styles.input}
        />
        <TextInput
          activeUnderlineColor="purple"
          label={"Senha"}
          placeholder={"Digite sua Senha"}
          value={senha}
          onChangeText={setSenha}
          secureTextEntry={hidePassword}
          right={
            <Icon
              name={hidePassword ? "eye" : "eye-off"}
              onPress={() => setHidePassword(!hidePassword)}
            />
          }
          style={styles.input}
        />
        <TextInput
          activeUnderlineColor="purple"
          label={"Repetir senha"}
          placeholder={"Repita sua senha"}
          value={repetirSenha}
          onChangeText={setRepetirSenha}
          style={styles.esp}
          secureTextEntry={hidePassword}
          right={
            <Icon
              name={hidePassword ? "eye" : "eye-off"}
              onPress={() => setHidePassword(!hidePassword)}
            />
          }
        />
        <Button mode="contained" onPress={handleRegister} buttonColor="purple">
          Fazer Cadastro
        </Button>
        <Button mode="text" onPress={() => navigation.navigate("SignIn")}>
          Voltar para o login
        </Button>
      </View>
    </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFF",
    alignItems: "center",
    justifyContent: 'center',
    paddingRight: 20,
    paddingLeft: 20,
  },
  borrao: {
    width: "100%",
    height: '200px',
    backgroundColor: 'purple'
  }
})