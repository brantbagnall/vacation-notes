update users set user_name = $2, profile_img = $3
where user_id = $1;