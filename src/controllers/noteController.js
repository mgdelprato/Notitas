const path = require('path');
const db = require("../database/models");

let noteController = {
    create: (req, res) => {
        console.log(req.body.title);
        console.log(req.body.content);
        db.Nota.create({
            titulo: req.body.title,
            contenido: req.body.content
        } );

        res.redirect('/');
       
    },
    detail: (req, res)=>{
        db.Nota.findByPk(req.params.id)
            .then(function (nota) {
                res.render(path.join(__dirname, '../views/detail.ejs'), {nota:nota})
            })
    },
    update: (req, res) => {
        db.Nota.update({
            titulo: req.body.title,
            contenido: req.body.content
        },{
            where: {
                id: req.params.id
            }
        });

        res.redirect('/note/edit/'+ req.params.id)
    },
    delete: (req, res) =>{
        db.Nota.update({
            estado: 0

        },{
            where: {
                id: req.params.id
            }
        })
        res.redirect('/');
    }
    
}

module.exports = noteController;