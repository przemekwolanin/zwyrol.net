const JokeAdding = require('../db/models/joke-adding');

class AddController {
    

    getAddForm(req, res) {
        res.render('pages/add', {
            title: 'Nakarm Zwyrola - Zwyrol.net',
        })
    }

    async getAddAction(req, res) {
        const addJoke = new JokeAdding({
            xywa: req.body.xywa,
            zwyrol: req.body.zwyrol
        });
        try {
            await addJoke.save();
            res.redirect('/');
        } catch(e) {
            console.log(e);
        }
    }
}

module.exports = new AddController();