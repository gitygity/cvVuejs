<template>
  <section id="about" class="content">
    <div class="card">
      <section>
        <header>
          <h2>About</h2>
        </header>
        <p>Hello! I am<strong> Gity Ghasemi</strong>.</p>
        <p>
          A Frontend developer with 4+ years of experience in developing interactive websites & web
          pages incorporating responsive web design. expertise in web development ( React, Svelte,
          Typescript, JavaScript, etc) & testing (Cypress, Jest, Playwright).
        </p>
      </section>
      <section>
        <h2>Basic Information</h2>
        <ul class="basic-info">
          <li><b>EMAIL</b>gity.ghasemi@gmail.com</li>
          <li><b>PHONE</b>+98 9135344071</li>
          <li><b>LOCATION</b>Iran</li>
          <li><b>LANGUAGE</b>English, persian</li>
        </ul>
      </section>
    </div>
  </section>
</template>
<script setup lang="ts"></script>

<style scoped lang="css">
.basic-info {
  line-height: 2rem;
  margin-left: 2rem;
  margin-top: 1rem;
}

.basic-info b {
  color: #378c3f;
  margin-right: 1rem;
  margin-left: 0.5rem;
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
.card section {
  padding: 1rem 0;
}

/* Small screen devices (600px and above) */
@media only screen and (min-width: 600px) {
  .card {
    padding: 2rem;
  }
}

/* Medium screen devices (768px and above) */
@media only screen and (min-width: 768px) {
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
</style>
