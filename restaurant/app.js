let itemBox = document.getElementById("itemBox");
let itemList = document.getElementById("itemList");
let menuTitle = document.getElementById('menuTitle');
let liItems = dishes.map(function (dish) {
    return `<li class="liItem"><div class="itemBox">
        <img class= "image" src=${dish.imageURL}>
        <div class="name-descript-box">
        <h4 class = "title">${dish.title}</h4>
        <p class="description">${dish.description}</p>
        </div>
        <p class="price">${dish.price}</p>
        </div>
        </li>
        `
})

itemList.innerHTML = liItems.join("")

//Event Listners

let starterMenu = document.getElementById("starterMenu")
let entreeMenu = document.getElementById("entreeMenu")
let dessertMenu = document.getElementById("dessertMenu")
let fullMenu = document.getElementById("fullMenu")
starterMenu.addEventListener('click', () => {
    let starters = dishes.filter(function (dish) {
        return dish.course == "Starters"
    })
    printMenu("starters", starters)
    // let starterDisplay = starters.map(function (dish) {
    //     return `<li class="liItem"><div class="itemBox">
    //     <img class= "image" src=${dish.imageURL}>
    //     <div class="name-descript-box">
    //     <h4 class = "title">${dish.title}</h4>
    //     <p class="description">${dish.description}</p>
    //     </div>
    //     <p class="price">${dish.price}</p>
    //     </div>
    //     </li>
    //     `
    // })
    // itemList.innerHTML = starterDisplay.join("")
})

entreeMenu.addEventListener('click', () => {
    let entrees = dishes.filter(function (dish) {
        return dish.course == "Entrees"
    })
    printMenu("entrees", entrees);

    // let entreeDisplay = entrees.map(function (dish) {
    //     return `<li class="liItem"><div class="itemBox">
    //     <img class= "image" src=${dish.imageURL}>
    //     <div class="name-descript-box">
    //     <h4 class = "title">${dish.title}</h4>
    //     <p class="description">${dish.description}</p>
    //     </div>
    //     <p class="price">${dish.price}</p>
    //     </div>
    //     </li>
    //     `
    // })
    // itemList.innerHTML = entreeDisplay.join("")
})

dessertMenu.addEventListener('click', () => {
    let desserts = dishes.filter(function (dish) {
        return dish.course == "Desserts"
    })
    printMenu("desserts", desserts);
    // let dessertDisplay = desserts.map(function (dish) {
    //     return `<li class="liItem"><div class="itemBox">
    //     <img class= "image" src=${dish.imageURL}>
    //     <div class="name-descript-box">
    //     <h4 class = "title">${dish.title}</h4>
    //     <p class="description">${dish.description}</p>
    //     </div>
    //     <p class="price">${dish.price}</p>
    //     </div>
    //     </li>
    //     `
    // })
    // itemList.innerHTML = dessertDisplay.join("")
})

fullMenu.addEventListener('click', () => {
    let fullMenu = dishes.filter(function (dish) {
        return dish.course == "Starters"
    })
    printMenu("fullmenu", dishes)
    // let starterDisplay = starters.map(function (dish) {
    //     return `<li class="liItem"><div class="itemBox">
    //     <img class= "image" src=${dish.imageURL}>
    //     <div class="name-descript-box">
    //     <h4 class = "title">${dish.title}</h4>
    //     <p class="description">${dish.description}</p>
    //     </div>
    //     <p class="price">${dish.price}</p>
    //     </div>
    //     </li>
    //     `
    // })
    // itemList.innerHTML = starterDisplay.join("")
})


function printMenu(listName, list) {
    if (listName == "starters") {
        menuTitle.innerHTML = "Starters"
    } else if (listName == "entrees") {
        menuTitle.innerHTML = "Entrees"
    } else if (listName == "desserts") {
        menuTitle.innerHTML = "Desserts"
    } else {
        menuTitle.innerHTML = "Menu"
    }
    let menu = list.map(function (dish) {
        return `<li class="liItem"><div class="itemBox">
        <img class= "image" src=${dish.imageURL}>
        <div class="name-descript-box">
        <h4 class = "title">${dish.title}</h4>
        <p class="description">${dish.description}</p>
        </div>
        <p class="price">${dish.price}</p>
        </div>
        </li>
        `
    })

    itemList.innerHTML = menu.join("")
}