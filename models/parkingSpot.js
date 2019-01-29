module.exports = function (sequelize, DataTypes) {
  var parkingSpot = sequelize.define('parkingSpot', {
    image_url: DataTypes.STRING,
    isAvailable: DataTypes.BOOLEAN,
    spot_description: DataTypes.STRING,
    lng: DataTypes.FLOAT,
    lat: DataTypes.FLOAT,
    unit: {
      type: DataTypes.STRING
    },
    streetNumber: {
      type: DataTypes.INTEGER
    },
    streetName: {
      type: DataTypes.STRING
    },
    streetType: {
      type: DataTypes.STRING
    },
    streetDir: {
      type: DataTypes.ENUM,
      values: ['N','E','S','W','NE','SE','SW','NW'],
      allowNull: true
    },
    city: {
      type: DataTypes.STRING
    },
    province: {
      type: DataTypes.ENUM,
      values: ['ON']
    },
    postalCode: {
      type: DataTypes.STRING,
      validate: {
        len: [6]
      }
    }
  })

  parkingSpot.associate = function (models) {
    
    parkingSpot.hasMany(models.lease)
  }

  return parkingSpot
}
