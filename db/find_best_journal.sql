select * from posts
where users_id = $1
order by post_likes desc
limit 1;