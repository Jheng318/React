const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

// destructuring

// const book = getBook(3);
// // const author = book.author;

// // const title = book.title;
// const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
//   book;
// console.log(title, author, genres);

// // const primaryGenre = genres[0];
// // const secondaryGenre = genres[1];

// const [primaryGenre, secondaryGenre, ...otherGenres] = genres;
// console.log(primaryGenre, secondaryGenre, otherGenres);

// // template literal

// const summary = `${title}, a ${pages}-page long book, was written by ${author} and published in ${
//   publicationDate.split("-")[0]
// }, The book has ${hasMovieAdaptation ? "" : "not"} been adapted as a movie `;
// summary;

// //rest spread
// const newGenres = [...genres, "epic fantasy"];
// newGenres;

// const updatedBook = {
//   ...book,
//   // adding a new property
//   moviepublicationDate: "2001-12-19",
//   // overwriting an existing property
//   pages: 1210,
// };
// updatedBook;

// // ternary operators
// const pagesRange = pages > 1000 ? "over a Thousand" : "less than one thousand";
// pagesRange;
// console.log(`The book has ${pagesRange} pages`);

// // arrow function
// // function getYear(str){
// //   return str.split('-')[0];
// // }
// const getYear = (str) => str.split("-")[0];

// // short circuiting and logical operators
// console.log(true && "Some string");
// console.log(false && "Some string");
// console.log(hasMovieAdaptation && "This book has a movie");

// // falsy: null, 0 , '' , undefined
// console.log("jonas" && "Some string");
// console.log(null && "Some string");

// console.log(true || "Some string");
// console.log(false || "Some string");

// console.log(book.translations.chinese);
// const chineseTranslation = book.translations.chinese || "Not translated";
// chineseTranslation;

// console.log(book.reviews.librarything.reviewsCount);
// const countWrong = book.reviews.librarything.reviewsCount || "No data";
// countWrong;

// const count = book.reviews.librarything.reviewsCount ?? "no data";
// count;

// // optionaly chaining
/*
function getTotalReviewCount(book) {
  const goodread = book.reviews?.goodreads?.reviewsCount;
  const librarything = book.reviews?.librarything?.reviewsCount ?? 0;
  librarythings;
  return goodread + librarything;
}
// console.log(getTotalReviewCount(book));

// array map method they do no mutate the array
const books = getBooks();
//.map() to create a new array based on the original array and some orperations on the array
const x = [1,2,3,4,5].map(el=>el*2); 
console.log(x)

const titles= books.map(book=>book.title);
titles;

// const essentData = books.map(book=>({
//   title: book.title,
//   author: book.author,
//   reviewsCount : getTotalReviewCount(book),
// }));
// essentData;

// filter method
const longBooksWithMovie = books.filter(book=> book.pages > 500).filter(book=>book.hasMovieAdaptation);
longBooksWithMovie

const adventureBooks = books.filter(book=>book.genres.includes("adventure")).map(book=>book.title)
adventureBooks

// reduce method : to reduce the array to one value
const pagesAllBooks = books.reduce((sum, book)=> sum + book.pages, 0)
pagesAllBooks

// sort method this method mutates the original array
const arr = [1,2,10,5,9,7];
const sorted = arr.slice().sort((a,b)=>a-b) // a-b will sorted it asc but b-a will sort it desc
sorted
arr;

const sortedByPages = books.slice().sort((a,b)=>b.pages-a.pages);
sortedByPages

// 1) add a book object to array
const newBook = {
  id: 6,
  title: "Harry Potter and the Chamber of Secrets",
  author: "J.K. Rowling",
};
const booksAfterAdd = [...books, newBook];
booksAfterAdd

// 2) delete book object from array
const bookAfterDelete = booksAfterAdd.filter((book)=>book.id !== 3);
bookAfterDelete;

// 3) update book object in array
const booksAfterUpdate = bookAfterDelete.map(book=>book.id===1?{...book, pages: 1210}:book)
booksAfterUpdate;
*/

// promises
// fetch("https://jsonplaceholder.typicode.com/todos")
// .then((res)=>res.json())
// .then((data)=>console.log(data));
// console.log("jason");

async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  console.log(data);

  return data;
}
const todos = getTodos();
console.log(todos);
console.log("Jonas");
