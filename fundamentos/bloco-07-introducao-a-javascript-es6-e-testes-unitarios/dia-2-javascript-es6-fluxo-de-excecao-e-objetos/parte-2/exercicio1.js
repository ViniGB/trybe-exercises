// 1 - Complete a função customerInfo() para que seu retorno seja similar a "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".
// - Note que o parâmetro da função já está sendo passado na chamada da função.
// 2 - Complete a função orderModifier() para que seu retorno seja similar a "Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00."
// - Modifique o nome da pessoa compradora.
// - Modifique o valor total da compra para R$ 50,00.

const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};


const customerInfo = (order) => {
  let deliveryPerson = order.order.delivery['deliveryPerson'];
  let customer = order['name'];
  let phoneNumber = order['phoneNumber'];
  let street = order.address['street'];
  let number = order.address['number'];
  let apartment = order.address['apartment'];
  console.log(`Olá ${deliveryPerson}, entrega para: ${customer}, Telefone: ${phoneNumber}, R. ${street}, Nº: ${number}, AP: ${apartment}`);
  
}

customerInfo(order);

const orderModifier = (order) => {
  const newOrder = {
    name: 'Luiz Silva',
    payment: {
      total: 50,
    }
  }
  
  Object.assign(order, newOrder);
  let customer = order['name'];
  let total = order.payment['total'];

  console.log(`Olá ${customer}, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ ${total},00`);

}

orderModifier(order);