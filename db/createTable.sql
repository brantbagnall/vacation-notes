create table users (user_id serial primary key , first_name varchar(50), last_name varchar(50), user_name varchar(50), email text, profile_img text, auth_id text );

create table posts (post_id serial primary key , users_id int references users(user_id) , post_content varchar(2010), post_likes int, post_activity varchar(20), post_pal varchar(20), post_env varchar(20), post_time int, post_website varchar(100), post_lat float, post_long float, post_unix_time bigint, post_name varchar(50), editors_choice boolean );

create table imgs (img_id serial primary key, posts_id int references posts (post_id), img_url text);