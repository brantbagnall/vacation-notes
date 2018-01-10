require('dotenv').config();
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
        res.redirect(process.env.AUTH_LOGOUT)
    },
    editProfile: function (req, res){
        if(req.user){
            return req.app.get('db').edit_user([req.body.id, req.body.userName, req.body.imgURL]).then(()=> {
                // console.log(req.user)
                res.status(200).send('Works!');
            });
        } else {
            return res.status(401).send('You need to log in.');
        }
    },
    postJournal: function (req, res) {
        console.log(req.body)
        if (req.user) {
            // console.log('hey')
            return req.app.get('db').post_journal([req.body.user_id, req.body.post_content, 0, req.body.post_activity, req.body.post_pal, req.body.post_env, req.body.post_time, req.body.post_website, req.body.post_lat, req.body.post_long, Date.now(), req.body.post_name, req.body.imgs]).then((id)=> {
                res.status(200).send(`${id[0].post_id}`);
            })
        } else {
            // console.log(req.user)
            return res.status(401).send('You need to log in.');
        }
    },
    find_recent: function(req, res){
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
            return req.app.get('db').find_journal([req.params.id]).then((journal)=>{
                res.status(200).send(journal);
            })
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

        if(req.body.time === '%'){
            return req.app.get('db').journal_search_no_time([req.body.act, req.body.env, req.body.actLev, req.body.keyword]).then((response)=> {
                res.status(200).send(response)
            })
        } else if(req.body.time !== '13 or more' && req.body.time !== '%'){
            var time1 = req.body.time[0];
            var time2 = req.body.time[1];
            return req.app.get('db').journal_search([req.body.act, req.body.env, req.body.actLev, time1, time2, req.body.keyword]).then((response)=> {
                // console.log(response);
                res.status(200).send(response);
            })
        } else {
            return req.app.get('db').journal_search_more_time([req.body.act, req.body.env, req.body.actLev, req.body.keyword]).then((response)=> {
                res.status(200).send(response)
            })
        }
    },
    upvote: function(req, res){
        if(req.user){
            return req.app.get('db').upvote_journal([req.body.postId, req.body.user_id]).then((response)=>{
                res.status(200).send(response);
            })
        }else {
            return res.status(401).send('You need to log in.');
        }
    },
    downvote: function(req, res){
        if(req.user){
            return req.app.get('db').downvote_journal([req.body.postId, req.body.user_id]).then((response)=>{
                res.status(200).send(response);
            })
        }else {
            return res.status(401).send('You need to log in.');
        }
    },
    editorget: function (req, res){
        return req.app.get('db').get_editor().then((response)=> {
            res.status(200).send(response);
        })
    }
}