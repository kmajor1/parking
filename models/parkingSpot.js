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
    street_number: {
      type: DataTypes.INTEGER
    },
    street_name: {
      type: DataTypes.STRING
    },
    street_dir: {
      type: DataTypes.ENUM,
      values: ['N','E','S','W','NE','SE','SW','NW'],
      allowNull: true
    },
    city: {
      type: DataTypes.STRING
    },
    postal_code: {
      type: DataTypes.STRING,
      validate: {
        len: [6]
      }
    }
  })

  parkingSpot.associate = function (models) {
    parkingSpot.hasOne(models.address, {
      onDelete: 'cascade'
    })
    parkingSpot.hasOne(models.lease, {
      onDelete: 'cascade'
    })
  }

  return parkingSpot
}
