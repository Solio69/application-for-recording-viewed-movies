
'use strict';

document.addEventListener ("DOMContentLoaded", () => {

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
        movieList = document.querySelector('.promo__interactive-list'), //получаем список фильмов со страницы
        addForm = document.querySelector('form.add'), // получаем форму
        addInput = addForm.querySelector('.adding__input'), // из формы получаем инпут
        checkbox = addForm.querySelector('[type = "checkbox"]'); // из формы получаем чекбокс
    



    // Функция удаления элементов из массива
    const deliteAdv = (arr) => {
        arr.forEach( item => {
            item.remove();
        });
    };
    

    //Функция (доп.) изменения на странице 
    const makeChanges = () => {
        // Изменить жанр фильма, поменять "комедия" на "драма"
        ganre.textContent = 'драмма';
            
        // Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
        poster.style.backgroundImage = "url(img/bg.jpg)";
    };
    
    
    //Функция сортировки массива по алфавиту 
    const sortArr = (arr) => {
        arr.sort();
    };
    
    
    // Функция обновления списка фильмов 
    function createMovieList (films, parent) {
        // Удаляем то что есть в верстке
        parent.innerHTML = '';

        // Отсортировать фильмы в списке по алфавиту 
        sortArr(films);

        // Добавляем новый код
        // Добавить нумерацию выведенных фильмов
        films.forEach( (film, i ) =>{
            parent.innerHTML += `
                <li class="promo__interactive-item">${i + 1} ${film}
                    <div class="delete"></div>
                </li>
            `;
        });

        // Удаляем элемент при клиеке на корзину
       // Получаем все элементы со старницы с классом "delete" и перебираем их 
        document.querySelectorAll('.delete').forEach ((btn, i) => {
            // Из перебираемых элементов удаляем тот на котором произошло событие click
            btn.addEventListener('click', () => {
                // Удаляем со страницы родителя btn
                btn.parentElement.remove();
                //Удаляем из масива
                movieDB.movies.splice(i, 1);
                //Перестраиваем список элементов и обновляем номерацию 
                createMovieList (films, parent);
            });
        });
    }
    

    //Функция добавления нового элемета в массив при отправке данных через форму 
    addForm.addEventListener ('submit', (event) => {
        //Отменяем обновление страницы по умолчанию
        event.preventDefault();

        let newFilm = addInput.value; // Получаем значение из инпута (что ввел пользователь)
        const favorit = checkbox.checked; //Получаем значение из чекбокса (стоит ли галка)

        //Если newFilm == true то производим добавление и сортировку
        if (newFilm) {

            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}...`;
            }

            if (favorit) {
                console.log("Добавляем любимый фильм");
            }
            //добавляем новый элемент в массив с фильмами
            movieDB.movies.push(newFilm);

            //сортируем по алфавиту 
            sortArr(movieDB.movies);

            // Обновляем списко фильмов 
            createMovieList (movieDB.movies, movieList);

        }
        
        //Очищаем форму
        event.target.reset();
    });



    // Удалить все рекламные блоки со страницы (правая часть сайта)
    deliteAdv (add); 

    // Применяем изменения на странице 
    makeChanges();

    

    // Обновляем списко фильмов 
    createMovieList (movieDB.movies, movieList);
    
});