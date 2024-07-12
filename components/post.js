
import { openComments } from "../js/utils.js";

export function post(item) {
    const post_box = document.createElement('div');
    const post_head = document.createElement('div');
    const user_image = document.createElement('div');
    const user_others = document.createElement('div');
    const user_span = document.createElement('div');
    const comment = document.createElement('div');

    // post_head
    const user_ava = document.createElement('div');
    const user_nick15 = document.createElement('div');
    const ssilka = document.createElement('a');
    const user_nick = document.createElement('span');
    const user_City = document.createElement('span');
    const points = document.createElement('img');

    post_head.classList.add('post_head');
    user_ava.classList.add('user_ava');
    user_nick15.classList.add('user_nick15');
    user_nick.classList.add('user_nick');
    user_City.classList.add('user_City');
    ssilka.classList.add('ssilka');
    points.classList.add('points');

    user_nick.innerHTML = 'nickname';
    user_City.innerHTML = 'user_City';
    ssilka.href = '#';
    points.src = "./svg/points.svg";
    points.alt = 'points';

    // user_image
    const photo_user = document.createElement('img');

    user_image.classList.add('user_image');
    photo_user.src = item.url;
    photo_user.alt = 'Photo';

    // user_others
    const icons = document.createElement('div');
    const like_icon = document.createElement('img');
    const message_icon = document.createElement('img');
    const aitmessage_icon = document.createElement('img');
    const izbraniy_icon = document.createElement('img');

    user_others.classList.add('user_others');
    icons.classList.add('icons');

    like_icon.src = "./svg/like.svg";
    like_icon.alt = 'like';
    like_icon.id = 'like';

    message_icon.src = "./svg/message.svg";
    message_icon.alt = 'message';
    message_icon.id = 'message';

    aitmessage_icon.src = "./svg/aitmessage.svg";
    aitmessage_icon.alt = 'aitmessage';
    aitmessage_icon.id = 'aitmessage';

    izbraniy_icon.src = "./svg/izbraniy.svg";
    izbraniy_icon.alt = "izbraniy";
    izbraniy_icon.id = "izbraniy";

    // user_span
    const likes_user = document.createElement('span');
    const title = document.createElement('span');
    const comments = document.createElement('span');
    const user_nickname1 = document.createElement('span');
    const user_nickname = document.createElement('span');
    const time = document.createElement('span');

    likes_user.classList.add('likes_user');
    title.classList.add('title');
    comments.classList.add('comments');
    user_nickname1.classList.add('user_nickname1');
    user_nickname.classList.add('user_nickname1');
    time.classList.add('time');

    likes_user.innerHTML = '8,888 likes';
    title.innerHTML = item.title;
    comments.innerHTML = 'View all 33 comments';
    user_nickname1.innerHTML = 'nickname Lorem ipsum dolor sit amet';
    user_nickname.innerHTML = 'nickname Lorem ipsum dolor sit amet';
    time.innerHTML = '1 hour ago';

    user_span.classList.add('user_span');

    const hr = document.createElement('hr');
    const hr2 = document.createElement('hr');

    // comment
    const form = document.createElement('form');
    const img_emoji = document.createElement('img');
    const input = document.createElement('input');
    const post_btn = document.createElement('button');

    comment.classList.add('comment');

    img_emoji.src = "./svg/emoji.svg";
    img_emoji.alt = 'emoji';
    img_emoji.classList.add('emoji');

    input.type = 'text';
    input.placeholder = 'Add a comment...';

    post_btn.classList.add('post_btn');
    post_btn.innerHTML = 'Post';

   
    post_box.append(post_head, user_image, user_others, hr, comment, hr2);
    user_others.append(icons, user_span);
    post_head.append(user_ava, user_nick15, ssilka);
    user_nick15.append(user_nick, user_City);
    ssilka.append(points);
    user_image.append(photo_user);
    icons.append(like_icon, message_icon, aitmessage_icon, izbraniy_icon);
    user_span.append(likes_user, title, comments, user_nickname1, user_nickname, time);
    comment.append(form);
    form.append(img_emoji, input, post_btn);

   
    message_icon.onclick = () => {
        openComments(item)
    };

    return post_box;
}

