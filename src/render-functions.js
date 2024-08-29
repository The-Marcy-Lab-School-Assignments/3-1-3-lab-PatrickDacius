export const renderBookList = (bookListEl, books) => {

    bookListEl.replaceChildren()

    books.forEach(book => {
        const listedItems = document.createElement('li')
        const img = document.createElement('img')
        img.src = book.coverUrl;
        img.alt = `An old cover of ${book.title}`


        const p = document.createElement('p')
        p.textContent = `Title: ${book.title}`

        const button = document.createElement('button')
        button.textContent = `View ${book.author.name}`
        button.setAttribute('data-author-url-key', book.author.urlKey)

        listedItems.append(img, p, button)
        bookListEl.append(listedItems)
    });

}

export const renderAuthorInfo = (authorInfoEl, author) => {

    authorInfoEl.replaceChildren()

    const headingTwo = document.createElement('h2')
    headingTwo.textContent = author.name

    const img = document.createElement('img')
    img.src = author.pictureUrl
    img.alt = `A picture of ${author.name}`

    const pTag = document.createElement('p')
    pTag.textContent = `Born: ${author.birthDate}`

    const pTag2 = document.createElement('p')
    pTag2.textContent = author.bio;

    const anchorTag = document.createElement('a')
    anchorTag.href = author.wikipediaUrl
    anchorTag.text = `Wikipedia Link`

    authorInfoEl.append(headingTwo, img, pTag, pTag2, anchorTag,)

}
export const renderNewUserForm = (newUserFormEl) => {
    newUserFormEl.innerHTML = '';

    const usernameLabel = document.createElement('label');
    usernameLabel.textContent = 'Username';
    usernameLabel.setAttribute('for', 'username');
    const userInput = document.createElement('input');
    userInput.id = 'username';
    userInput.name = 'username';

    const coolLabel = document.createElement('label');
    coolLabel.textContent = 'Is this user cool?';
    coolLabel.setAttribute('for', 'is-cool');
    const coolInput = document.createElement('input');
    coolInput.id = 'is-cool';
    coolInput.name = 'isCool';
    coolInput.type = 'checkbox';


    const favLanguageLabel = document.createElement('label');
    favLanguageLabel.textContent = 'Favorite Language';
    favLanguageLabel.setAttribute('for', 'favorite-language');
    const favLangSelect = document.createElement('select');
    favLangSelect.id = 'favorite-language';
    favLangSelect.name = 'favoriteLanguage';

    const diffLanguages = ['None', 'JavaScript', 'Python', 'Ruby'];
    diffLanguages.forEach(language => {
        const option = document.createElement('option');
        option.value = language;
        option.textContent = language;
        favLangSelect.append(option);
    });


    const createUserButton = document.createElement('button');
    createUserButton.textContent = 'Create User';


    newUserFormEl.append(usernameLabel);
    newUserFormEl.append(userInput);
    newUserFormEl.append(coolLabel);
    newUserFormEl.append(coolInput);
    newUserFormEl.append(favLanguageLabel);
    newUserFormEl.append(favLangSelect);
    newUserFormEl.append(createUserButton);
}

export const renderNewUser = (newUserEl, newUser) => {
    newUserEl.innerHTML = "";
    const h2 = document.createElement("h2");
    h2.textContent = newUser.username;
    h2.dataset.userId = newUser.id;
    const p = document.createElement("p");
    if (newUser.isCool === true) p.textContent = `The hippest in the house!`;
    else p.textContent = "A real square.";
    const p2 = document.createElement("p");
    p2.textContent = `Favorite Language: ${newUser.favoriteLanguage}`;

    newUserEl.append(h2, p, p2);
};