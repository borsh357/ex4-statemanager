import state from './store';

export function getFilteredProducts() {
  if (state.filters.isAllChecked)
    return sortByAmount(state.sortOrder, state.products);

  const filteredProducts = state.products.filter((product) => {
    return (
      (state.filters.isFruitChecked && product.category === 'fruit') ||
      (state.filters.isVegetablesChecked && product.category === 'vegetable') ||
      (state.filters.isCannedfoodChecked && product.category === 'canned')
    );
  });

  return sortByAmount(state.sortOrder, filteredProducts);
}

function sortByAmount(order, list) {
  list.sort(function (a, b) {
    if (order) {
      return a.amount - b.amount;
    } else {
      return (a.amount - b.amount) * -1;
    }
  });
  return list;
}
