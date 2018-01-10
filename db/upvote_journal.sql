update posts set post_likes = post_likes + 1, post_liked = $2
where post_id = $1;
select posts.*, users.user_name, users.profile_img
from posts
join users on users.user_id = posts.users_id
where posts.post_id = $1;