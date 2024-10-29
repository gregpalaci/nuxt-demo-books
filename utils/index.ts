import { type Book } from "~/prisma/zod";

export const goodreads = (isbn: Book["isbn"]) =>
  `https://www.goodreads.com/search?q=${isbn}`;

export const getGoodReadURL = async (isbn: Book["isbn"]) => goodreads(isbn);

export const log = (v: any) => console.log(v);

export const getOneBook = (books: [Book], isbn: string) =>
  books.filter((book: Book) => book.isbn === isbn)[0];

export const newFetch = async (url: string) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    return json;
  } catch (error: unknown) {
    console.error(error);
  }
};
