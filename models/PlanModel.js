'use strict';

module.exports = function (sequelize, DataTypes) {
    var Plan = sequelize.define('Plan', {
        Sub_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }, //  Students primary key 
        Sub_name: { type: DataTypes.STRING, allowNull: false }, // academic name
        Level: { type: DataTypes.INTEGER },
        Hour: { type: DataTypes.INTEGER, allowNull: false }
    });
    Plan.associate = function (models) {
        models.Plan.hasMany(models.SubStu, {
            foreignKeyConstraint: true,
            foreignKey: 'Sub_id'
        });
        models.Plan.belongsTo(models.Plan, {
            foreignKeyConstraint: true,
            foreignKey: 'Pre_req_id',
            as: "Subject"
        });
        models.Plan.belongsTo(models.Department, {
            foreignKeyConstraint: true,
            foreignKey: 'Dep_id'
        });
    }
    return Plan;
}
