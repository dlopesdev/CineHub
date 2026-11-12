import { useMemo, useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import { useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FilmeCard } from '../../components/FilmeCard';
import { filmes } from '../../data/filmes';

export default function ExploreScreen() {
  const [busca, setBusca] = useState('');
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const resultados = useMemo(
    () => filmes.filter((filme) =>
      `${filme.titulo} ${filme.categoria}`.toLowerCase().includes(busca.toLowerCase())
    ),
    [busca]
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={resultados}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 24 + insets.bottom }}
        ListHeaderComponent={
          <View style={styles.header}>
            <Text style={styles.title}>Descobrir</Text>
            <Text style={styles.subtitle}>Encontre sua próxima história favorita.</Text>
            <TextInput
              value={busca}
              onChangeText={setBusca}
              placeholder="Buscar por filme ou gênero..."
              placeholderTextColor="#888888"
              style={styles.input}
              returnKeyType="search"
            />
            <Text style={styles.resultado}>{resultados.length} filme(s) encontrado(s)</Text>
          </View>
        }
        renderItem={({ item }) => (
          <View style={styles.item}>
            <FilmeCard
              titulo={item.titulo}
              nota={item.nota}
              ano={item.ano}
              categoria={item.categoria}
              imagem={item.banner}
              onPress={() => router.push(`/detalhes/${item.id}`)}
            />
          </View>
        )}
        ListEmptyComponent={<Text style={styles.empty}>Nenhum filme encontrado.</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#111111' },
  header: { paddingTop: 58, paddingHorizontal: 20, paddingBottom: 16 },
  title: { color: '#ffffff', fontSize: 28, fontFamily: 'PoppinsBold' },
  subtitle: { color: '#aaaaaa', marginTop: 4, fontFamily: 'PoppinsRegular' },
  input: { backgroundColor: '#202020', color: '#ffffff', borderRadius: 12, padding: 14, marginTop: 20, borderWidth: 1, borderColor: '#383838', fontFamily: 'PoppinsRegular' },
  resultado: { color: '#e6c477', fontFamily: 'PoppinsSemiBold', marginTop: 16 },
  item: { paddingHorizontal: 20 },
  empty: { color: '#aaaaaa', textAlign: 'center', marginTop: 35, fontFamily: 'PoppinsRegular' },
});
