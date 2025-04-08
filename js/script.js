const arrayOfHealthTips = [
    "Включайте більше фруктів та овочів у свій раціон!",
    "Регулярні фізичні навантаження допоможуть покращити ваше самопочуття.",
    "Не забувайте про важливість сну: 7-8 годин на добу - оптимальний режим для організму.",
    "Пийте більше води! Вода важлива для збереження енергії та хорошого настрою.",
    "Займайтесь йогой або медитацією для зниження стресу і покращення психічного здоров'я."
  ];
  
  
  let countOfPills = 5;
  
  
  const updatePillCount = () => {
    let pillContainer = document.getElementById("count_hearts");
    pillContainer.innerHTML = ""; 
    for (let i = 0; i < countOfPills; i++) {
      const pill = document.createElement("span");
      pill.textContent = "💊"; 
      pill.style.fontSize = "15px";
      pill.style.marginRight = "3px";
      pill.style.transition = "color 0.3s"; 
      if (i >= 5 - countOfPills) {
        pill.style.color = "gray"; 
      }
      pillContainer.appendChild(pill);
    }
  };
  
  
  document.getElementById("btn_LoveWishes").addEventListener("click", () => {
    if (countOfPills > 0) {
      
      let index = Math.floor(Math.random() * arrayOfHealthTips.length);
      document.getElementById("LoveWishes").innerText = arrayOfHealthTips[index];
  
      
      countOfPills--;
      updatePillCount();
  
      
      if (countOfPills === 0) {
        document.getElementById("btn_LoveWishes").style.display = "none"; 
      }
    }
  });
  
  
  document.getElementById("btn_buy_hearts").addEventListener("click", () => {
    if (countOfPills < 5) {
      countOfPills = 5; 
      updatePillCount();
      document.getElementById("btn_LoveWishes").style.display = "block"; 
    }
  });

  const images = ["main-img.png", "main-img1.png","main-img3.png"];
  let currentIndex = 0;
  const mainImg = document.getElementById("main-img");
  
  document.getElementById("left-arrow").addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      updateImage();
  });

  document.getElementById("right-arrow").addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % images.length;
      updateImage();
  });

  function updateImage() {
      mainImg.src = "img/gallery/" + images[currentIndex];
  }



 const arrayOfVitamins = [
  {
    id:1,
    title:"Вітамін А",
    photo:"vitamin-a.png",
    description:" група близьких за хімічною будовою речовин, яка включає ретиноїди: ретинол (вітамін A1, аксерофтол), дегідроретинол (вітамін А2), ретиналь (ретинен, альдегід вітаміну A1), ретиноєву кислоту і кілька провітамінів — каротиноїдів, серед яких найважливішим є β-каротин.",
    rating:4,
    type:"кристалічні"
  },
  {
    id:2,
    title:"Вітамін С",
    photo:"vitamin-c.png",
    description:"вітамін C — відносно проста органічна кислота. Хімічна формула C6H8O6. Міститься у свіжих фруктах (яблука, сливи, персики тощо) та овочах. Відносять до водорозчинних вітамінів.",
    rating:3,
    type:"водорозчинні"
  },
  {
    id:3,
    title:"Вітамін D",
    photo:"vitamin-d.png",
    description:"Вітамі́н D має кілька форм[1]. Їх називають кальцифероли і представлені вони переважно у вигляді двох речовин: ергокальциферолу (вітаміну D2), що надходить із дріжджів, та холекальциферолу (вітаміну D3), який отримано із тканин тварин.[2][3]",
    rating:1,
    type:"кристалічні"
  },
  {
    id:4,
    title:"Вітамін B",
    photo:"vitamin.png",
    description:"Вітаміни групи B, «вітаміни B», «В-комплекс» та ін. — вітаміни, розчинні у воді. Зазвичай розглядаються в комплексі (раніше вважалося, що це один вітамін, а не група). Отримали свою збірну назву тому, що в природних продуктах завжди існують разом. Спільно вітаміни групи B виконують головну функцію — участь у тканинному диханні та виробленні енергії, відіграють важливу роль у підтримці як ментального, так і емоційного здоров'я.",
    rating:5,
    type:"водорозчинні, кристалічні"
  },
  {
    id:5,
    title:"Вітамін E",
    photo:"vitamin-e.png",
    description:"Вітамін E накопичується головним чином в жировій тканині. Біологічне визначення вітаміну E проводять на вагітних щурах. Одержуючи корм з нестачею токоферола, щури не можуть виносити плід до кінця терміну, і той або народжується мертвим, або розсмоктується в матці. Інша функція вітаміну E полягає в підтримці м'язового тонусу у молодих тварин. Вітамін E є антиоксидантом і, зокрема, запобігає окисленню і руйнуванню вітаміну A. У людини, особливо у дітей, недостача вітаміну E призводить до швидкого руйнування еритроцитів і анемії. Було документально підтверджено, що похідне вітаміну Е з вкороченим бічним ланцюгом індукує апоптоз пухлинних клітин, змінює потенціал мітохондріальної мембрани, а також регулює певні апоптотичні білки, що відносяться до факторів росту. [1].",
    rating:2,
    type:"жиророзчинний"
  },
 ]

 const vitaminsContainer = document.getElementById("p-vitamins");
