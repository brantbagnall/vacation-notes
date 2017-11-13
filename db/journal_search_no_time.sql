select posts.*, users.user_name, users.profile_img
from posts 
join users on users.user_id = posts.users_id
where post_activity = $1
and post_env = $2
and post_pal = $3
and post_name ~* $4
order by post_unix_time desc
limit 5;