
// 5) Добавить нумерацию выведенных фильмов 

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const add = document.querySelectorAll('.promo__adv img'), // получаем псевдомасив с рекл. блоками
    poster = document.querySelector('.promo__bg'), // Получаем блик с фоновым изображ. 
    ganre = poster.querySelector('.promo__genre'), // Получаем блок с названием жанра
    movieList = document.querySelector('.promo__interactive-list');

// Удалить все рекламные блоки со страницы (правая часть сайта)
add.forEach( item => {
    item.remove();
});

// Изменить жанр фильма, поменять "комедия" на "драма"
ganre.textContent = 'драмма';

// Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
poster.style.backgroundImage = "url(img/bg.jpg)";

// Отсортировать их по алфавиту 
movieDB.movies.sort();

// Список фильмов на странице сформировать на основании данных из этого JS файла.

// Удаляем то что есть в верстке
movieList.innerHTML = '';
movieDB.movies.forEach( (film, i ) =>{
    movieList.innerHTML += `
        <li class="promo__interactive-item">${i + 1} ${film}
            <div class="delete"></div>
        </li>
    `;
});
