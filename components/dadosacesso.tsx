import { StyleSheet, Text, View } from 'react-native';
import CampoFormulario from './campoformulario';

export default function DadosAcesso() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Dados de acesso
      </Text>

      <CampoFormulario
        label="Senha"
        placeholder="Digite sua senha"
        secureTextEntry={true}
      />

      <CampoFormulario
        label="Confirmar senha"
        placeholder="Digite sua senha novamente"
        secureTextEntry={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
  },

  titulo: {
    color: '#ffffff',
    fontSize: 20,
    fontFamily: 'PoppinsBold',
    marginBottom: 15,
  },
});