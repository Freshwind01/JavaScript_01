import createElement from '../../assets/lib/create-element.js';
import ProductCard from '../../6-module/2-task/index.js';

export default class ProductGrid {
  constructor(products) {
    this.products = products;
    this.filters = {};
    this.elem = document.createElement('div');
    this.elem.className = 'products-grid';
    this.elem.innerHTML = `
                           <div class="products-grid__inner">
                           <!--ВОТ ТУТ БУДУТ КАРТОЧКИ ТОВАРОВ-->
                           </div>`;
    this.containerProduct = this.elem.querySelector('.products-grid__inner');
    this.renderCards(this.products);

  }
  updateFilter(filters) {
    this.filters = { ...this.filters, ...filters };

    let filteredProducts = this.products.filter(product => {
      if (this.filters.noNuts && product.nuts) {
        return false;
      }

      if (this.filters.vegeterianOnly && !product.vegeterian) {
        return false;
      }

      if (this.filters.maxSpiciness !== undefined && product.spiciness > this.filters.maxSpiciness) {
        return false;
      }

      if (this.filters.category && product.category !== this.filters.category) {
        return false;
      }

      return true;
    });

    this.renderCards(filteredProducts);
  }

  renderCards(products) {
    this.containerProduct.innerHTML = '';
    products.forEach(product => {
      let card = new ProductCard(product);
      this.containerProduct.append(card.elem);
    });
  }

}


