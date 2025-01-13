class PagesController {
    getAbout(req, res) {
        res.render('pages/about', {
            title: 'Czym jest zwyrtol'
        })
    }
}

module.exports = new PagesController();