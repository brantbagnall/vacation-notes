module.exports= {
    authProfile: function (req, res) {
        if(req.user) {
            return res.status(200).send(req.user);
        } else {
            return res.status(401).send('You need to log in.');
        }
    },
    logOut: function (req, res) {
        req.logOut();
        res.redirect('/#/')
    },
    editProfile: function (req, res){
        if(req.user){
            return req.app.get('db').edit_user([req.body.id, req.body.userName]).then(()=> {
                console.log('test')
                res.status(200).send('Works!');
            });
        } else {
            return res.status(401).send('You need to log in.');
        }
    },
    postJournal: function (req, res) {
        if (req.user) {
            return req.app.get('db').post_journal([req.body.user_id, req.body.post_content, 0, req.body.post_activity, req.body.post_pal, req.body.post_env, req.body.post_time, req.body.post_website, req.body.post_lat, req.body.post_long, Date.now(), req.body.post_name]).then((id)=> {
                console.log(id[0].post_id);
                var red = '/#/journal/' + id[0].post_id;
                console.log(red);
                res.status(200).redirect(red);
            })
        } else {
            return res.status(401).send('You need to log in.');
        }
    }
}