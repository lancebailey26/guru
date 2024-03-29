const Category = require('./Category');
const Exercise = require('./Exercise'); 
const User = require('./User');
const Routine = require('./Routine');

Exercise.belongsTo(Category, {
    foreignKey: "category_id"
});

Category.hasMany(Exercise, {
    foreignKey: "category_id"
});

Routine.belongsTo(User, {
    foreignKey: "creator_id"
});



module.exports = { User, Exercise, Category, Routine };
