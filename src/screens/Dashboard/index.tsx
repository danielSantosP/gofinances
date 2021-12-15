import React from 'react';
import { 
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  Icon,
  HighlightCards,
  Transactions,
  TransactionList,
  Title,
} from './styles'
import { HighlightCard } from '../../components/HighlightCard';
import { TransactionCard, TransactionCardProps } from '../../components/TransactionCard';

export interface DataListProps extends TransactionCardProps {
  id: string;
}

export function Dashboard(){
  const data: DataListProps[] = [
    {
      id: '1',
      type: 'positive',
      title:"Desenvolvimento de sites",
      amount:"R$ 12.000,00",
      category:{icon: 'dollar-sign', name: 'Vendas'},
      date:"13/04/2020",
    },
    {
      id: '2',
      type: 'negative',
      title:"Hamburgueria Pizzi",
      amount:"R$ 59,00",
      category:{icon: 'coffee', name: 'Alimentação'},
      date:"10/04/2020",
    },
    {
      id: '3',
      type: 'negative',
      title:"Aluguel do apartamento",
      amount:"R$ 1200,00",
      category:{icon: 'shopping-bag', name: 'Casa'},
      date:"27/03/2020",
    }
]
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo 
              source={{uri: 'https://avatars.githubusercontent.com/u/39721000?v=4'}}
            />
            <User>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>Daniel</UserName>
            </User>
          </UserInfo>
          <Icon name="power" />
        </UserWrapper>
      </Header>
      <HighlightCards>
        <HighlightCard 
          title="Entradas"
          amount="R$17.400,00"
          lastTransaction="Última entrada dia 13 de abril"
          type="up"
        />
        <HighlightCard 
          title="Saídas"
          amount="R$1.259,00"
          lastTransaction="Última saída dia 13 de abril"
          type="down"
        />
        <HighlightCard 
          title="Total"
          amount="R$16.141,00"
          lastTransaction="01 à 16 de abril"
          type="total"
        />
      </HighlightCards>
      <Transactions>
        <Title>Listagem</Title>
        <TransactionList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({item}) => <TransactionCard data={item} />}
        />
      </Transactions>
    </Container>
  );
}