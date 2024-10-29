import { PrismaClient } from "@prisma/client";
import { BookSchema, type Book } from "./zod";
const prisma = new PrismaClient();

import seeds from "./seeds.json";
async function main() {
  const addBook = async (book: Book) => {
    book.isbn = `${book.isbn}`;
    const bookParsed = BookSchema.parse({ ...book, isbn: `${book.isbn}` });
    try {
      await prisma.book
        .upsert({
          where: {
            isbn: bookParsed.isbn,
          },
          update: { ...bookParsed },
          create: { ...bookParsed },
        })
        .catch((e) => console.log(e));
    } catch (e) {
      console.log(e);
    }
  };

  const getBooks = () => {
    seeds.forEach(async (seed) => {
      try {
        await addBook({ ...seed, isbn: `${seed.isbn}` }).catch((e) =>
          console.log(e)
        );
      } catch (e) {
        console.log(e);
      }
    });
    console.log("Done!");
  };

  getBooks();
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
