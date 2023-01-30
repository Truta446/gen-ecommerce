import { ProductModel } from "../models/product/product.model";
import { UserModel } from "../models/user/user.model";

export const PRODUCTS: Array<ProductModel> = [
  {
    id: '5923149c-ee79-45be-a0a4-353570493846',
    name: 'Tênis Nike Downshifter 12 Masculino - Preto+Grafite',
    description: 'Para garantir conforto e qualidade nas suas corridas diárias, aposte no Tênis Running Nike Downshifter 12! Indicado para quem está iniciando os treinos de running, caminhada e crossfit, o calçado desenvolvido em material leve e resistente, possui cabedal têxtil respirável, e bico mais fino, por isso compre um número acima do que costuma usar. O tênis Nike conta com faixa de ajuste no mediopé que, se usada em conjunto com sua amarração em cadarço, proporciona mais firmeza e suporte aos pés. Entressola em espuma macia e elevada, conferindo amortecimento e uma sensação suave em cada passada. Solado emborrachado para criar tração e dar aderência a calçadas, ruas e esteiras. O tênis masculino da Nike possui ainda logo Downshifter 12 na lingueta e o icônico Swoosh na lateral. Esse tênis de corrida dá continuidade à jornada da Nike pela sustentabilidade, em um design feito com pelo menos 20% de conteúdo reciclado por peso. Invista e torne seus treinos ainda melhores!',
    price: 12900,
    rating: 5,
    type: 'PANTS',
    images: [],
    colors: [],
    sizes: [],
    insertedAt: '2023-01-27T12:13:10',
    updatedAt: '2023-01-27T12:13:10',
  }
];

export const USER: UserModel = {
  id: '2e2d068c-b10e-43b7-b7b0-cce920c46abc',
  email: 'ivan.montoya@mailsac.com',
  name: 'Ivan Montoya',
  phoneNumber: '+5511993201437',
  cpf: '29864789058',
  insertedAt: '2023-01-27T12:13:10',
  updatedAt: '2023-01-27T12:13:10',
};
