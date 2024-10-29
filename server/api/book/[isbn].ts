import prisma from "~/lib/prisma";

export default defineEventHandler(async (event) => {
  const isbn = getRouterParam(event, "isbn");
  let book;
  try {
    await prisma.book
      .findFirst({
        where: {
          isbn,
        },
      })
      .then((res) => (book = res))
      .catch((e) => console.log(e));
  } catch (e) {
    console.log(e);
  }
  return book;
});
