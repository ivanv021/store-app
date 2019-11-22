const customers = [
    {
      id: 1,
      fullName: "Mario Speedwagon",
      email: "example@example.com",
      products: []
    },
    {
      id: 2,
      fullName: "Petey Cruiser",
      email: "example@example.com",
      products: []
    },
    {
      id: 3,
      fullName: "Anna Sthesia",
      email: "example@example.com",
      products: []
    }
  ];
  
  let nextId = 4;
  
  export default class CustomerService {
    /**
     * Gets the list of customers
     *
     * @returns Array
     */
    list() {
      return customers;
    }
  
    /**
     * Finds a customer by id
     *
     * @param {Number} id
     *
     * @returns Object
     */
    find(id) {
      return customers.find(customer => customer.id === id);
    }
  
    /**
     * Adds a customer
     *
     * @param {Object} customer
     */
    add(customer) {
      customer.id = nextId;
      customers.push({ ...customer });
      nextId++;
    }
  
    /**
     * Removes a customer
     *
     * @param {Object} customer
     */
    remove(customer) {
      customers.splice(customers.indexOf(customer), 1);
    }
  
    /**
     * Adds product to the customer
     *
     * @param {Object} customer
     * @param {Object} product
     */
    addProductToCustomer(customer, product) {
      customer.products.push({ ...product });
    }
  }
  
  export const customerService = new CustomerService();
  