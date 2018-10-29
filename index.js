// Write your solution in this file!
var customerName = `bob`;

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
  return customerName;
}

function setBestCustomer() {
  bestCustomer = `not bob`;
  return bestCustomer;
}

function overwriteBestCustomer() {
  bestCustomer = `maybe bob`;
  console.log(bestCustomer);
}

const leastFavoriteCustomer = `Rick`;

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = `Morty`;
  return leastFavoriteCustomer;
}
