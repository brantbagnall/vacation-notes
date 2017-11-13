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
                // console.log(id[0].post_id);
                res.status(200).send(`${id[0].post_id}`);
            })
        } else {
            return res.status(401).send('You need to log in.');
        }
    },
    find_recent: function(req, res){
        // console.log(req.user);
        if (req.user) {
            return req.app.get('db').find_most_recent([req.user.user_id]).then((posts)=>{
                res.status(200).send(posts);
            })
        } else {
            return res.status(401).send('You need to log in.');
        }
    },
    find_best: function(req, res){
        if(req.user) {
            return req.app.get('db').find_best_journal([req.user.user_id]).then((post)=>{
                res.status(200).send(post);
            })
        } else {
            return res.status(401).send('You need to log in.');
        }
    },
    findJournal: function(req,res){
        if(req.user) {
            return req.app.get('db').find_journal([req.params.id]).then((journal)=>{
                res.status(200).send(journal);
            })
        } else {
            return res.status(401).send('You need to log in.');
        }
    },
    allBest: function(req, res){
        return req.app.get('db').find_all_best().then((journals)=> {
            res.status(200).send(journals);
        })
    },
    getAllRecent: function(req, res){
        return req.app.get('db').find_all_recent().then((journals)=> {
            res.status(200).send(journals);
        })
    },
    getSearch: function(req, res){
        
    }
}