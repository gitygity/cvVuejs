<template>
  <div class="banner-container">
    <section id="banner">
      <div class="head-content">
        <a class="img-container" href="#"><img src="../../assets/images/p2.png" alt="Image" /></a>
        <h1 class="user-name">Gity Ghasemi</h1>
        <h4 class="specialty">FrontEnd Developer</h4>
        <div>
          <button class="btn-header"><a>Hire Me</a></button>
          <button class="btn-header"><a>Download CV</a></button>
        </div>
      </div>
    </section>
    <section class="social-container">
      <div class="social-media">
        <ul>
          <li>
            <a href="#"><i class="social-icon fa-brands fa-twitter"></i> </a>
          </li>
          <li>
            <a href="#"><i class="social-icon fa-brands fa-instagram"></i></a>
          </li>
          <li>
            <a href="#"><i class="social-icon fa-brands fa-linkedin"></i></a>
          </li>
          <li>
            <a href="#"><i class="social-icon fa-brands fa-github"></i></a>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>
<script lang="ts" setup></script>
<style scoped lang="css">
img {
  max-width: 100%;
  vertical-align: middle;
  object-fit: cover;
}

.brand {
  color: white;
  font-weight: bold;
  font-size: 1rem;
  display: inline-block;
  padding: 0.5rem;
}

.head-content {
  color: white;
  padding-top: 6rem;
}

.head-content img {
  position: relative;
  border-radius: 50%;
  height: 180px;
  width: 180px;
  border: 15px solid transparent;
  z-index: 9999;
  transition: all 0.3s ease-out;
}

.more-menu {
  float: right;
  color: white !important;
  padding: 0.5rem;
}

.more-menu:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.banner-container {
  position: relative;
}

#banner {
  background-image: linear-gradient(0deg, rgba(44, 44, 44, 0.644), rgba(4, 52, 9, 0.6)),
    url(../../assets/images/light-bl.svg), url(../../assets/images/light-br.svg),
    url(../../assets/images/overlay.png), url(../../assets/images/header2.jpg);
  background-position:
    top,
    left bottom,
    right bottom,
    left top,
    left bottom;
  background-repeat: repeat, no-repeat, no-repeat, repeat, no-repeat;
  background-size: auto, 20rem, 20rem, auto, cover;
  text-align: center;
}

.img-container {
  position: relative;
}

.img-container::before {
  content: '';
  border: 15px solid rgba(55, 140, 63, 0.6);
  border-radius: 50%;
  height: 180px;
  width: 180px;
  position: absolute;
  left: 0;
  bottom: -80px;
  animation: pulse-green 1.6s ease-out;
  animation-iteration-count: 1;
  animation-iteration-count: infinite;
  opacity: 0;
  z-index: 99;
}

@keyframes pulse-green {
  0% {
    transform: scale(0.6, 0.6);
    opacity: 0;
  }

  50% {
    opacity: 1;
  }

  100% {
    transform: scale(1, 1);
    opacity: 0;
  }
}

.user-name {
  padding: 1rem 0rem 0.5rem;
  font-size: xx-large;
}

.specialty {
  padding: 0rem 0rem 0.5rem;
}

.btn-header {
  padding: 0.8rem 1rem;
  width: 10rem;
  border-radius: 0.3rem;
  font-weight: 400;
  outline: none;
  color: white;
  background-color: #378c3f;
  border: none;
  cursor: pointer;
  margin: 3.5rem 0.1rem;
}

.social-icon {
  color: white;
  padding: 1rem;
  background-color: rgb(134, 132, 132);
  border-radius: 50%;
  font-size: x-large;
  font-weight: bold;
  margin: 0rem 0.5rem;
}

.social-icon:hover {
  color: white;
  background-color: #81a384;
}

.social-media>ul>li {
  float: left;
}

.social-container {
  margin-left: auto;
  margin-right: auto;
  max-width: 720px;
  /* position: absolute; */
  /* bottom:0; */
  /* left:calc(50%) ; */
  text-align: center;
}

.social-media {
  display: inline-block;
  margin-top: -30px;
}</style>
