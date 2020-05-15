import { store } from '@risingstack/react-easy-state';

const state = store({
  filters: {
    isAllChecked: true,
    isFruitChecked: true,
    isVegetablesChecked: true,
    isCannedfoodChecked: true,
  },

  sortOrder: true, //true for ASC, false for DESC

  products: [
    { id: 1, name: 'Апельсины', price: 1000, amount: 30, category: 'fruit' },
    { id: 2, name: 'Бананы', price: 1000, amount: 40, category: 'fruit' },
    { id: 3, name: 'Помидоры', price: 2000, amount: 10, category: 'vegetable' },
    {
      id: 3,
      name: 'Картофель',
      price: 2000,
      amount: 15,
      category: 'vegetable',
    },
    { id: 3, name: 'Сайра', price: 3000, amount: 18, category: 'canned' },
    { id: 3, name: 'Сельдь', price: 2800, amount: 4, category: 'canned' },
  ],
});

export default state;
