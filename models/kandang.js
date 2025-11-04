module.exports = (sequelize, DataTypes) => {

  const Kandang = sequelize.define('Kandang', {

    id: {
      type: DataTypes.INTEGER,    
      primaryKey: true,           
      autoIncrement: true         
    },

    Nama_Hewan: {
      type: DataTypes.STRING,     
      allowNull: false            
    },

    Nama_Petugas: {
      type: DataTypes.STRING,
      allowNull: false
    },

    Usia_Hewan: {
      type: DataTypes.INTEGER, 
      autoIncrement: true         
    },

    Jenis_Hewan: {
      type: DataTypes.STRING,
      allowNull: false
    },

    Tahun_Lahir: {
      type: DataTypes.STRING,
      allowNull: false
    }

  }, {
   
    tableName: 'Kandang',         
    timestamps: false,          
    freezeTableName: true      
  });

  
  return Kandang;
};
