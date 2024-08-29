import {
  renderBookList,
  renderAuthorInfo,
  renderNewUserForm,
  renderNewUser,
} from './render-functions.js';
import {
  getFirstThreeFantasyBooks,
  getAuthor,
  createNewUser,
} from './fetch-functions.js';

export default async function app(appDiv) {
  const bookListEl = document.createElement('ul');
  bookListEl.id = 'book-list';
  appDiv.append(bookListEl);

  const authorInfoEl = document.createElement('div');
  authorInfoEl.id = 'author-info';
  appDiv.append(authorInfoEl);

  const newUserEl = document.createElement('div');
  newUserEl.id = 'new-user';
  appDiv.append(newUserEl);

  const newUserFormEl = document.createElement('form');
  newUserFormEl.id = 'new-user-form';
  appDiv.append(newUserFormEl);
  // Render the form!
  renderNewUserForm(newUserFormEl);

  // Fetch the books!
  const books = await getFirstThreeFantasyBooks()
  console.log(books)
  // render out the books
  renderBookList(bookListEl, books)

  bookListEl.addEventListener("click", async (event) => {
    // making sure that if the clicked element is a button.
    if (event.target.matches("button")) {
      // Get the authors info and store it 
      const author = await getAuthor(event.target.dataset.authorUrlKey);
      // Render the author information?
      renderAuthorInfo(authorInfoEl, author);
    }
  });


  renderNewUserForm(newUserFormEl)
  newUserFormEl.addEventListener('submit', async (event) => {
    event.preventDefault();
    const userData = new FormData(event.target)
    const formObj = Object.fromEntries(userData)
    const user = await createNewUser(formObj)
    renderNewUser(newUserEl, user)

  })
}
// bookListEl.addEventListener('???', () => {})

// newUserFormEl.addEventListener('???', () => {})

