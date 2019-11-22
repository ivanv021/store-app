const products = [
    {
      id: 1,
      name: "Apple Mac Book Pro",
      quantity: 3
    },
    {
      id: 2,
      name: "IQOS",
      quantity: 10
    },
    {
      id: 3,
      name: "Apple iPhone 6",
      quantity: 6
    }
  ];
  
  export default class ProductService {
    /**
     * Gets the list of products
     *
     * @returns Array
     */
    list() {
      return products;
    }
  
    /**
     * Finds a product by id
     *
     * @param {Number} id
     *
     * @returns Object
     */
    find(id) {
      return products.find(product => product.id === id);
    }
  
    /**
     * Icrement the quantity of a product
     *
     * @param {Object} product
     */
    increment(product) {
      product.quantity++;
    }
  
    /**
     * Decrement the quantity of a product if there are any products
     *
     * @param {Object} product
     */
    decrement(product) {
      product.quantity > 0 && product.quantity--;
    }
  }
  
  export const productService = new ProductService();
  