const totalVitamins = arrayOfVitamins.length;

function renderVitamin(index) {
  vitaminsContainer.innerHTML = "";
  let item = arrayOfVitamins[index];
  let divVitamin = document.createElement("div");
  divVitamin.classList.add("vitamin-container");
  divVitamin.innerHTML = `
    <<div class="vitamin" id="vitamin-card">>
      <h3>${item.title}</h3>
      <hr>
      <img src="img/vitamins/${item.photo}" alt="">
      <p>${item.description}</p>
      <div>
        <p>${'💚'.repeat(item.rating) + '🤍'.repeat(5 - item.rating)}</p>
        <p>${item.type}</p>
        <p>id:00${item.id}</p>
      </div>
    </div>
  `;
  vitaminsContainer.appendChild(divVitamin);

  

  //  стрілки
  const leftArrow = document.createElement("img");
  leftArrow.src = "img/left-arrow.png";
  leftArrow.classList.add("arrow", "left-arrow");
  leftArrow.addEventListener("click", prevVitamin);
  divVitamin.appendChild(leftArrow);

  document.getElementById("vitamin-card").addEventListener("click", () => {
    nextVitamin();
  });

  const rightArrow = document.createElement("img");
  rightArrow.src = "img/right-arrow.png";
  rightArrow.classList.add("arrow", "right-arrow");
  rightArrow.addEventListener("click", nextVitamin);
  divVitamin.appendChild(rightArrow);
}



// Функції для перегортання
function nextVitamin() {
  currentIndex = (currentIndex + 1) % totalVitamins;
  renderVitamin(currentIndex);
}

function prevVitamin() {
  currentIndex = (currentIndex - 1 + totalVitamins) % totalVitamins;
  renderVitamin(currentIndex);
}


 // Початковий рендер першого елемента
 renderVitamin(currentIndex);

 function renderAllVitamins() {
  vitaminsContainer.innerHTML = ""; // Очистити контейнер
  arrayOfVitamins.forEach((item, index) => {
    let divVitamin = document.createElement("div");
    divVitamin.classList.add("vitamin-container");
    divVitamin.innerHTML = `
      <div class="vitamin">
        <h3>${item.title}</h3>
        <hr>
        <img src="img/vitamins/${item.photo}" alt="">
        <p>${item.description}</p>
        <div>
          <p>${'💚'.repeat(item.rating) + '🤍'.repeat(5 - item.rating)}</p>
          <p>${item.type}</p>
          <p>id:00${item.id}</p>
        </div>
      </div>
    `;
    vitaminsContainer.appendChild(divVitamin);
  });
}

// Додавання кнопки для відкриття всіх карток
const showAllButton = document.createElement("button");
showAllButton.textContent = "Показати всі картки Спеціально Для Шатківського";
showAllButton.classList.add("show-all-button");
showAllButton.addEventListener("click", renderAllVitamins);

// Додаємо кнопку до документа
document.body.appendChild(showAllButton);

 