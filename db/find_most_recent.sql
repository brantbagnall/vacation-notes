select * from posts
where users_id = $1
order by post_unix_time desc
limit 5;