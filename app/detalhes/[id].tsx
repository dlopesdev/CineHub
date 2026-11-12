import { useLocalSearchParams, useRouter } from 'expo-router';
import { useState } from 'react';
import { Alert, ImageBackground, Pressable, ScrollView, Share, StyleSheet, Switch, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { filmes } from '../../data/filmes';
import { useFavoritos } from '../../contexts/FavoritosContext';

export default function DetalhesFilme() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const [modoCompacto, setModoCompacto] = useState(false);
  const { alternarFavorito, possuiFavorito } = useFavoritos();
  const filme = filmes.find((item) => item.id === id);

  if (!filme) {
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Filme não encontrado</Text>
        <Pressable style={styles.botao} onPress={() => router.back()}><Text style={styles.botaoTexto}>← Voltar</Text></Pressable>
      </View>
    );
  }

  const favorito = possuiFavorito(filme.id);

  async function compartilharFilme() {
    try {
      await Share.share({
        message: `🎬 ${filme.titulo} (${filme.ano})\n⭐ Nota: ${filme.nota}\nGênero: ${filme.categoria}\n\nConfira no CineHub!`,
      });
    } catch {
      Alert.alert('Ops!', 'Não foi possível compartilhar o filme.');
    }
  }

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 28 + insets.bottom }}>
        <ImageBackground source={filme.banner} style={styles.banner} resizeMode="cover" />
        <View style={styles.conteudo}>
          <Pressable style={styles.botaoVoltar} onPress={() => router.back()}>
            <Text style={styles.botaoTexto}>← Voltar</Text>
          </Pressable>
          <Text style={styles.titulo}>{filme.titulo}</Text>
          <Text style={styles.dados}>⭐ {filme.nota}  •  {filme.ano}  •  {filme.categoria}</Text>
          <View style={styles.controle}>
            <Text style={styles.textoControle}>Modo compacto</Text>
            <Switch value={modoCompacto} onValueChange={setModoCompacto} />
          </View>
          <Text style={styles.subtitulo}>Sinopse</Text>
          <Text style={[styles.sinopse, modoCompacto && styles.sinopseCompacta]}>{filme.sinopse}</Text>
          <Pressable style={[styles.acao, favorito && styles.favoritado]} onPress={() => alternarFavorito(filme.id)}>
            <Text style={styles.acaoTexto}>{favorito ? '❤️ Remover dos favoritos' : '♡ Adicionar à minha lista'}</Text>
          </Pressable>
          <Pressable style={styles.compartilhar} onPress={compartilharFilme}>
            <Text style={styles.acaoTexto}>Compartilhar filme ↗</Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#111111' },
  banner: { width: '100%', aspectRatio: 16 / 9, backgroundColor: '#1c1c1c' },
  conteudo: { padding: 20 },
  botaoVoltar: { alignSelf: 'flex-start', backgroundColor: '#252525', paddingVertical: 10, paddingHorizontal: 17, borderRadius: 10, marginBottom: 22 },
  botaoTexto: { color: '#ffffff', fontFamily: 'PoppinsSemiBold' },
  titulo: { color: '#ffffff', fontSize: 29, fontFamily: 'PoppinsBold', marginBottom: 10 },
  dados: { color: '#e6c477', fontSize: 15, fontFamily: 'PoppinsSemiBold', marginBottom: 24 },
  controle: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#222222', padding: 14, borderRadius: 10, marginBottom: 22 },
  textoControle: { color: '#ffffff', fontFamily: 'PoppinsSemiBold' },
  subtitulo: { color: '#ffffff', fontSize: 21, fontFamily: 'PoppinsBold', marginBottom: 9 },
  sinopse: { color: '#dddddd', fontSize: 15, lineHeight: 24, fontFamily: 'PoppinsRegular', marginBottom: 22 },
  sinopseCompacta: { fontSize: 13, lineHeight: 19, color: '#aaaaaa' },
  acao: { backgroundColor: '#e6c477', padding: 15, borderRadius: 11, alignItems: 'center', marginBottom: 12 },
  favoritado: { backgroundColor: '#a83c55' },
  compartilhar: { backgroundColor: '#303030', padding: 15, borderRadius: 11, alignItems: 'center' },
  acaoTexto: { color: '#ffffff', fontFamily: 'PoppinsBold', fontSize: 15 },
  botao: { padding: 16 },
});
