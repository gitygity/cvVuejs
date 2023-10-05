<template>
<section id="experience" class="content">
<div class="card  ">
  <header class="center-title">
    <h2 class="title">Work Experience</h2>
    <p class="section-subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus laudantium
      veniam atque est quod.</p>
  </header>

  <section class="ac-container">
    <div class="ac-item">
      <div class="year-badge-container"><span class="year-badge">2012 - 2017</span></div>
      <div class="ac-item-detail">
        <input id="ac-1" type="checkbox" checked="false">
        <label class="ac-icon" for="ac-1"></label>
        <article class="ac-content">
          <h1>Exprience1</h1>
          <span>subtitle1</span>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam libero suscipit dignissimos, ullam
            laudantium perferendis commodi repudiandae beatae rem sunt facilis. Harum iusto nemo est quod sequi
            expedita vel cumque!</p>
          <a href="#">more</a>


        </article>
      </div>
    </div>
    <div class="ac-item">
      <div class="year-badge-container"><span class="year-badge">2012 - 2017</span></div>
      <div class="ac-item-detail">
        <input id="ac-2" type="checkbox">
        <label class="ac-icon" for="ac-2"></label>
        <article class="ac-content">
          <h1>Exprience2</h1>
          <span>subtitle2</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dicta illo, numquam amet maxime quas
            consequatur explicabo maiores distinctio sint cupiditate, voluptatem accusantium culpa a sit saepe
            corrupti consequuntur eligendi.</p>
          <a href="#">more</a>


        </article>
      </div>
    </div>

    <div class="ac-item">
      <div class="year-badge-container"><span class="year-badge">2012 - 2017</span></div>
      <div class="ac-item-detail">
        <input id="ac-3" type="checkbox">
        <label class="ac-icon" for="ac-3"></label>
        <article class="ac-content">
          <h1>Exprience3</h1>
          <span>subtitle3</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dicta illo, numquam amet maxime quas
            consequatur explicabo maiores distinctio sint cupiditate, voluptatem accusantium culpa a sit saepe
            corrupti consequuntur eligendi.</p>
          <a href="#">more</a>


        </article>
      </div>
    </div>
    <div class="ac-item">
      <div class="year-badge-container"><span class="year-badge">2012 - 2017</span></div>
      <div class="ac-item-detail">
        <input id="ac-4" type="checkbox">
        <label class="ac-icon" for="ac-4"></label>
        <article class="ac-content">
          <h1>Exprience4</h1>
          <span>subtitle4</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dicta illo, numquam amet maxime quas
            consequatur explicabo maiores distinctio sint cupiditate, voluptatem accusantium culpa a sit saepe
            corrupti consequuntur eligendi.</p>
          <a href="#">more</a>


        </article>
      </div>
    </div>
  </section>
</div>
</section>
</template>
<script setup lang="ts"></script>

<style scoped lang="css">

.year-badge-container {
  flex: 100%;
  text-align: right;
  position: absolute;
  top: -1.5rem;
  right: 0;
  z-index: 99;
}

.year-badge {
  background-color: #3f5341;
  border-radius: 0.3rem;
  padding: 0.1rem 0.5rem;
  color: white;
  font-weight: bold;
  font-size: medium;
  height: max-content;
}

.ac-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 2rem;
  height: 2rem;
  border-radius: 0.3rem;
  background-color: #729475;
  color: white;
  font-weight: bolder;
  font-size: 1rem;
}

.ac-container input:not(:checked) + .ac-icon::after {
  font-family: 'Font Awesome 5 Free';
  content: '\2b';
}

.ac-container input:checked + .ac-icon::after {
  font-family: 'Font Awesome 5 Free';
  content: '\2212';
}

.ac-container .ac-item-detail::before {
  border-left: 0.15rem dashed #898888;
  content: '';
  height: 100%;
  left: 1rem;
  opacity: 0.6;
  position: absolute;
  z-index: -1;
  top: 0;
}

.ac-container input {
  display: none;
}

.ac-container article {
  background: rgba(255, 255, 255, 0.5);
  margin-top: -1px;
  overflow: hidden;
  height: 5.5rem;
  position: relative;
  padding: 1rem;
  border: #c0bfbf solid 1px;
  z-index: 10;
  width: 90%;
  -webkit-transition: height 0.3s ease-in-out;
  -moz-transition: height 0.3s ease-in-out;
  -o-transition: height 0.3s ease-in-out;
  -ms-transition: height 0.3s ease-in-out;
  transition: height 0.3s ease-in-out;
}

.ac-container article p {
  color: #3e3e3e;
  margin-top: 2rem;
  line-height: 1.2rem;
}

.ac-container article h1 {
  margin: 0.5rem 0 0.3rem 0;
}
.ac-item-detail {
  justify-content: flex-end;
  display: flex;
  position: relative;
  justify-content: space-between;
  flex: 100%;
}
.ac-content {
  border-radius: 0.3rem;
  margin: 3rem 0 3rem 0.5rem;
}

.ac-item {
  position: relative;
}

.ac-container {
  max-width: 100%;
  margin: 3rem auto 1rem auto;
  position: relative;
}
.ac-container input:checked ~ article.ac-content {
  height: 20rem;
}
/* Small screen devices (600px and above) */
@media only screen and (min-width: 600px) {
  .ac-container input:checked ~ article.ac-content {
    height: 16rem;
  }
  .card {
    padding: 2rem;
  }
  
}

/* Medium screen devices (768px and above) */
@media only screen and (min-width: 768px) {
  .title {
    font-size: 3rem;
  }

  .card section {
    padding: 1rem 0;
  }

  .ac-item-detail {
    flex: 80%;
  }

  .year-badge-container {
    flex: 20%;
    position: static;
    text-align: left;
  }

  .ac-container input:checked ~ article.ac-content {
    height: 14rem;
  }

  .ac-item {
    display: flex;
    position: static;
  }

  .ac-container {
    position: static;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    margin: 3rem auto 1rem auto;
    position: relative;
  }

}

/* Extra big screen devices (1200px and above) */
@media only screen and (min-width: 1200px) {
  .content {
    width: 50vw;
  }

}

/*//_____________public*/
.card section {
  padding: 1rem 0;
}
.center-title {
  text-align: center;
}
.content {
       width: 90vw;
       margin: 1rem auto 0;
   }

   .card {
  padding: 2rem;
  margin: 3rem 0rem;
  border-radius: 0.2rem;
  box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.2);
}
.title {
  font-weight: 700;
  color: rgb(96, 97, 97);
  font-size: 1.5rem;
  margin: 0 0 2rem;
  position: relative;
  display: inline-block;
  z-index: 1;
  text-align: center;
  margin-top: 2rem;
}

.section-subtitle {
  color: #5e7d5e;
  font-size: large;
  font-weight: 400;
  text-align: center;
}
.title::after {
  content: '';
  position: absolute;
  top: -10px;
  left: -20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(55, 140, 63, 0.4);
  z-index: -1;
  opacity: 0.5;
}

</style>
