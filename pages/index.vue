<template>
  <div class="container">
    <div
      class="book-item"
      v-for="{ isbn, title, name, review, coverurl } in data"
      :key="isbn"
    >
      <div class="details">
        <h4>
          {{ title }}
        </h4>
        <div class="book-image-container">
          <div @click="pretendGoToBook(isbn)" class="book-image">
            <NuxtImg
              width="90"
              :src="coverurl"
              format="avif"
              :modifiers="{ blur: 2 }"
            />
          </div>
          <div class="book-label">Quick Look</div>
        </div>
        <div>
          <i>by: {{ name }} </i>

          <span v-if="review"> {{ review }}</span>
        </div>
        <NuxtLink :to="'/isbn/' + isbn">
          <Button label="Details"></Button>
        </NuxtLink>
      </div>
    </div>

    <div v-show="isShowing" class="background"></div>
    <div v-if="isShowing" class="modal-container">
      <Modal>
        <Button @click="closeModal()" class="close" label="X"></Button>

        <Book :book="book" />
        <div class="button-holder">
          <NuxtLink :to="'/isbn/' + book.isbn">
            <Button label="Details"></Button>
          </NuxtLink>
          <Button @click="closeModal()" label="Back"></Button>
        </div>
      </Modal>
    </div>
  </div>
</template>
<script setup lang="ts">
import { type Book } from "~/prisma/zod/index";
const { data } = await useFetch("/api/books");
const book: Book = useState("book");
const isShowing = useState("isShowing");
const img = useImage();

onKeyStroke(["Escape"], (e: Event) => {
  e.preventDefault();
  isShowing.value = false;
});

const pretendGoToBook = (isbn: Book) => {
  book.value = getOneBook(data.value, isbn);
  isShowing.value = true;
};

if (Array.isArray(data.value)) {
  const imageLinks = data.value.map((book: Book) => ({
    rel: "preload",
    as: "image",
    href: book.coverurl,
    format: "jpeg",
    preload: true,
  }));
  useHead({
    link: imageLinks,
  });
}

const closeModal = () => {
  isShowing.value = false;
};
</script>

<style scoped>
.button-holder {
  display: flex;
  align-items: center;
  justify-content: center;
  display: flex;
  flex: 1;
}
.button-holder a {
  margin-right: 20px;
}
.modal {
  width: 20%;
  height: 80vh;
  background: #fff;
  padding: 10rem;
  position: fixed;
  border: solid 1px #ccc;
  top: 2rem;
}
.modal-container,
.container,
.details {
  display: flex;
  align-items: center;
  justify-content: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.background {
  width: 100%;
  height: 100%;
  position: fixed;
  background: rgba(0, 0, 0, 0.7);
  top: 0;
  left: 0;
}
.close {
  position: absolute;
  right: 0;
  top: 0;
}
.details {
  margin-bottom: 5rem;
}
.book-image-container {
  position: relative;
  width: 90px;
}
.book-image {
  position: relative;
  transition: all 0.1s;
  margin-bottom: 15px;
  filter: blur(2px);
}
.book-image:hover {
  box-shadow: rgba(14, 63, 126, 0.04) 0px 0px 0px 1px,
    rgba(42, 51, 69, 0.04) 0px 1px 1px -0.5px,
    rgba(42, 51, 70, 0.04) 0px 3px 3px -1.5px,
    rgba(42, 51, 70, 0.04) 0px 6px 6px -3px,
    rgba(14, 63, 126, 0.04) 0px 12px 12px -6px,
    rgba(14, 63, 126, 0.04) 0px 24px 24px -12px;
}
.book-label {
  transition: all 0.1s;
  color: white;
  text-align: center;
  width: 100%;
  position: absolute;
  bottom: -20px;
  padding: 10px 0;
  opacity: 0;
  background: rgba(0, 0, 0, 0.5);
}

.book-image-container:hover {
  top: -5px;
  cursor: pointer;
}

.details:hover .book-image {
  filter: blur(1px);
}

.details:hover .book-label {
  bottom: 20px;
  opacity: 1;
}

.book-item {
  margin-bottom: 25px;
  width: 50%;
  box-shadow: rgba(14, 63, 126, 0.04) 0px 0px 0px 1px,
    rgba(42, 51, 69, 0.04) 0px 1px 1px -0.5px,
    rgba(42, 51, 70, 0.04) 0px 3px 3px -1.5px,
    rgba(42, 51, 70, 0.04) 0px 6px 6px -3px,
    rgba(14, 63, 126, 0.04) 0px 12px 12px -6px,
    rgba(14, 63, 126, 0.04) 0px 24px 24px -12px;
}
</style>
