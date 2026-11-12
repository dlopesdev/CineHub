import { StyleSheet, Text, View } from 'react-native';

import CampoFormulario from './campoformulario';

interface DadosPessoaisProps {
    nome: string;
    email: string;
    telefone: string;
    nascimento: string;
    cpf: string;

    onNomeChange: (texto: string) => void;
    onEmailChange: (texto: string) => void;
    onTelefoneChange: (texto: string) => void;
    onNascimentoChange: (texto: string) => void;
    onCpfChange: (texto: string) => void;

    onFocus: () => void;
    onBlur: () => void;
    onSubmit: () => void;
}

export default function DadosPessoais({
    nome,
    email,
    telefone,
    nascimento,
    cpf,

    onNomeChange,
    onEmailChange,
    onTelefoneChange,
    onNascimentoChange,
    onCpfChange,

    onFocus,
    onBlur,
    onSubmit,

}: DadosPessoaisProps) {

    return (
        <View style={styles.container}>

            <Text style={styles.titulo}>
                Dados pessoais
            </Text>

            <CampoFormulario
                label="Nome completo"
                placeholder="Digite seu nome completo"
                value={nome}
                onChangeText={onNomeChange}
                onFocus={onFocus}
                onBlur={onBlur}
                onSubmitEditing={onSubmit}
            />

            <CampoFormulario
                label="E-mail"
                placeholder="Digite seu e-mail"
                keyboardType="email-address"
                value={email}
                onChangeText={onEmailChange}
            />

            <CampoFormulario
                label="Telefone"
                placeholder="Digite seu telefone"
                keyboardType="phone-pad"
                value={telefone}
                onChangeText={onTelefoneChange}
            />

            <CampoFormulario
                label="Data de nascimento"
                placeholder="DD/MM/AAAA"
                value={nascimento}
                onChangeText={onNascimentoChange}
            />

            <CampoFormulario
                label="CPF"
                placeholder="Digite seu CPF"
                keyboardType="numeric"
                value={cpf}
                onChangeText={onCpfChange}
            />

        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        marginTop: 20,
    },

    titulo: {
        color: '#ffffff',
        fontSize: 20,
        fontFamily: 'PoppinsBold',
        marginBottom: 15,
    },

});