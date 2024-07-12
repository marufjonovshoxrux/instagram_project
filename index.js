import {
    storys
} from "./components/story.js"
import {
    reload
} from "./js/utils.js"
import {
    post
} from "./components/post.js"
import {
    users
} from "./components/users.js"

import {
    User_Img
} from "./components/User_Img.js"

import {
    albumss
} from "./components/Albums.js"
const story = document.querySelector('.story')
const posts = document.querySelector('.posts')
const nickname_no1 = document.querySelector('.nickname_no1')

fetch('https://jsonplaceholder.typicode.com/photos?_start=100&_limit=200')
    .then(res => res.json())
    .then(res => reload(res, story, storys))

fetch('https://jsonplaceholder.typicode.com/photos?_start=0&_limit=100')
    .then(res => res.json())
    .then(res => reload(res, posts, post))


fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(res => reload(res, nickname_no1, users))



const id = location.search.split('=').at(-1)
const Nickname_user_profile = document.querySelector('.Nickname_user_profile')
const Full_Name_user_profile = document.querySelector('.Full_Name_user_profile')

fetch('https://jsonplaceholder.typicode.com/users/' + id)
    .then(res => res.json())
    .then(user => {
        Nickname_user_profile.innerHTML = user.username
        Full_Name_user_profile.innerHTML = user.name
    })



const ul = document.querySelector('.albums')

fetch('https://jsonplaceholder.typicode.com/albums?userId=' + id)
    .then(res => res.json())
    .then(albums => reload(albums, ul, albumss))