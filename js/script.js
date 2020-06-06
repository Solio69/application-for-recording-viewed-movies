
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
    poster = document.querySelector('.promo__bg'), // Получаем блок с фоновым изображ. 
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

// Добавляем новый код
// Добавить нумерацию выведенных фильмов 
movieDB.movies.forEach( (film, i ) =>{
    movieList.innerHTML += `
        <li class="promo__interactive-item">${i + 1} ${film}
            <div class="delete"></div>
        </li>
    `;
});

// 1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
// новый фильм добавляется в список. Страница не должна перезагружаться.
// Новый фильм должен добавляться в movieDB.movies.
// Для получения доступа к значению input - обращаемся к нему как input.value;
// P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

const btn = document.querySelector('button'),
    inputIn = document.querySelector('.adding__input'),
    checkbox = document.getElementsByTagName("input")[2];
    
let newFilm; 
 

btn.addEventListener('click', () => {
    event.preventDefault();

    // 2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки
    newFilm = inputIn.value;
    if (newFilm.length > 20 ) {
        newFilm = newFilm.slice(0, 20) + "...";
    }
    
    movieDB.movies.push(newFilm);
    // 5) Фильмы должны быть отсортированы по алфавиту
    movieDB.movies.sort();

    // Удаляем то что есть в верстке
    movieList.innerHTML = '';

    // Добавляем новый код
    // Добавить нумерацию выведенных фильмов 
    movieDB.movies.forEach( (film, i ) =>{
        movieList.innerHTML += `
            <li class="promo__interactive-item">${i + 1} ${film}
                <div class="delete"></div>
            </li>
        `;
    });
    
    // 4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
    // "Добавляем любимый фильм"
    if (checkbox.checked == true) {
        console.log("Добавляем любимый фильм");
    }
    console.log(movieDB.movies);
});

// 3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)
// - не сделала 
