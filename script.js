const products = [
    {
        id: 1,
        title: 'Чипсы lays сыр',
        price: 180 ,
        link: '#snacks-link',
        prod: '#snacks-product-1'
    },

    {
      id: 2,
      title: 'Гренки ржано-пшеничные Фишка чесночные',
      price: 64,
      link: '#snacks-link',
      prod: '#snacks-product-2',
  },
  {
    id: 3,
    title: 'Попкорн Holy Corn с морской солью',
    price: 95,
    link: '#snacks-link',
    prod: '#snacks-product-3',
},
{
  id: 4,
  title: 'Попкорн Holy Corn с морской солью',
  price: 77,
  link: '#snacks-link',
  prod: '#snacks-product-4',
},
{
  id: 5,
  title: 'Хлебцы пшеничные Wasa Sesame с кунжутом',
  price: 250,
  link: '#snacks-link',
  prod: '#snacks-product-5',
},
{
  id: 6,
  title: 'Чипсы Pringles сметана и лук',
  price: 300,
  link: '#snacks-link',
  prod: '#snacks-product-6',
},
{
  id: 7,
  title: 'Пицца trattoria пеперони',
  price: 301,
  link: '#freezing-link',
  prod: '#freezing-product-1',
},
{
  id: 8,
  title: 'Котлеты куриные Троекурово',
  price: 162,
  link: '#freezing-link',
  prod: '#freezing-product-2',
},
{
  id: 9,
  title: 'Пельмени Сибирская коллекция',
  price: 683,
  link: '#freezing-link',
  prod: '#freezing-product-3',
},
{
  id: 10,
  title: 'Креветки Polar ',
  price: 900,
  link: '#freezing-link',
  prod: '#freezing-product-4',
},
{
  id: 11,
  title: 'Овощи-гриль Мираторг ',
  price: 167,
  link: '#freezing-link',
  prod: '#freezing-product-5',
},
{
  id: 12,
  title: 'Тесто Хлебный Дом слоеное бездрожжевое',
  price: 218,
  link: '#freezing-link',
  prod: '#freezing-product-6',
},
{
  id: 13,
  title: 'Вафли Акульчев Венские с земляникой',
  price: 70,
  link: '#sweet-link',
  prod: '#sweet-product-1',
},
{
  id: 14,
  title: 'Драже M&Ms с арахисом',
  price: 174,
  link: '#sweet-link',
  prod: '#sweet-product-2',
},
{
  id: 15,
  title: 'Шоколадные конфеты Ferrero Rocher ',
  price: 700,
  link: '#sweet-link',
  prod: '#sweet-product-3',
},
{
  id: 16,
  title: 'Шоколад Россия - щедрая душа ',
  price: 60,
  link: '#sweet-link',
  prod: '#sweet-product-4',
},
{
  id: 17,
  title: 'Шоколадное яйцо Kinder Сюрприз ',
  price: 100,
  link: '#sweet-link',
  prod: '#sweet-product-5',
},
{
  id: 18,
  title: 'Kinder Chocolate молочный со злаками ',
  price: 54,
  link: '#sweet-link',
  prod: '#sweet-product-6',
},
{
  id: 19,
  title: 'Печенье Яшкино сдобное вишня ',
  price: 76,
  link: '#sweet-link',
  prod: '#sweet-product-7',
},
{
  id: 20,
  title: 'Печенье Milka с кусочками молочного шоколада ',
  price: 217,
  link: '#sweet-link',
  prod: '#sweet-product-8',
},
{
  id: 21,
  title: 'Торт Фили-Бейкер Панчо бисквитный ',
  price: 800,
  link: '#sweet-link',
  prod: '#sweet-product-9',
},

{
  id: 22,
  title: 'Напиток черноголовка без сахара кола ',
  price: 150,
  link: '#drink-link',
  prod: '#drink-product-1',
},
{
  id: 23,
  title: 'Напиток Добрый лимон-лайм ',
  price: 90,
  link: '#drink-link',
  prod: '#drink-product-2',
},
{
  id: 24,
  title: 'Газированный напиток Dr.Pepper ',
  price: 92,
  link: '#drink-link',
  prod: '#drink-product-3',
},

{
  id: 25,
  title: 'Йогурт Epica киви-фейхоа ',
  price: 57 ,
  link: '#milk-link',
  prod: '#milk-product-1',
},
];



    const snacksLink = document.querySelector("#snacks-link");
    const freezingLink = document.querySelector("#freezing-link");
    const sweetLink = document.querySelector("#sweet-link")
    const drinkLink = document.querySelector("#drink-link")
    const milkLink = document.querySelector("#milk-link")
    
    snacksLink.addEventListener("click", function() {
      hideAllProducts();
      showProducts("#snacks-link");
    });
    
    freezingLink.addEventListener("click", function() {
      hideAllProducts();
      showProducts("#freezing-link");
    });
    
    sweetLink.addEventListener("click", function() {
      hideAllProducts();
      showProducts("#sweet-link");
    });

    drinkLink.addEventListener("click", function() {
      hideAllProducts();
      showProducts("#drink-link");
    });
    
    milkLink.addEventListener("click", function() {
      hideAllProducts();
      showProducts("#milk-link");
    });


    function hideAllProducts() {
      products.forEach(product => {
        const productEl = document.querySelector(product.prod);
        productEl.classList.add("hidden");
      });
    }
    
    function showProducts(link) {
      products.forEach(product => {
        if (product.link === link) {
          const productEl = document.querySelector(product.prod);
          productEl.classList.remove("hidden");
        }
      });
    }

////////////////////////////////////////////////////////////


  let order = [];
  
  
  
  function addToBasket(productId) {
    let product;
    for (let i = 0; i < products.length; i++) {
      if (products[i].id === productId) {
        product = products[i];
        break;
      }
    }
    
    let found = false;
    for (let i = 0; i < order.length; i++) {
      if (order[i].id === productId) {
        order[i].quantity++;
        found = true;
        break;
      }
    }
    
    if (!found) {
      let newItem = Object.create(product);
      newItem.quantity = 1;
      order.push(newItem);
    }
    
    renderCart();
  }
  
  
  
  
  
  function renderCart() {
    const cart = document.getElementById('basket-items');
    cart.innerHTML = '';
    let totalPrice = 0;
    let orderDetails = '';
    
    for (let i = 0; i < order.length; i++) {
    const el = document.createElement('li');
    el.innerHTML = order[i].title + ' ' + ' ' + ' ' + order[i].quantity + ' ' + ' ' + 'шт';
    el.onclick = () => removeFromBasket(order[i].id);
    cart.appendChild(el);
    totalPrice += order[i].price * order[i].quantity;
    orderDetails += order[i].title + ' - ' + order[i].quantity + ' - ' + order[i].price + ' ₽\n';
    }
    document.getElementById('total').innerText = totalPrice + ' ' + '₽';
    document.getElementById('total-price').value = totalPrice;
    document.getElementById('order-details').value = orderDetails;
    }
  
    function removeFromBasket(productId) {
      for (let i = 0; i < order.length; i++) {
        if (order[i].id === productId) {
          if (order[i].quantity > 1) {
            order[i].quantity--;
          } else {
            order.splice(i, 1);
          }
          break;
        }
      }
      renderCart();
    }

////////////////////////////////////////////////////////////////////
