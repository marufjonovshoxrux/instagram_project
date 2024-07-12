export function users(item) {
    const nickname = document.createElement('nickname')
    const avater_nick = document.createElement('div')
    const nick2  = document.createElement('div')
    const big_nick2 = document.createElement('a')
    const small_nick2 = document.createElement('span')
    const btn_swich2 = document.createElement('div')
    const btn = document.createElement('button')

    avater_nick.classList.add('avater_nick')
    nick2.classList.add('nick2')
    big_nick2.classList.add('big_nick2')
    small_nick2.classList.add('small_nick2')
    btn_swich2.classList.add('btn_swich2')
    nickname.classList.add('nickname')

    big_nick2.innerHTML = item.username
    big_nick2.href = './pages/account.html?userId=' + item.id
    small_nick2.innerHTML = item.name

    btn.innerHTML = 'Follow'


    nickname.append(avater_nick,nick2,btn_swich2)
    nick2.append(big_nick2,small_nick2)
    btn_swich2.append(btn)

    return nickname


    


}