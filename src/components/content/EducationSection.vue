<template>
  <section id="education" class="education-section">
    <div class="content">
      <header class="center-title">
        <h2 class="title-education">Education</h2>
        <p class="education-subtitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus laudantium veniam
          atque est quod.
        </p>
      </header>
      <div class="card-education">
        <div class="top-section">
          <p>April 2014 - March 2016</p>
          <h3>Master</h3>
        </div>
        <div class="bottom-section">
          <h3>Information Technology</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus laudantium.Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus laudantium
          </p>
        </div>
      </div>
      <div class="card-education">
        <div class="top-section">
          <p>April 2014 - March 2016</p>
          <h3>Master</h3>
        </div>
        <div class="bottom-section">
          <h3>Information Technology</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus laudantium.Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus laudantium
          </p>
        </div>
      </div>
      <div class="card-education">
        <div class="top-section">
          <p>April 2014 - March 2016</p>
          <h3>Master</h3>
        </div>
        <div class="bottom-section">
          <h3>Information Technology</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus laudantium.Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus laudantium
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="css">
.bottom-section {
  flex: 100%;
  padding: 2rem;
  border-bottom-left-radius: 0.3rem;
  border-bottom-right-radius: 0.3rem;
  color: rgb(96, 97, 97);
  background-color: white;
  line-height: 0.3rem;
}

.top-section {
  flex: 100%;
  padding: 2rem;
  margin: auto;
  width: 100%;
  background-color: #378c3f;
  color: white;
  text-align: center;
  border-top-right-radius: 0.3rem;
  border-top-left-radius: 0.3rem;
}

.card-education {
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.2);
  border-radius: 0.3rem;
  height: 18rem;
}

.top-section p {
  display: inline-block;
}

.education-section {
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
  background-attachment: fixed, fixed, fixed, fixed, fixed;
  padding-bottom: 6rem;
}

.education-subtitle {
  color: #87d587;
  font-size: large;
  font-weight: 400;
  text-align: center;
  padding: 0 2rem;
}
.title-education {
  font-weight: 700;
  color: rgb(228, 236, 228);
  font-size: 45px;
  margin: 3rem 0 2rem;
  position: relative;
  display: inline-block;
  z-index: 1;
}

.title-education::after {
  content: '';
  position: absolute;
  top: -10px;
  left: -20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(246, 255, 247, 0.48);
  z-index: -1;
  opacity: 0.5;
}

.center-title {
  text-align: center;
}
.content {
  width: 90vw;
  margin: 1rem auto 0;
}

/* Big screen devices (889px and above) */
@media only screen and (min-width: 889px) {
  .top-section {
    flex: 40%;
    padding: 2rem;
    height: inherit;
    margin: auto;
    background-color: #378c3f;
    color: white;
    text-align: center;
    border-top-left-radius: 0.3rem;
    border-bottom-left-radius: 0.3rem;
  }

  .top-section p {
    display: inline-block;
  }

  .bottom-section {
    flex: 60%;
    padding: 2rem;
    height: inherit;
    border-top-right-radius: 0.3rem;
    border-bottom-right-radius: 0.3rem;
    color: rgb(96, 97, 97);
    background-color: white;
    line-height: 0.3rem;
  }
  .card-education {
    margin-top: 2rem;
    flex-direction: row;
    height: 9rem;
  }
}

/* Extra big screen devices (1200px and above) */
@media only screen and (min-width: 1200px) {
  .content {
    width: 50vw;
  }
}
</style>
