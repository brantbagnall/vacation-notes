module.exports= {
    authProfile: function (req, res) {
        if(req.user) {
            return res.status(200).send(req.user);
        } else {
            return res.status(401).send('Need to log in.');
        }
    },
    logOut: function (req, res) {
        req.logOut();
        res.redirect('/#/')
    },
    editProfile: function (req, res){
        req.app.get('db').edit_user([req.body.id, req.body.userName]);
    }
}