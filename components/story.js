export function storys(item) {
    const story_1 = document.createElement('div')
    const around_story = document.createElement('div')
    const img = document.createElement('img')
    const span = document.createElement('span')

    story_1.classList.add('story_1')
    around_story.classList.add('around_story')
    span.classList.add('nickname_story')

    img.src = item.url
    span.innerHTML = 'Nickname'

    story_1.append(around_story, span)
    around_story.append(img)


    return story_1

}