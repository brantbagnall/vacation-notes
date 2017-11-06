module.exports= {
    authProfile: function (req, res) {
        if(req.user) {
            return res.status(200).send(req.user);
        } else {
            return res.status(401).send('Need to log in.');
        }
    }
}