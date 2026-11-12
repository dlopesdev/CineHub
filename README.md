# CineHub — Documentação do Projeto

## 1. Identificação do aplicativo

**Nome:** CineHub — Histórias que merecem ser vistas.

**Descrição do problema/necessidade:** O CineHub é um aplicativo mobile para pessoas que gostam de cinema e desejam descobrir e organizar filmes. Ele reúne um catálogo de títulos, permite pesquisar por nome ou categoria, consultar sinopses e montar uma lista de favoritos.

## 2. Principais funcionalidades

- **Início:** catálogo de filmes com cartazes, títulos, notas, ano e categoria.
- **Descobrir:** pesquisa de filmes por título ou gênero.
- **Detalhes:** visualização da sinopse e informações do filme.
- **Minha lista:** inclusão e remoção de favoritos, compartilhados entre as telas durante a execução do aplicativo.
- **Perfil:** seleção de uma foto da galeria do dispositivo.
- **Compartilhamento:** envio de informações do filme pelo menu nativo do sistema.
- **Cadastro:** formulário que demonstra campos controlados, Props, estados e eventos de interação.

## 3. Recursos tecnológicos utilizados

- **React Native:** construção da interface mobile.
- **TypeScript:** tipagem de dados e propriedades.
- **Expo:** ambiente de desenvolvimento e compilação.
- **Expo Router:** navegação baseada em arquivos.
- **FlatList:** renderização do catálogo e das listas.
- **useState:** controle de estados de tela, busca, favoritos e foto selecionada.
- **useMemo:** otimização da filtragem dos resultados da busca.
- **Context API:** compartilhamento do estado de favoritos entre telas.
- **Props e componentes reutilizáveis:** comunicação e organização da interface.
- **StyleSheet:** estilização dos componentes.
- **react-native-safe-area-context:** adaptação da navegação às áreas seguras do dispositivo.

## 4. Recursos nativos implementados

1. **Expo Image Picker:** solicita permissão e permite selecionar uma imagem da galeria para o perfil.
2. **Share (React Native):** abre o menu nativo do Android/iOS para compartilhar informações e recomendações de filmes.

## 5. Materiais de entrega

- APK Android gerado pelo EAS Build a partir da versão final.
- Link do repositório Git com o código-fonte.
- Esta documentação do projeto.

## 6. Observações sobre a versão

Nesta versão, a lista de favoritos e a foto escolhida são mantidas em memória enquanto o aplicativo está em execução; ainda não há persistência desses dados após o encerramento. O formulário de cadastro é demonstrativo e não cria uma conta em servidor.

## 7. Considerações finais

O desenvolvimento do CineHub permitiu aplicar os conteúdos da disciplina na construção de uma aplicação mobile, incluindo componentes reutilizáveis, Props, estados, navegação, listas, pesquisa e integração com recursos nativos do dispositivo.
