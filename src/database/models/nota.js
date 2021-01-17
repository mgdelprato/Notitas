module.exports = (sequelize, dataTypes)=>{

    
    let alias = "Nota";
    
    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        titulo:{
            type:dataTypes.STRING
        },
        contenido:{
            type:dataTypes.STRING
        },
        estado:{
            type:dataTypes.INTEGER
        }
    };
    
    let config = {
        tableName:"notas",
        timestamps:false,
        underscored:true
       
    };
    
    let Nota = sequelize.define(alias, cols, config);
    
    return Nota;
    
}