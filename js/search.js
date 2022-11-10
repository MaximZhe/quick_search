const formSearch = document.querySelector("#search-form");
const searchButton = formSearch.querySelector("#search-btn")
const searchInput = formSearch.querySelector("#search__input")
const catalogBlock = document.querySelector("#catalog");
const btnFilterArrow = document.querySelector(".filter-item__btn")
const arrowFilterIcon = document.querySelector(".filter-item__svg")
const filterList = document.querySelector(".filter-item__list");

searchButton.addEventListener("click", function (e) {
    e.preventDefault();
    let searchValue = searchInput.value.toLocaleLowerCase()
    if(searchValue === "комбинезоны"){
        catalogBlock.classList.add("active");
        filterList.classList.add("active");
        arrowFilterIcon.classList.add("active")
    }
})

btnFilterArrow.addEventListener("click", function () {
    arrowFilterIcon.classList.toggle("active")
    filterList.classList.toggle("active");
})

