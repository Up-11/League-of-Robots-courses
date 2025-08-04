// ;<div class='attribute-div' title='attribute' data-size='small'></div>

// <div data-small></div>

//   <div data-long-size-atribute="small"></div>

//   [data-length] {}

// [data-age="46"] {}
// [data-id^="6"] {}

// [data-format*="string"] {}

// [data-size="medium" i] {}

// <div data-size="medium"></div>
// <div data-size="MEDIUM"></div>
// <div data-size="Medium"></div>

//   <div data-symbol="〷◠‿◠〷"></div>

// [data-symbol]::before {
//   content: attr(data-symbol)
// }

// let attrValue = element.getAttribute('data-episode')

// element.setAttribute('data-episode', '4')

// <div data="noDataAtribute"></div>

// <blockquote cite="А. С. Пушкин">
//   Октябрь уж наступил — уж роща отряхает<br>
//   Последние листы с нагих своих ветвей;
// </blockquote>

// blockquote[cite] {
//   background-color: #2E9AFF;
// }

// <button disabled>OK</button>

// [disabled] {
//   opacity: 0.5;
// }

// <a href="#">Пустая ссылка</a> <a href="#one">Эта ссылка не стилизуется</a>

// [href="#"] {
//   color: red;
// }

// <blockquote cite="Александр Сергеевич Пушкин">...</blockquote>
// <blockquote cite="Лев Николаевич Толстой ">...</blockquote>

// [cite~="Пушкин"] {
//   border: 1px solid green;
// }

// [lang|="en"] {
//   color: blue;
// }

// [lang|="zh"] {
//   color: red;
// }

// <a href="https://secure.com/">Ссылка по протоколу HTTPS</a>
// <a href="http://secure.com/">Ссылка по протоколу HTTP</a>

// [href^="https"]::after {
//   content: "🔐";
//   margin-left: 3px;
// }

// <a href="https://apple.com/">Apple US</a>
// <a href="https://apple.com/ru">Apple Russia</a>
// <a href="https://apple.com/it">Apple Italy</a>

// a::after {
//   content: "🇺🇸";
// }
// a[href$="/ru"]::after {
//   content: "🇷🇺";
// }
// a[href$="/it"]::after {
//   content: "🇮🇹";
// }

// img[src*="advert"] {
//   display: none;
// }

// <img src="/img/myadvertisingbanner.png">
// <img src="/img/other-advert-banner.png">
// <img src="/img/Advert-image.png"></img>

// img[src*="advert" i] {
//   display: none;
// }

window.localStorage.setItem('name', 'Ученик лиги роботов')

const name = window.localStorage.getItem('name')
console.log(name)
// 'Ученик лиги роботов'

window.localStorage.setItem('name', 'Ученик лиги роботов')

const name = window.localStorage.getItem('name')
console.log(name)
// 'Ученик лиги роботов'

window.localStorage.setItem('name', 'Ученик лиги роботов')

window.localStorage.getItem('name') // вернёт 'Ученик лиги роботов'
window.localStorage.getItem('user') // вернёт `null`
