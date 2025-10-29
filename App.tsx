import { StyleSheet, Text, View } from 'react-native';
import CustumInput from './src/components/CustumInput';
import CustomButton from './src/components/CustomButton';
import { useState } from 'react';

export default function App() {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>

      <View style={styles.formContainer}>

        <Text style={styles.textTitulo}>Sign in</Text>

        <CustumInput
          value={email}
          placeholder={'Correo'}
          onChange={setEmail}
        />

        <CustumInput
          value={password}
          placeholder={'Contraseña'}
          onChange={setPassword}
          type='password'
        />

        <CustomButton
        title="Login"
        onPress={() => {}}
        variant="primary"
        />

        <CustomButton
        title="Registrarse"
        onPress={() => {}}
        variant="secondary"
        />


      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#a9a9a9ff',
  },
  formContainer: {
    width: '80%',
    backgroundColor: '#fff',
    padding: 80,
    borderRadius: 20,
    gap: 40,
    alignItems: 'center',
  },
  textTitulo: {
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
  },
});