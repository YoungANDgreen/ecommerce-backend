// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// defines relationships
Product.belongsTo(Category, {
  foreignKey: 'category_id'
})
// defines relationships
Category.hasMany(Product, {
  foreignKey: 'category_id'
})
// defines relationships
Product.belongsToMany(Tag, {
  through: ProductTag
})
// defines relationships
Tag.belongsToMany(Product, {
  through: ProductTag
})


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
