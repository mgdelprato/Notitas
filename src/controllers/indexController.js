const path = require('path');
const db = require('../database/models');

let indexController = {
    
    index: (req, res) => {
        db.Nota.findAll()
        .then(function (notas) {
             res.render(path.join(__dirname, '../views/index.ejs'), {notas: notas})
        })    
    }
}

module.exports = indexController;