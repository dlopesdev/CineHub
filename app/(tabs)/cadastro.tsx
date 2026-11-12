import { Button, Pressable, ScrollView, StyleSheet, Switch, Text, View, useWindowDimensions } from 'react-native';
import { useState } from 'react';
import DadosPessoais from '../../components/dadospessoais';
import DadosAcesso from '../../components/dadosacesso';

export default function CadastroScreen() {

    const { width } = useWindowDimensions();

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [nascimento, setNascimento] = useState('');
    const [cpf, setCpf] = useState('');

    const [campoAtivo, setCampoAtivo] = useState(false);


    const [aceitaTermos, setAceitaTermos] = useState(false);

    const [mensagem, setMensagem] = useState('');

    function handleSave() {
        setMensagem('Cadastro realizado com sucesso!');

        console.log('Botão Cadastrar pressionado');
    }

    function handlePress() {
        setMensagem('Você tocou no Pressable!');
    }


    function handleLongPress() {
        setMensagem('Você manteve o Pressable pressionado!');
    }

    function handleFocus() {
        setCampoAtivo(true);
        setMensagem('Campo selecionado');
    }


    function handleBlur() {
        setCampoAtivo(false);
        setMensagem('Campo perdeu o foco');
    }


    function handleSubmit() {
        setMensagem('Campo enviado pelo teclado!');
        console.log('Campo enviado');
    }

    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.scrollContent}
            keyboardShouldPersistTaps="handled"
        >
            <View
                style={[
                    styles.card,
                    {
                        width: width > 500 ? 420 : '90%',
                    }
                ]}
            >

                <Text style={styles.title}>
                    Criar sua conta
                </Text>

                <Text style={styles.subtitle}>
                    Cadastre-se para aproveitar o CineHub
                </Text>

                <DadosPessoais
                    nome={nome} onNomeChange={setNome}
                    email={email} onEmailChange={setEmail}
                    telefone={telefone} onTelefoneChange={setTelefone}
                    nascimento={nascimento} onNascimentoChange={setNascimento}
                    cpf={cpf} onCpfChange={setCpf}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onSubmit={handleSubmit}
                />

                <DadosAcesso />

                <Text style={campoAtivo ? styles.campoAtivo : styles.campoInativo}>
                    {campoAtivo
                        ? '● Campo em foco'
                        : '○ Nenhum campo em foco'}
                </Text>

                <View style={styles.switchContainer}>

                    <Text style={styles.switchTexto}>
                        Aceitar termos de uso
                    </Text>

                    <Switch
                        value={aceitaTermos}
                        onValueChange={(valor) => {
                            setAceitaTermos(valor);

                            setMensagem(
                                valor
                                    ? 'Termos aceitos'
                                    : 'Termos não aceitos'
                            );
                        }}
                    />

                </View>

                <Text style={styles.estadoSwitch}>
                    {aceitaTermos
                        ? 'Termos aceitos'
                        : 'Termos não aceitos'}
                </Text>

                <Pressable
                    style={({ pressed }) => [
                        styles.pressable,
                        pressed && styles.pressablePressionado
                    ]}
                    onPress={handlePress}
                    onLongPress={handleLongPress}
                >
                    <Text style={styles.pressableTexto}>
                        Toque ou segure aqui
                    </Text>
                </Pressable>

                {mensagem !== '' && (
                    <Text style={styles.mensagem}>
                        {mensagem}
                    </Text>
                )}

                <View style={styles.botao}>

                    <Button
                        title="Cadastrar"
                        onPress={handleSave}
                    />

                    {/*// CORRETO:
                    // onPress={handleSave}

                    // Não devemos usar:
                    // onPress={handleSave()} */}

                </View>

            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#111111',
    },

    scrollContent: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 40,
    },

    card: {
        backgroundColor: '#1c1c1c',
        padding: 25,
        borderRadius: 12,
        elevation: 5,

        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.25,
        shadowRadius: 5,
    },

    title: {
        color: '#ffffff',
        fontSize: 28,
        fontFamily: 'PoppinsBold',
    },

    subtitle: {
        color: '#aaaaaa',
        fontSize: 15,
        fontFamily: 'PoppinsRegular',
        marginTop: 5,
        marginBottom: 25,
    },

    campoAtivo: {
        color: '#4CAF50',
        fontSize: 13,
        fontFamily: 'PoppinsSemiBold',
        marginBottom: 10,
    },

    campoInativo: {
        color: '#777777',
        fontSize: 13,
        fontFamily: 'PoppinsRegular',
        marginBottom: 10,
    },

    switchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 10,
    },

    switchTexto: {
        color: '#ffffff',
        fontSize: 14,
        fontFamily: 'PoppinsRegular',
    },

    estadoSwitch: {
        color: '#aaaaaa',
        fontSize: 13,
        marginTop: 5,
        fontFamily: 'PoppinsRegular',
    },

    pressable: {
        backgroundColor: '#333333',
        padding: 15,
        borderRadius: 10,
        marginTop: 20,
        alignItems: 'center',
    },

    pressablePressionado: {
        opacity: 0.6,
    },

    pressableTexto: {
        color: '#ffffff',
        fontFamily: 'PoppinsSemiBold',
    },

    mensagem: {
        color: '#ffffff',
        textAlign: 'center',
        fontSize: 14,
        marginTop: 15,
        fontFamily: 'PoppinsSemiBold',
    },

    botao: {
        marginTop: 20,
        marginBottom: 10,
        borderRadius: 10,
        overflow: 'hidden',
    },

});