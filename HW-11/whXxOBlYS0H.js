//дозволяє додати парамитри
const  url = new URL('https://dummyjson.com/recipes');
url.searchParams.set('Limit', '2');
//відображаю де буде знаходитись
const target =document.getElementsByClassName('target')[0];
fetch(url)
    .then(res => res.json())
    .then(recipesObject => {
        const {recipes}= recipesObject
        //ітерація для рецептів
        for (const recipe of recipes){
            console.log(recipe);
            const recipeDiv = document.createElement('div');
            // ітер.recipeDiv тому що в ньому є об'єкт recipe
            for (const recipeKey in recipe){
                //перевірка
                if(Array.isArray(recipe[recipeKey])){
                    const arrayAndTitleDiv = document.createElement('div');
                    const h3 = document.createElement('h3');
                    h3.innerText = `${recipeKey}:`;
                    const ol = document.createElement('ol');
                    const array = recipe[recipeKey];
                    //ітеруємо кожний елемент
                    for (const item of array){
                        //робимо лі
                        const li = document.createElement('li');
                        li.innerText = item;
                        ol.appendChild(li)
                    }
                    arrayAndTitleDiv.appendChild(h3);
                    arrayAndTitleDiv.appendChild(ol);
                    recipeDiv.appendChild(arrayAndTitleDiv);
                }else {
                    if (recipeDiv!== 'image'){
                        // console.log(recipeKey ,recipe[recipeKey]);
                        //створюю елементи де зберігаються х-ки ключі
                        const  keyDiv = document.createElement('div');
                        keyDiv.innerText = `${recipeKey} : ${recipe[recipeKey]}`
                        recipeDiv.appendChild(keyDiv);
                    }
                }
            }
            const  img = document.createElement('img');
            img.src = recipe.image ;
            recipeDiv.appendChild(img);
            target.append(recipeDiv);
        }
    });
