import { useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function PerfilScreen() {
  const [foto, setFoto] = useState<string | null>(null);
  const insets = useSafeAreaInsets();

  async function selecionarFoto() {
    const permissao = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissao.granted) {
      Alert.alert('Permissão necessária', 'Permita o acesso à galeria para escolher uma foto.');
      return;
    }
    const resultado = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.8,
    });
    if (!resultado.canceled && resultado.assets.length > 0) {
      setFoto(resultado.assets[0].uri);
    }
  }

  return (
    <View style={[styles.container, { paddingBottom: Math.max(insets.bottom, 20) }]}>
      <Text style={styles.title}>Meu perfil</Text>
      <Text style={styles.subtitle}>Personalize sua experiência no CineHub.</Text>
      <Pressable style={styles.avatarArea} onPress={selecionarFoto}>
        {foto ? <Image source={{ uri: foto }} style={styles.avatar} /> : <View style={styles.avatarPlaceholder}><Text style={styles.avatarIcon}>＋</Text></View>}
        <Text style={styles.changePhoto}>Escolher foto da galeria</Text>
      </Pressable>
      <View style={styles.info}>
        <Text style={styles.name}>Cinéfilo CineHub</Text>
        <Text style={styles.description}>Seu espaço para descobrir e guardar histórias.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#111111', paddingTop: 58, paddingHorizontal: 24, alignItems: 'center' },
  title: { color: '#ffffff', fontSize: 28, fontFamily: 'PoppinsBold', alignSelf: 'flex-start' },
  subtitle: { color: '#aaaaaa', fontFamily: 'PoppinsRegular', alignSelf: 'flex-start', marginTop: 4 },
  avatarArea: { alignItems: 'center', marginTop: 48 },
  avatar: { width: 138, height: 138, borderRadius: 69 },
  avatarPlaceholder: { width: 138, height: 138, borderRadius: 69, backgroundColor: '#242424', borderWidth: 1, borderColor: '#555555', alignItems: 'center', justifyContent: 'center' },
  avatarIcon: { color: '#e6c477', fontSize: 54 },
  changePhoto: { color: '#e6c477', fontFamily: 'PoppinsSemiBold', marginTop: 16 },
  info: { alignItems: 'center', marginTop: 42 },
  name: { color: '#ffffff', fontSize: 20, fontFamily: 'PoppinsBold' },
  description: { color: '#999999', fontFamily: 'PoppinsRegular', textAlign: 'center', marginTop: 8 },
});
