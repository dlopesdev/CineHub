export type Filme = {
  id: string;
  titulo: string;
  nota: string;
  ano: string;
  categoria: string;
  sinopse: string;
  banner: any;
};

export const filmes: Filme[] = [
  {
    id: '1', titulo: 'Interestelar', nota: '8.7', ano: '2014', categoria: 'Ficção científica',
    sinopse: 'Em um futuro próximo, a Terra enfrenta uma grave crise ambiental. Cooper, um ex-piloto, participa de uma missão espacial em busca de um planeta habitável para garantir a sobrevivência da humanidade.',
    banner: require('../assets/images/inter.jpg'),
  },
  {
    id: '2', titulo: 'Matrix', nota: '8.7', ano: '1999', categoria: 'Ficção científica',
    sinopse: 'Um programador descobre que a realidade em que vive é uma simulação criada por máquinas e se junta a um grupo de rebeldes para descobrir a verdade e lutar pela liberdade.',
    banner: require('../assets/images/matrix.jpg'),
  },
  {
    id: '3', titulo: 'O Senhor dos Anéis', nota: '8.8', ano: '2001', categoria: 'Fantasia',
    sinopse: 'Um jovem hobbit recebe a missão de destruir um poderoso anel antes que ele caia nas mãos de seu criador. Para isso, embarca em uma jornada perigosa acompanhado por seus amigos e aliados.',
    banner: require('../assets/images/senhor.jpg'),
  },
  {
    id: '4', titulo: 'Vingadores: Ultimato', nota: '8.4', ano: '2019', categoria: 'Ação',
    sinopse: 'Após um acontecimento devastador mudar o destino do universo, os Vingadores restantes precisam encontrar uma maneira de reverter as consequências e enfrentar novamente uma grande ameaça.',
    banner: require('../assets/images/ving.jpg'),
  },
  {
    id: '5', titulo: 'Toy Story', nota: '8.3', ano: '1995', categoria: 'Animação',
    sinopse: 'Woody é um brinquedo que sempre foi o favorito de seu dono. Quando um novo brinquedo chamado Buzz Lightyear chega, os dois precisam superar suas diferenças e aprender a trabalhar juntos.',
    banner: require('../assets/images/toy.jpg'),
  },
];
