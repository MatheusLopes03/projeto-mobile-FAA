import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoginScreen, setIsLoginScreen] = useState(true);
  const [message, setMessage] = useState('');

  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Senha:', password);
    setMessage('Login realizado');
  };

  const handleRegister = () => {
    if (password !== confirmPassword) {
      console.log('Senha esta diferente');
      return;
    }
    console.log('Registrando e-mail:', email);
    console.log('Registrando senha:', password);
    setMessage('Registro realizado com sucesso');
  };

  const toggleScreen = () => {
    setIsLoginScreen(!isLoginScreen);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{isLoginScreen ? 'Login' : 'Cadastro'}</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      {!isLoginScreen && (
        <TextInput
          style={styles.input}
          placeholder="Confirmar senha"
          secureTextEntry={true}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
      )}
      
      {isLoginScreen ? (
        <Button title="Login" onPress={handleLogin} color="#73061A" />
      ) : (
        <Button title="Cadastrar" onPress={handleRegister} color="#73061A" />
      )}
      
      <Text style={styles.message}>{message}</Text>
      
      <TouchableOpacity onPress={toggleScreen}>
        <Text style={styles.toggleButton}>
          {isLoginScreen ? 'Novo aqui? Cadastre-se agora' : 'Ja possui uma conta? Logue aqui'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F2DDB6',
    paddingHorizontal: 20,
  },
  title: {
    color: '#260F06',
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '70%',
    height: 40,
    borderColor: '#260F06',
    backgroundColor: 'white',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  toggleButton: {
    marginTop: 20,
    color: '#592316',
  },
  message: {
    marginTop: 10,
    color: 'green',
  },
});

export default App;
