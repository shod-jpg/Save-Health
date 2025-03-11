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