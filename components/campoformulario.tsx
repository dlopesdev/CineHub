import { StyleSheet, Text, TextInput, View } from 'react-native';

interface CampoFormProps {
    label: string;
    placeholder: string;
    secureTextEntry?: boolean;
    keyboardType?: 'default' | 'email-address' | 'phone-pad' | 'numeric';

    value?: string;
    onChangeText?: (texto: string) => void;
    onFocus?: () => void;
    onBlur?: () => void;
    onSubmitEditing?: () => void;
}

export default function CampoFormulario({ label, placeholder, secureTextEntry = false, keyboardType = 'default', value, onChangeText, onFocus, onBlur, onSubmitEditing, }: CampoFormProps) {

    return (<View style={styles.container}>
        <Text style={styles.label}> {label} </Text>

        <TextInput style={styles.input}
            placeholder={placeholder}
            placeholderTextColor="#888888"
            secureTextEntry={secureTextEntry}
            keyboardType={keyboardType}
            value={value} onChangeText={onChangeText}
            onFocus={onFocus} onBlur={onBlur}
            onSubmitEditing={onSubmitEditing} />
    </View>);
}

const styles = StyleSheet.create({
    container: { marginBottom: 15, },
    label: {
        color: '#ffffff',
        fontSize: 14,
        fontFamily: 'PoppinsSemiBold',
        marginBottom: 6,
    },
    input: {
        backgroundColor: '#1e1e1e',
        borderRadius: 10,
        padding: 14,
        color: '#ffffff',
        fontFamily: 'PoppinsRegular',
        borderWidth: 1,
        borderColor: '#333333',
    },
});