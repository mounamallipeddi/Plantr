const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/plantr', {
  logging: false
});
const Gardener = db.define('gardener', {
    name : {
       type: Sequelize.STRING,
       allowNull: false
    },
    age : Sequelize.INTEGER
})
const Plot = db.define('plot',{
    size: Sequelize.INTEGER,
    shaded: Sequelize.BOOLEAN
})
const Vegetable = db.define('vegetable',{
    name: Sequelize.STRING,
    color: Sequelize.STRING,
    planted_on: Sequelize.DATE
})
Plot.belongsTo(Gardener);
Gardener.hasOne(Plot);
Plot.belongsToMany(Vegetable,{through: 'vegetable_plot'});
Vegetable.belongsToMany(Plot,{through: 'vegetable_plot'});
Gardener.belongsTo(Vegetable,{as: 'favorite_vegetable'});

module.exports = {db, Gardener, Plot, Vegetable};