
export default {
    index (req, res) {
        res.render('error', {
            message: 'boom',
            error: {
                status: '404',
                stack: 'blah'
            }
        })
    }
}