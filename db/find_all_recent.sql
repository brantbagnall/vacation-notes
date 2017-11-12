select posts.*, users.user_name, users.profile_img
from posts 
join users on users.user_id = posts.users_id
order by post_unix_time desc
limit 5;