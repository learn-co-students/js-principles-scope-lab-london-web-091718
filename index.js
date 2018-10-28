// Write your solution in this file!
var customerName = "bob";
const leastFavoriteCustomer = 'wat';


function upperCaseCustomerName(){
  customerName = customerName.toUpperCase();
}

function setBestCustomer(){
  bestCustomer = "not " + customerName.toLowerCase();
}

function overwriteBestCustomer(text){
  bestCustomer = text;
}

function changeLeastFavoriteCustomer(){
  leastFavoriteCustomer = "wut";
}
