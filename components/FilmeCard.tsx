import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

type FilmeCardProps = {
  titulo: string;
  nota: string;
  ano: string;
  categoria: string;
  imagem: any;
  onPress: () => void;
};

export function FilmeCard({ titulo, nota, ano, categoria, imagem, onPress }: FilmeCardProps) {
  return (
    <Pressable style={styles.card} onPress={onPress}>
      <Image source={imagem} style={styles.poster} resizeMode="cover" />
      <View style={styles.informacoes}>
        <Text style={styles.titulo}>{titulo}</Text>
        <Text style={styles.nota}>⭐ {nota}  •  {ano}</Text>
        <Text style={styles.categoria}>{categoria}</Text>
        <Text style={styles.detalhes}>Ver detalhes →</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#1c1c1c',
    borderRadius: 16,
    marginBottom: 14,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#292929',
  },
  poster: { width: 112, height: 158 },
  informacoes: { flex: 1, justifyContent: 'center', padding: 14 },
  titulo: { color: '#ffffff', fontSize: 18, fontFamily: 'PoppinsBold', marginBottom: 8 },
  nota: { color: '#e6c477', fontSize: 14, fontFamily: 'PoppinsSemiBold' },
  categoria: { color: '#aaaaaa', fontSize: 13, fontFamily: 'PoppinsRegular', marginTop: 8 },
  detalhes: { color: '#ffffff', fontSize: 14, fontFamily: 'PoppinsSemiBold', marginTop: 12 },
});
