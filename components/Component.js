export function Comment(item) {
    const coments_p = document.createElement('p');
    const strong = document.createElement('strong');

    strong.innerHTML = `${item.email}: `;
    coments_p.append(strong); 

    coments_p.appendChild(document.createTextNode(` ${item.name}`)); 

    return coments_p;
}
