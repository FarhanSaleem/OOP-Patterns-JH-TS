export interface Order {
  customerId: number;
  orderId: number;
  products: Product[];
  orderTotal: number;
}

export interface Product {
  productId: number;
  productName: string;
  price: number;
}

class Customer {
  name: string;
  customerId: number;
  address: string;
  phoneNumber: string;
  email: string;
  orders: Order[];

  constructor(name: string) {
    this.name = name;
  }
}

export class CustomerBuilder {
  customer: Customer;

  constructor(name: string) {
    this.customer = new Customer(name);
    this.customer.customerId = Math.floor((Math.random() * 10000) + 1);
    return this;
  }

  setAddress(address: string) {
    this.customer.address = address;
    return this;
  }

  setPhoneNumber(phoneNumber: string) {
    this.customer.phoneNumber = phoneNumber;
    return this;
  }

  setEmail(email: string) {
    this.customer.email = email;
    return this;
  }

  setOrders(order: Order) {
    this.customer.orders.push(order);
    return this;
  }

  build() {
    return this.customer;
  }
}
