export const getFirstThreeFantasyBooks = async () => { // if a function is async it will allow for this function to return a promise, hence the return null in the catch.

    try {
        const response = await fetch('https://openlibrary.org/subjects/fantasy.json'); // sending a request to the server & awaiting completion. 
        if (!response.ok) {
            throw new Error('Failed to get fantasy books'); // if we are not able to fetch the data/if the response is NOT okay, throw a new error 
        }
        const allBooks = await response.json();
        console.log(allBooks); // awaiting completion then turns readable stream into Json (something that we can read, a object of information)

        const threeFantasyBooks = allBooks.works.slice(0, 3); // Getting the first three books

        const formattedBooks = threeFantasyBooks.map(book => ({
            title: book.title,
            author: {
                name: book.authors[0].name,
                urlKey: book.authors[0].key
            },
            coverUrl: `https://covers.openlibrary.org/a/id/${book.cover_id}-M.jpg`
        }));

        return formattedBooks;
    } catch (error) {
        console.warn(error.message);
        return null;
    }
};

export const getAuthor = async (urlKey) => {

    try {

        const url = `https://openlibrary.org${urlKey}.json`

        const response = await fetch(url)

        if (!response.ok) {
            throw new Error('Failed to get author')
        }

        const allAuthors = await response.json();

        const authorData = {
            birthDate: allAuthors.birth_date,
            bio: allAuthors.bio,
            wikipediaUrl: allAuthors.wikipedia,
            name: allAuthors.name,
            pictureUrl: `https://covers.openlibrary.org/a/id/${allAuthors.photos[0]}-M.jpg`
        }

        return authorData;

    } catch (error) {
        console.warn(error.message);
        return null;
    }

};

export const createNewUser = async (user) => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });

        if (!response.ok) {
            throw new Error('Failed to create new user');
        }

        const newUser = await response.json();
        newUser.id = 11; // Hardcoding id as 11 as instructed
        return newUser;
    } catch (error) {
        console.warn(error.message);
        return null;
    }
};
