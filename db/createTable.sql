create table users (user_id serial primary key , first_name varchar(50), last_name varchar(50), age integer, auth0 text );

create table posts (post_id serial primary key , users_id int references users(user_id) , post_content varchar(500), post_likes int, post_activity varchar(20), post_time int, post_website varchar(100), post_lat float, post_long float );

create table imgs (img_id serial primary key, posts_id int references posts (post_id), img_url text);

create table 