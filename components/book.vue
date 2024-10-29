<template>
  <div class="container" v-if="book">
    <div class="book">
      <div class="title">
        <p>{{ book.title }}</p>
      </div>
      <div
        v-if="backgroundStyles"
        :style="backgroundStyles"
        class="book-cover cover1"
      >
        <div class="effect"></div>
        <div class="light"></div>
      </div>
      <div class="book-inside"></div>
      <h4>by: {{ book.name }}</h4>
      <div v-if="book.review">
        {{ book.review }}
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["book"]);
const img = useImage();
const imgUrl = useState("imgUrl");
const book = computed(() => props.book);
const backgroundStyles = computed(() => ({
  "background-image": `url('${book.value.coverurl}')`,
  "background-size": "contain",
}));
</script>

<style scoped>
body {
  background: white;
  margin: 0;
  padding: 0;
  font-family: Arial;
}

a {
  text-decoration: none;
}

.container {
  width: 100%;
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.book {
  width: 225px;
  height: 350px;
  position: relative;
  text-align: center;
  margin: 2.5%;
}

.book-cover {
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  transform-origin: 0 50%;
  -webkit-transform-origin: 0 50%;
  background: #111;
  background-size: contain;
  border-radius: 3px;
  box-shadow: inset 4px 1px 3px #ffffff60, inset 0 -1px 2px #00000080;
  transition: all 0.5s ease-in-out;
  -webkit-transition: all 0.5s ease-in-out;
}

.book .book-cover {
  background-size: contain;
}

.effect {
  width: 20px;
  height: 100%;
  margin-left: 10px;
  border-left: 2px solid #00000010;
  background-image: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.2) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  transition: all 0.5s ease;
}

.light {
  width: 90%;
  height: 100%;
  position: absolute;
  border-radius: 3px;
  background-image: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.2) 100%
  );
  top: 0;
  right: 0;
  opacity: 0.5;
  transition: all 0.5s ease;
  -webkit-transition: all 0.5s ease;
}

.book:hover {
  cursor: pointer;
}

.book:hover .book-cover {
  transform: perspective(2000px) rotateY(-30deg);
  -webkit-transform: perspective(2000px) rotateY(-30deg);
  transform-style: preserve-3d;
  -webkit-transform-style: preserve-3d;
  box-shadow: inset 4px 1px 3px #ffffff60, inset 0 -1px 2px #00000080,
    10px 0px 10px -5px #00000030;
}

.book:hover .effect {
  width: 40px;
}

.book:hover .light {
  opacity: 1;
  width: 70%;
}

.book-inside {
  width: calc(100% - 2px);
  height: 96%;
  position: relative;
  top: 2%;
  border: 1px solid grey;
  border-radius: 3px;
  background: white;
  box-shadow: 10px 40px 40px -10px #00000030, inset -2px 0 0 grey,
    inset -3px 0 0 #dbdbdb, inset -4px 0 0 white, inset -5px 0 0 #dbdbdb,
    inset -6px 0 0 white, inset -7px 0 0 #dbdbdb, inset -8px 0 0 white,
    inset -9px 0 0 #dbdbdb;
}

.title {
  font-size: 22px;
  width: 100%;
  color: #333;
  text-align: center;
  position: absolute;
  top: -30px;
  height: 1px;
  display: flex;
  align-items: flex-end;
  opacity: 0.5;
  transition: all 1s ease-in-out;
  -webkit-transition: all 1s ease-in-out;
}

.title p {
  width: 100%;
  margin: 0;
  line-height: 1.3;
}

.btn {
  position: relative;
  background: #aaa;
  color: #fff;
  font-weight: bold;
  padding: 15px 30px;
  font-size: 16px;
  letter-spacing: 1px;
  border-radius: 50px;
  bottom: -50px;
  display: inline-block;
  opacity: 0;
  transition: all 1s ease-in-out;
  -webkit-transition: all 1s ease-in-out;
}

.book:hover .btn,
.book:hover .title {
  opacity: 1;
}
</style>
