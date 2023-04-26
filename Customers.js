let customers = [];

function createCustomers(customer) {
  customers = [...customers, customer];
}

function readCustomers() {
  return customers;
}

function upDataCustomers(id, newCustomers) {
  customers = customers.map((customer) => {
    if (customer.id === id) {
      return {
        ...customer,
        ...newCustomers,
      };
    } else {
      return customer;
    }
  });
}

function deleteCustomers(id) {
  customers = customers.filter((customer) => customer.id !== id);
}

createCustomers({
  id: 1,
  name: "Enmanuel",
  Apellido: "Taveras",
  Dirrecion: "La vega",
  phone: 8295168214,
  email: "Gmail",
});

createCustomers({
  id: 2,
  name: "Jose",
  Apellido: "Perez",
  Dirrecion: "Santiago",
  phone: 8093537245,
  email: "hotmail",
});
upDataCustomers(2, {
  id: 3,
  name: "Luis",
  Apellido: "Alcantara",
  Dirrecion: "Moca",
  phone: 8295688735,
  email: "Gmail",
});

deleteCustomers(3);
readCustomers();
