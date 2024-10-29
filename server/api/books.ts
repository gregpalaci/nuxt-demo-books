import prisma from "~/lib/prisma";

export default defineEventHandler(async (event) => {
  let books = [{}];
  try {
    await prisma.book
      .findMany()
      .then((res) => (books = res))
      .catch((e) => console.log(e));
  } catch (e) {
    console.log(e);
  }
  return books;
});
