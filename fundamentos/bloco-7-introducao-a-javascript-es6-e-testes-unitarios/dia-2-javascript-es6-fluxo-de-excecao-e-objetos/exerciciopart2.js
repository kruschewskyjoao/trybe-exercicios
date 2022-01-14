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
  // Adicione abaixo as informações necessárias.
  const pedido = Object.entries(order)
  const teste = Object.values(order)
  const ender = Object.values(order.address)
  const devliveryPErson = pedido[3][1].delivery[['deliveryPerson']]
  const name = teste[0]
  const tel = teste[1]
  const endereco = ender[0]
  const numero = ender[1]
  const apartamento = ender[2]
  console.log(`Olá ${devliveryPErson}, entrega para: ${name}, telefone: ${name}, R. ${endereco}, Nº: ${ender[1]}, AP: ${apartamento}`)
/* 
  const deliveryPerson = order.order.delivery.deliveryPerson;
  const customerName = order['name'];
  const customerPhone = order['phoneNumber'];
  const address = 'address';
  const street = order[address].street;
  const number = order[address].number;
  const apartment = order[address].apartment;

  console.log(`Olá ${deliveryPerson}, entrega para: ${customerName}, Telefone: ${customerPhone}, R. ${street}, Nº: ${number}, AP: ${apartment}`); */
}



customerInfo(order);

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  const customerName2 = order.name = 'Luiz Silva'
  const saborFinal = Object.keys(order.order.pizza)
  const valorFinal = order.payment.total = 50
  const pickCola = order['order'].drinks.coke.type

  console.log(`Olá ${customerName2}, o total do seu pedido de ${saborFinal[0]}, ${saborFinal[1]} e ${pickCola} é R$ ${valorFinal},00`)
}

orderModifier(order);