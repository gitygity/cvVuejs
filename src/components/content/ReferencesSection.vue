<template>
  <section id="references" class="content">
    <header class="center-title">
      <h2 class="title">References</h2>
      <p class="section-subtitle">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus laudantium veniam
        atque est quod.
      </p>
    </header>
    <div class="card">
      <div class="refere-container">
        <div class="info-refer">
          <img class="refer-thumbnail" src="../../assets/images/p1.png" alt="person1" />
          <div class="refer-name">
            <h4>John Ddd</h4>
            <span>FrontEnd Developer</span>
          </div>
        </div>
        <div class="refer-qoute">
          <i class="fas fa-2x fa-quote-left"></i>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus eos quasi tempora
            deleniti sunt, quo eius iste, inventore quisquam similique facilis voluptatibus ut
            quidem consequuntur adipisci odio. Repudiandae, nulla aut.
          </p>
        </div>
      </div>
      <div class="refere-container">
        <div class="info-refer">
          <img class="refer-thumbnail" src="../../assets/images/p2.png" alt="person1" />
          <div class="refer-name">
            <h4>John Ddd</h4>
            <span>FrontEnd Developer</span>
          </div>
        </div>
        <div class="refer-qoute">
          <i class="fas fa-2x fa-quote-left"></i>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus eos quasi tempora
            deleniti sunt, quo eius iste, inventore quisquam similique facilis voluptatibus ut
            quidem consequuntur adipisci odio. Repudiandae, nulla aut.
          </p>
        </div>
      </div>
      <div class="refere-container">
        <div class="info-refer">
          <img class="refer-thumbnail" src="../../assets/images/p3.png" alt="person1" />
          <div class="refer-name">
            <h4>John Ddd</h4>
            <span>FrontEnd Developer</span>
          </div>
        </div>
        <div class="refer-qoute">
          <i class="fas fa-2x fa-quote-left"></i>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus eos quasi tempora
            deleniti sunt, quo eius iste, inventore quisquam similique facilis voluptatibus ut
            quidem consequuntur adipisci odio. Repudiandae, nulla aut.
          </p>
        </div>
      </div>
      <div class="refere-container">
        <div class="info-refer">
          <img class="refer-thumbnail" src="../../assets/images/p4.png" alt="person1" />
          <div class="refer-name">
            <h4>John Ddd</h4>
            <span>FrontEnd Developer</span>
          </div>
        </div>
        <div class="refer-qoute">
          <i class="fas fa-2x fa-quote-left"></i>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus eos quasi tempora
            deleniti sunt, quo eius iste, inventore quisquam similique facilis voluptatibus ut
            quidem consequuntur adipisci odio. Repudiandae, nulla aut.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts"></script>

<style scoped lang="css">
.refer-thumbnail {
  width: 8rem;
  height: 8rem;
  border-radius: 10px;
  object-fit: cover;
  margin: 1rem 0rem;
}

.refere-container {
  display: flex;
  flex-direction: column;
}

.info-refer span {
  line-height: 1.5rem;
}

.refer-name {
  display: flex;
  flex-direction: column;
  margin-left: 0.6rem;
}

.refer-qoute {
  display: flex;
  flex-direction: row;
}

.refere-container i {
  color: #bedfc1;
  font-size: xx-large;
  margin-right: 1rem;
}

.info-refer {
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;
}
/* Small screen devices (600px and above) */
@media only screen and (min-width: 600px) {
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
  .refere-container {
    display: flex;
    flex-direction: row;
    margin: 2rem 2rem;
  }

  .info-refer {
    align-items: flex-start;
    flex-direction: column;
  }

  .refer-qoute {
    margin-left: 1rem;
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
