import state from './store';

export function getFilteredProducts() {
  let filteredProducts = [];
  if (state.filters.isAllChecked)
    return sortByAmount(state.sortOrder, state.products);

  if (state.filters.isFruitChecked) {
    state.products.map((product) => {
      if (product.category === 'fruit') filteredProducts.push(product);
    });
  }

  if (state.filters.isVegetablesChecked) {
    state.products.map((product) => {
      if (product.category === 'vegetable') filteredProducts.push(product);
    });
  }

  if (state.filters.isCannedfoodChecked) {
    state.products.map((product) => {
      if (product.category === 'canned') filteredProducts.push(product);
    });
  }

  return sortByAmount(state.sortOrder, filteredProducts);
}

function sortByAmount(order, list) {
  if (order) {
    list.sort(function (a, b) {
      return a.amount - b.amount;
    });
    return list;
  } else {
    list.sort(function (a, b) {
      return (a.amount - b.amount) * -1;
    });
    return list;
  }
}
