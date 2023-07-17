// Запрос

async function getResponce(){
    let responce = await fetch("http://localhost:3000/content")
    let contents = await responce.json()
  
    let key;
  
    for (key in contents){
  
      document.querySelector("#posts").innerHTML += `<a href="#">
      <div class="blogger-five">
      <img class="previy" src="${contents[key].prevy}" alt="Превью 5">
      <div class="description flex ml-1 w-80">
          <div>
              <img class="w-9 mt-1 rounded-full absolute flex-shrink-0" src="${contents[key].ava}" alt="ава-1">
          </div>
          <div class="description-too ml-12">
              <h3 class="previy-title text-bace">${contents[key].deskreption}</h3>
              <div class="name-ava mt-1">${contents[key].name}</div>
              <div class="name-ava">${contents[key].views}</div>
          </div>
      </div>
      </div>
      </a>`
    
  
    }
  }
  
  getResponce()