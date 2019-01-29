module.exports = function(sequelize, DataTypes) {
  var lease = sequelize.define("lease", {
    firstNameLeasor: DataTypes.STRING,
    lastNameLeasor: DataTypes.STRING, 
    dobLeasor: DataTypes.DATEONLY,
    firstNameLeasee: DataTypes.STRING,
    lastNameLeasee: DataTypes.STRING,
    dobLeasee: DataTypes.DATEONLY, 
    leaseStart: DataTypes.DATEONLY, 
    leaseEnd: DataTypes.DATEONLY,
    pmtFrq: {
      type: DataTypes.ENUM,
      values: ['12','52']
    },
    price: {
      type: DataTypes.DECIMAL(6,2),
      allowNull: false
      }
    
    })
  

  lease.associate = function(models) {
    lease.belongsTo(models.parkingSpot)
    
  }
  return lease;
};
