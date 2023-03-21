import { StyleSheet, FlatList } from 'react-native';

import ProductListItem from './ProductListItem';

export default function ProductList({ products }) {
  const renderItem = ({ item }) => <ProductListItem product={item} />;

  return (
    <FlatList
      data={products}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={styles.listContent}
      style={styles.list}
      showsVerticalScrollIndicator={false}
    />
  ); 
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
  listContent: {
    paddingHorizontal: 10,
    paddingTop: 30,
  },
});
  
/* 
FlatList é uma alternativa popular para FlashList. A principal vantagem da FlatList é que ela é mais flexível e personalizável. Você pode facilmente controlar o tamanho dos itens e a rolagem, e adicionar recursos como paginação e atualizações de itens. Além disso, a FlatList tem melhor suporte para interações do usuário, como gestos de arrastar e soltar.

Por outro lado, a FlashList é mais fácil de usar e é projetada para ter um melhor desempenho em grandes conjuntos de dados. Ela possui um recurso de estimativa de tamanho de item que permite um melhor gerenciamento de memória e torna a exibição de grandes conjuntos de dados mais rápida e eficiente. No entanto, ela pode ser menos personalizável do que a FlatList.

Em resumo, a escolha entre FlashList e FlatList dependerá das necessidades específicas do seu projeto. Se você precisa de alta performance para grandes conjuntos de dados, FlashList é uma ótima opção. Se você precisa de mais flexibilidade e controle, FlatList pode ser a melhor escolha.
*/
