import Eatery from '../../models/Restaurant'

import japanese from '../../assets/restaurant_japanese.png'
import italian from '../../assets/italian.png'
import RestaurantsList from '../../components/RestaurantsList'
import Hero from '../../components/Hero'

const restaurants: Eatery[] = [
  {
    image: japanese,
    category: 'Japanese',
    emphasis: 'Destaque da semana',
    title: 'Hioki Sushi',
    rate: '4.9',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!'
  },
  {
    image: italian,
    category: 'Italiana',
    title: 'La Dolce Vita Trattoria',
    rate: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  },
  {
    image: italian,
    category: 'Italiana',
    title: 'La Dolce Vita Trattoria',
    rate: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  },
  {
    image: italian,
    category: 'Italiana',
    title: 'La Dolce Vita Trattoria',
    rate: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  },
  {
    image: italian,
    category: 'Italiana',
    title: 'La Dolce Vita Trattoria',
    rate: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  },
  {
    image: italian,
    category: 'Italiana',
    title: 'La Dolce Vita Trattoria',
    rate: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  }
]

const Home = () => (
  <>
    <Hero />
    <RestaurantsList restaurants={restaurants} />
  </>
)

export default Home
