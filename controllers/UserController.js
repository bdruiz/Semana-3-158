const db = require('../models');
const bcrypt = require('bcryptjs');



exports.list = async (req, res, next) => {
    const usersList = await db.user.findAll();
    res.status(200).json(usersList);
    //console.log(req.body);
};

exports.create = async (req, res, next) => {
    req.body.password = bcrypt.hashSync(req.body.password, 10);
    const newUser = await db.user.create(req.body);
    res.status(200).json(newUser);
    console.log(req.body);
};

exports.update = async (req, res, next) => {
    await db.user.update({
        name: req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10)
    },
        {
            where: { id: req.params.userId }
        }).then((result) => {
            if (result == 1) {
                res.status(200).json(req.body);
            }
            else {
                res.status(404).send("User Not Found");
            }
        }).catch(err => {
            res.status(500).send('Error -> ' + err);
        })
};

exports.delete = async (req, res, next) => {
    await db.user.destroy({

        where: { id: req.params.userId }
    }).then((result) => {
        if (result == 1) {
            res.status(200).json(`User # ${req.params.userId} deleted successfully!`);
        }
        else {
            res.status(404).send("User Not Found");
        }
    }).catch(err => {
        res.status(500).send('Error -> ' + err);
    })
};


exports.deleteAll = async (req, res, next) => {
    await db.user.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.json({ message: `${nums} Users were deleted successfully!` });
        }).catch(err => {
            res.status(500).send('Error -> ' + err);
        })
};


exports.find = async (req, res, next) => {
    const user = await db.user.findOne({
        where: { id: req.params.userId }
    });
    if (user) {
        res.status(200).json(user);
    }
    else {
        res.status(404).send("User Not Found");
    }
};
