insert into users (first_name, last_name, email, profile_img, auth_id)
values ($1, $2, $3, $4, $5)
returning *;