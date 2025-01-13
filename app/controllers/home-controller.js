const Joke = require('../db/models/joke');

class HomeController {
    async getJokes(req,res) {
        const { q } = req.query;
        const page = req.query.page || 1;
        const perPage = 10;
        
        const where = { $or: [{joke: {$regex: q || '', $options: 'i'}},{tags: {$regex: q || '', $options: 'i'}}] };
        let query = Joke.find(where);

        query = query.skip((page - 1) * perPage);
        query.limit(perPage);

        const jokes = await query.exec();
        const resultsCount = await Joke.find(where).count();
        const pagesCount = Math.ceil(resultsCount / perPage);
        
        res.render('pages/home', {
            title: 'Zwyrol.net - zwyrolski głos w twoim domu',
            description: 'Wulgarne, obraźliwe, obsceniczne, nieprzyzwoite, sprośne, bezkompromisowe, obleśne, niemoralne, nieetyczne, chamskie. Kawały, teksty, dowcipy, żarty, cytaty',
            jokes,
            page,
            pagesCount,
            resultsCount
        })
    }
    async getJoke(req, res) {
        const { name } = req.params;
        try {
            const joke = await Joke.findOne({id: parseInt(name)});
            res.render('pages/joke', {
                title: 'Zwyrol.net - zwyrolski głos w twoim domu',
                description: 'Wulgarne, obraźliwe, obsceniczne, nieprzyzwoite, sprośne, bezkompromisowe, obleśne, niemoralne, nieetyczne, chamskie. Kawały, teksty, dowcipy, żarty, cytaty',
                joke: joke
            });
        } catch (e) {
            res.render('pages/joke', {
                title: 'Zwyrol.net - zwyrolski głos w twoim domu',
                description: 'Wulgarne, obraźliwe, obsceniczne, nieprzyzwoite, sprośne, bezkompromisowe, obleśne, niemoralne, nieetyczne, chamskie. Kawały, teksty, dowcipy, żarty, cytaty',
                errors: e.errors
                
            });
        }
    }
    async getRandom(req, res) {
        const jokesAll = await Joke.find({});
        let randomId = jokesAll.length;
        let randomJoke = Math.floor(Math.random() * randomId);
        try {
            const joke = await Joke.findOne({id: parseInt(randomJoke)});
            res.render('pages/random', {
                title: 'Zwyrol.net - zwyrolski głos w twoim domu',
                description: 'Wulgarne, obraźliwe, obsceniczne, nieprzyzwoite, sprośne, bezkompromisowe, obleśne, niemoralne, nieetyczne, chamskie. Kawały, teksty, dowcipy, żarty, cytaty',
                joke: joke
            });
        } catch (e) {
            console.log('dupa');
            
        }
    }
}

module.exports = new HomeController();