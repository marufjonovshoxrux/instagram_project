import { Comment } from "../components/Component.js";

export function reload(array, place, component) {

    for (let item of array) {
        const product = component(item, array)
        place.append(product)
    }
}

export function openComments(item) {
    const modal = document.querySelector('#modal');
    const modal_comments = document.querySelector('.comments_1');
    modal.classList.add('show');
    const post_img = modal.querySelector('.post-image')
    const modal_logo = modal.querySelector('.modal-logo')
    post_img.src = item.url
    modal_logo.src = item.url
    const modalusername = modal.querySelector('.modal-username')
    modalusername.innerHTML = item.title


    fetch('https://jsonplaceholder.typicode.com/comments?postId=' + item.id)
        .then(res => res.json())
        .then(res => reload(res, modal_comments, Comment));


    const close_btn = document.querySelector('.close-btn')
    close_btn.onclick = () => {
        modal.classList.remove('show')

    }
}



