// Запрос

async function getResponce(){
    let responce = await fetch("http://localhost:3000/content")
    let contents = await responce.json()  
    return contents   
}

async function main(){
   
    const data = await getResponce()    
    let CurrentPage = 1
    let rows = 9

    // 1. Отображенеи контента

    function List(ArrayData, rowsToo, page){

        const posts = document.querySelector("#posts")

        --page
        posts.innerHTML = ""

        const start = rowsToo * page;
        const end = start + rowsToo;
        const paginatedData = ArrayData.slice(start, end)

        for (key in paginatedData){

        posts.innerHTML += `<a href="#">
        <div class="blogger-five">
        <img class="previy" src="${paginatedData[key].prevy}" alt="Превью 5">
        <div class="description flex ml-1 w-80">
            <div>
                <img class="w-9 mt-1 rounded-full absolute flex-shrink-0" src="${paginatedData[key].ava}" alt="ава-1">
            </div>
            <div class="description-too ml-12">
                <h3 class="previy-title text-bace">${paginatedData[key].deskreption}</h3>
                <div class="name-ava mt-1">${paginatedData[key].name}</div>
                <div class="name-ava">${paginatedData[key].views}</div>
            </div>
        </div>
        </div>
        </a>`
        }
        

    }

    // Пагинация
    
    function Pagination(arrData, rowsToo){


        const paginationEl = document.querySelector(".pagination")
        const pagesCount = arrData.length / rowsToo
        const ulEl = document.createElement("ul")
        ulEl.classList.add('pagination-ul')

        for(i = 0; i < pagesCount; i++){
            const liEl = PaginationButton(i + 1)
            ulEl.appendChild(liEl)
        }
        paginationEl.appendChild(ulEl)
        
    }

    function PaginationButton(page){

        const liEl = document.createElement("li")
        liEl.classList.add('pagination-li')
        liEl.innerText = page

        if (CurrentPage == page){
            liEl.classList.add("pagination-btn-active")
        }

        liEl.addEventListener("click", () =>{
            CurrentPage = page
            List(data, rows, CurrentPage)
            const PaginationActiveBtn = document.querySelector("li.pagination-btn-active")
            PaginationActiveBtn.classList.remove("pagination-btn-active")

            liEl.classList.add("pagination-btn-active")

        })

        return liEl;
    }

    List(data, rows, CurrentPage);
    Pagination(data, rows)

}

main()