
export function albumss(item) {
    const li = document.createElement('li')
    const link = document.createElement('a')

    li.innerHTML = item.title

    li.append(link)

    li.onclick = () => {
        fetch('https://jsonplaceholder.typicode.com/photos?albumId=' + item.id)
            .then(res => res.json())
            .then(photos => reloadGalary(photos, container_img, User_Img))
    };
    
    return li
}