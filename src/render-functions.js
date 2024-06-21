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


}

export const renderNewUser = (newUserEl, newUser) => {
}