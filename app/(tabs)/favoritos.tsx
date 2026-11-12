import { useRouter } from 'expo-router';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FilmeCard } from '../../components/FilmeCard';
import { filmes } from '../../data/filmes';
import { useFavoritos } from '../../contexts/FavoritosContext';

export default function FavoritosScreen() {
  const { favoritos } = useFavoritos();
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const lista = filmes.filter((filme) => favoritos.includes(filme.id));

  return (
    <View style={styles.container}>
      <FlatList
        data={lista}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 24 + insets.bottom, flexGrow: 1 }}
        ListHeaderComponent={
          <View style={styles.header}>
            <Text style={styles.title}>Minha lista</Text>
            <Text style={styles.subtitle}>Seus filmes guardados para assistir.</Text>
          </View>
        }
        renderItem={({ item }) => (
          <View style={styles.item}>
            <FilmeCard titulo={item.titulo} nota={item.nota} ano={item.ano} categoria={item.categoria} imagem={item.banner} onPress={() => router.push(`/detalhes/${item.id}`)} />
          </View>
        )}
        ListEmptyComponent={
          <View style={styles.empty}>
            <Text style={styles.heart}>♡</Text>
            <Text style={styles.emptyTitle}>Sua lista está vazia</Text>
            <Text style={styles.subtitle}>Abra os detalhes de um filme e toque em “Favoritar filme”.</Text>
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#111111' },
  header: { paddingTop: 58, paddingHorizontal: 20, paddingBottom: 16 },
  title: { color: '#ffffff', fontSize: 28, fontFamily: 'PoppinsBold' },
  subtitle: { color: '#aaaaaa', marginTop: 4, fontFamily: 'PoppinsRegular' },
  item: { paddingHorizontal: 20 },
  empty: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 30 },
  heart: { color: '#e6c477', fontSize: 54 },
  emptyTitle: { color: '#ffffff', fontSize: 19, fontFamily: 'PoppinsBold', marginBottom: 8 },
});
