const Category = require('./Category');
const Exercise = require('./Exercise'); 
const User = require('./User');
const Routine = require('./Routine');



Category.hasMany(Exercise, {
    foreignKey: "category_id"
});
Exercise.belongsTo(Category, {
    foreignKey: "category_id"
});
Routine.belongsTo(User, {
    foreignKey: "creator_id"
});



module.exports = { User, Exercise, Category, Routine };
