select posts.*, users.user_name, users.profile_img
from posts 
join users on users.user_id = posts.users_id
where users_id = $1
order by post_likes desc
limit 1;