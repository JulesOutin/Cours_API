const User = require('../models/user');
const ENV = require('./environment/environment');


exports.createUser = (req, res, next) => {
    const url = ENV.APP_URL;
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        creationDate: new Date(),
        modificationDate: new Date(),
        creationUser: req.body.name,
        modificationUser: req.body.name,
        active: true
    });
    user.save().then(createdUser => {
        res.status(201).json({
            message: 'User added successfully',
            user: {
                ...createdUser,
                id: createdUser._id
            }
        });
    }).catch(error => {
        res.status(500).json({
            message: 'Creating a user failed!'
        });
    });
}   