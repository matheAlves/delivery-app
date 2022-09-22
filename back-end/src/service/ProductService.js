const ServiceSQL = require('./ServiceSQL');

class ProductService extends ServiceSQL {
 constructor(model) {
  super(model)
 }
}

module.exports = ProductService;
