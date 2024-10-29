<template>
  <div class="user-card skeleton">
    <div class="user-cover"></div>
    <div class="user-details">
      <div class="user-name hide-text"></div>
      <div class="user-email hide-text"></div>
    </div>
    <button class="contact-user hide-text">CONTACT</button>
  </div>
</template>
<script setup>
//const $el = document.querySelector(".user-card");

// Loading finished
// setTimeout(() => {
//   $el.classList.remove("skeleton");
//   $el
//     .querySelectorAll(".hide-text")
//     .forEach((el) => el.classList.remove("hide-text"));
// }, 3000);
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap");

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
