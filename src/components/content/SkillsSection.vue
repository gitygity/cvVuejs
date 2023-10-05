<template>
  <section id="skills" class="content">
    <header class="center-title">
      <h2 class="title">Professional Skills</h2>
      <p class="section-subtitle">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus laudantium veniam
        atque est quod.
      </p>
    </header>
    <div class="card">
      <section>
        <div class="skills-container">
          <div class="progress-container">
            <span class="progress-title"><abbr>HTML</abbr></span>
            <span class="progress-percent">80%</span>
            <div class="progress-gutter">
              <div style="width: 80%" class="progress-bar"></div>
            </div>
          </div>
          <div class="progress-container">
            <span class="progress-title"><abbr>CSS</abbr></span>
            <span class="progress-percent">50%</span>
            <div class="progress-gutter">
              <div style="width: 50%" class="progress-bar"></div>
            </div>
          </div>
          <div class="progress-container">
            <span class="progress-title">TYPESCRIPT</span>
            <span class="progress-percent">30%</span>
            <div class="progress-gutter">
              <div style="width: 30%" class="progress-bar"></div>
            </div>
          </div>
          <div class="progress-container">
            <span class="progress-title">REACTJS</span>
            <span class="progress-percent">10%</span>
            <div class="progress-gutter">
              <div style="width: 10%" class="progress-bar"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </section>
</template>
<script setup lang="ts"></script>

<style scoped lang="css">
.progress-gutter {
  position: relative;
  height: 0.3rem;
  background-color: rgba(55, 140, 63, 0.4);
}

.progress-bar {
  z-index: 999;
  height: 0.3rem;
  position: absolute;
  left: 0;
  bottom: 0;
  background-color: #378c3f;
  width: 20px;
}

.progress-title {
  color: #378c3f;
  font-weight: bold;
  padding: 1rem 0rem;
  display: inline-block;
}

.progress-percent {
  color: #378c3f;
  font-weight: bold;
  padding: 1rem 0rem;
  display: inline-block;
  /* float: right; */
}
.skills-container::after {
  width: 100%;
  content: '';
  display: table;
  clear: both;
}
.progress-container {
  width: 100%;
  padding: 1rem 0.8rem;
  float: left;
}
/* Small screen devices (600px and above) */
@media only screen and (min-width: 600px) {
  .progress-container {
    width: 50%;
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
}

/* Extra big screen devices (1200px and above) */
@media only screen and (min-width: 1200px) {
  .content {
    width: 50vw;
  }
}

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
