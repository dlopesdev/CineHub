import { useFonts } from 'expo-font';
import { useRouter } from 'expo-router';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FilmeCard } from '../../components/FilmeCard';
import { filmes } from '../../data/filmes';

export default function HomeScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const [fontsLoaded] = useFonts({
    PoppinsRegular: require('../../assets/fonts/Poppins-Regular.ttf'),
    PoppinsSemiBold: require('../../assets/fonts/Poppins-SemiBold.ttf'),
    PoppinsBold: require('../../assets/fonts/Poppins-Bold.ttf'),
  });

  if (!fontsLoaded) return null;

  return (
    <View style={styles.container}>
      <FlatList
        data={filmes}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 24 + insets.bottom }}
        ListHeaderComponent={
          <View style={styles.header}>
            <Text style={styles.logo}>🎬 CineHub</Text>
            <Text style={styles.subtitle}>Histórias que merecem ser vistas.</Text>
            <Text style={styles.sectionTitle}>Filmes em destaque</Text>
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
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#111111' },
  header: { paddingTop: 58, paddingHorizontal: 20, paddingBottom: 16 },
  logo: { color: '#ffffff', fontSize: 30, fontFamily: 'PoppinsBold' },
  subtitle: { color: '#aaaaaa', fontSize: 14, fontFamily: 'PoppinsRegular', marginTop: 3 },
  sectionTitle: { color: '#ffffff', fontSize: 21, fontFamily: 'PoppinsBold', marginTop: 25 },
  item: { paddingHorizontal: 20 },
});
