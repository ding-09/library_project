// book objects are going to be stored in myLibrary array
let myLibrary = [];

// Book constructor
function Book(title, author, numPages, read) {
    this.title = title;
    this.author = author;
    this.numPages = numPages; 
    this.read = false;
}


// default book card 
let defaultBook = new Book("Another Book About Cats", "CatAuthor2", 420);
myLibrary.push(defaultBook);
console.log(myLibrary);


function addBookToLibrary() {
    // take user input 

    // create a new Book object with those input values 

    // store new Book object into myLibrary array
}

// helper for addActionButtons
function addReadBtn() {
    let checkRead = document.createElement("button");
    checkRead.className = "check-read";

    // add read icon 
    let checkIcon = document.createElement("i");
    checkIcon.className = "fas fa-check-circle";

    let tooltip = document.createElement("span");
    tooltip.textContent = "Mark as read";
    tooltip.className = "tooltiptext";

    checkIcon.appendChild(tooltip);
    checkRead.appendChild(checkIcon);

    return checkRead;
}

// helper for addActionButtons
function addRemoveBtn() {
    let removeBtn = document.createElement("button");
    removeBtn.className = "remove";

    // add remove icon 
    let removeIcon = document.createElement("i");
    removeIcon.className = "fas fa-times";

    removeBtn.appendChild(removeIcon);

    return removeBtn;
}


// add action buttons to bookCard
function addActionButtons(div) {
    // add action-buttons class to the div
    div.className = "action-buttons";
    
    // add check-read button
    let checkRead = addReadBtn();

    // add remove button
    let remove = addRemoveBtn();

    // append elements to div
    div.appendChild(checkRead);
    div.appendChild(remove);
}

// create title div with appropriate class names
function addTitle(titleName) {
    let titleDiv = document.createElement("div");
    titleDiv.className = "title";

    let innertext = document.createElement("p");
    innertext.textContent = titleName;

    titleDiv.appendChild(innertext);
    return titleDiv;
}

// create div with by word
function addByWord() {
    let byDiv = document.createElement("div");
    byDiv.className = "by-style";

    let innertext = document.createElement("p");
    innertext.textContent = "by";

    byDiv.appendChild(innertext);
    return byDiv;
}

// create author div 
function addAuthor(authorName) {
    let authorDiv = document.createElement("div");
    authorDiv.className = "author";

    let innertext = document.createElement("p");
    innertext.textContent = authorName;

    authorDiv.appendChild(innertext);
    return authorDiv;
}

// create page div
function addPages(pageNum) {
    let pagesDiv = document.createElement("div");
    pagesDiv.className = "pages";

    let innertext = document.createElement("p");
    innertext.textContent = pageNum;

    pagesDiv.appendChild(innertext);
    return pagesDiv;
}


// turn Book objects into cards and display them
function displayBook() {
    let mainContainer = document.getElementById("main-container");

    // turn objects in myLibrary array into cards
    for (i = 0; i < myLibrary.length; i++) {
        // create a new div with class of book-card
        let bookCard = document.createElement("div");
        bookCard.className = "book-card";

        // add action buttons to bookCard 
        let actionBtnDiv = document.createElement("div");
        addActionButtons(actionBtnDiv);

        // add book info to bookCard
        let title = addTitle(myLibrary[i].title);

        let byWord = addByWord();

        let author = addAuthor(myLibrary[i].author);

        let pages = addPages(myLibrary[i].numPages);


        // append everything together
        bookCard.appendChild(actionBtnDiv);
        bookCard.appendChild(title);
        bookCard.appendChild(byWord);
        bookCard.appendChild(author);
        bookCard.appendChild(pages);
        mainContainer.appendChild(bookCard);
    }
}

displayBook();


// action buttons interaction 

// add book 


// mark as read 




// remove 
