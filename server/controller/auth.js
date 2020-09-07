
export default {
    // functions
    loginPage (req, res) {

        if(req.session.isLoggedIn) {
            res.redirect('/')
        } else {
            res.render('auth/login')
        }
    },

    login (req, res) {
        req.session.isLoggedIn = true
        res.redirect('/')
    },

    logout (req, res) {
        req.session.isLoggedIn = false
        res.redirect('/')
    },

    register (req, res) {
        res.render('auth/signup')
    }
}