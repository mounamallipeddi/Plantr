
const {db} = require('./models');
const {Vegetable} = require('./models');
const {Plot} = require('./models');
const {Gardener} = require('./models');
db.sync()
.then(()=>{
    console.log('Database Synced!');
})
.catch(err =>{
    console.error(err);
})
.finally(()=>{
    db.close();
})
Vegetable.create({
    name: 'Spinach',
    color: 'Green',
    planted_on: new Date()
})
.then((Vegetable)=>{
    Plot.create({
        size: 200,
        shaded: true
    })
})
.then((Plot)=>{
    Gardener.create({
        name: 'Jesse',
        age: 35
    })
})
const PlotVegetable = db.model('vegetable_plot')
// elsewhere
return PlotVegetable.create({
  vegetableId: spinach.id,
  plotId: plot1.id
})