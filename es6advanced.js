let Product = function(name, price) {
  this.name = name;
  this.price = price;
};
Product.prototype.nameAndPrice = function() {
  console.log(
    `The product's name is ${this.name} and the product's price is ${
      this.price
    }`
  );
};
let Electronic = function(name, price, brand) {
  Product.call(this, name, price);
  this.brand = brand;
};

Electronic.prototype = Object.create(Product.prototype);
Electronic.prototype.constructor = Electronic;

const newElectronicProduct = new Electronic('speaker', 100, 'Sony');
newElectronicProduct.nameAndPrice();
