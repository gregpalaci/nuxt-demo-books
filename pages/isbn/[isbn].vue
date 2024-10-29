<template>
  <div>
    <div v-if="currentBook">
      <div class="book-container">
        <Book :book="currentBook" />
      </div>
      <div class="btn-container">
        <div v-if="goodreadURL" class="goodreads">
          <Goodreads :url="goodreadURL"></Goodreads>
        </div>
        <Button label="Back" @click.prevent="back()">Back</Button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const currentBook = useState("currentBook");
const bookStatus = useState("bookStatus");
const route = useRoute();
let goodreadURL;

try {
  if (route?.params?.isbn) {
    await newFetch(`/api/book/${route.params.isbn}`)
      .then((data) => (currentBook.value = data))
      .catch((e) => console.log(e));
  }
  goodreadURL = asyncComputed(async () => {
    let url;
    await getGoodReadURL(currentBook.value.isbn)
      .then((data) => (url = data))
      .catch((e) => console.log(e));
    return url;
  });
} catch (e) {
  log(e);
}

onKeyStroke(["Escape"], (e: Event) => {
  e.preventDefault();
  back();
});
</script>

<style scoped>
.goodreads {
  width: 150px;

  margin-bottom: 2rem;
}
.btn-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10rem;
  flex: 1;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.modal {
  width: 80%;
  height: 80vh;
  background: #fff;
  padding: 10rem;
  position: fixed;
  border: solid 1px #ccc;
  top: 10rem;
}
.close {
  position: absolute;
  right: 10rem;
  top: 10rem;
}
.book-container {
  margin-top: 100px;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-family: "Lato", sans-serif;
}

.user-card {
  width: 230px;
  height: 300px;
  box-shadow: -10px 5px 20px rgba(0, 0, 0, 0.3);
  border-radius: 15px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  transition: box-shadow 0.2s ease-in;
  cursor: pointer;
}

.user-card:hover {
  box-shadow: -10px 10px 20px rgba(0, 0, 0, 0.4);
}

.user-card .user-cover {
  height: 120px;
  width: 100%;
  background-color: dodgerblue;
  position: relative;
}

.user-card .user-cover .user-avatar {
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  left: 0;
  right: 0;
  margin: auto;
  bottom: -25px;
  border: 1px solid #fff;
}

.user-card .user-details {
  text-align: center;
  margin-top: 35px;
  margin-bottom: 25px;
  width: 80%;
}

.user-card .user-details .user-name {
  margin-bottom: 10px;
  text-transform: uppercase;
}

.user-card .user-details .user-email {
  font-size: 12px;
  color: #666;
}

.user-card .contact-user {
  margin-bottom: 15px;
  height: 35px;
  width: 80%;
  border: 0;
  color: dodgerblue;
  font-weight: bold;
  letter-spacing: 0.5px;
  border-radius: 5px;
  cursor: pointer;
}

/* Skeleton */

/* Static Skeleton */

.user-card.skeleton .user-cover {
  background: #e2e2e2;
}

.user-card.skeleton .user-cover .user-avatar {
  display: none;
}

.user-card.skeleton .user-cover::after {
  content: "";
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  left: 0;
  right: 0;
  margin: auto;
  bottom: -25px;
  border: 1px solid #fff;
  z-index: 10;
  background: #e2e2e2;
}

/* Animated Skeleton */

.user-card.skeleton .hide-text {
  background: #e2e2e2;
  color: transparent;
  position: relative;
  overflow: hidden;
}

.user-card.skeleton .hide-text::before {
  content: "";
  position: absolute;
  left: 0%;
  top: 0;
  height: 100%;
  width: 50px;
  background: linear-gradient(to right, #e2e2e2 25%, #d5d5d5 50%, #e2e2e2 100%);
  animation-name: gradient-animation;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  filter: blur(5px);
}

@keyframes gradient-animation {
  from {
    left: 0%;
  }
  to {
    left: 100%;
  }
}
</style>
