const cartsDiv = document.getElementById('carts');
//робимо запити
fetch('https://dummyjson.com/carts')
    .then(value => value.json())
    //виводимо carts
    .then(cartsObject => {
        const {carts}=cartsObject
        console.log(carts);
        //ітеруємо carts
        for (const cart of carts){
            //будуємо структуру
            const div = document.createElement('div');
            div.classList.add('cart-container');
            //створюємо х-ки для cart
            const  divInfo = document.createElement('div');
            divInfo.innerText= `
               "total":${cart.total},
               "discountedTotal":${cart.discountedTotal},
              "userId":${cart.userId},
               "totalProducts": ${cart. totalProducts},
               "totalQuantity": ${cart.totalQuantity},
               `
            //додаю products: ${cart.products}
            const ol = document.createElement('ol');
            for (const  product of cart.products){
                const li = document.createElement('li')
                li.innerText=`
                    "id":${product.id},
                    "title":${product.title},
                    "price":${product.price},
                    "quantity":${product.quantity},
                    "total":${product.total},
                     "discountPercentage":${product.discountPercentage},
                     "discountedTotal":${product.discountedTota},
                    `
                ol.appendChild(li);
                //додаю картинку
                const img = document.createElement('img');
                img.src = product.thumbnail;
                li.appendChild(img);
            };
            //додаємо в дів
            div.append(divInfo, ol);
            cartsDiv.appendChild(div);
        };
    });
