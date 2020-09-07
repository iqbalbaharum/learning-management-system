
export default {
    index (req, res) {
        res.render('journal/index', {
            session: req.session
        })
    }
}