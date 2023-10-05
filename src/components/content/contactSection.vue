<template>
  <section id="contact" class=" contact-me">
    <div class=" card-contact">
      <header class="contact-header">
        <h2 class="title ">Contact Me</h2>
      </header>
      <div class="form-section">
        <div class="col-contact-container">
          <form>
            <input class="form-control" type="text" placeholder="Name" />
            <input class="form-control" type="text" placeholder="Subject" />
            <input class="form-control" type="text" placeholder="Email" />
            <textarea class="form-control" type="text" rows="4" placeholder="message" />
            <input value="Send" type="submit" />
          </form>
        </div>
        <address class="col-contact-container">
          <h4>Address</h4>
          <div class="info-contact"> Isfahan, IRAN</div>
          <h4>Phone</h4>
          <div class="info-contact">+98 9135344444</div>
          <h4>Email</h4>
          <div class="info-contact">gity.ghasemi@gmail.com</div>
        </address>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="css">
.contact-me {
  position: static;
  min-height: 600px;
}

.form-control {
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #434a54;
  background-color: #f8f9fa;
  background-clip: padding-box;
  border: 2px solid #dee2e6;
  border-radius: 0.25rem;
  margin-bottom: 0.5rem;
  transition:
    border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;
}

.form-control:focus {
  color: #434a54;
  background-color: #fff;
  border-color: #a6d9ac;
  outline: none;
  box-shadow: 0 0 0 0.25rem rgba(159, 238, 176, 0.25);
}
.info-contact {
  padding-bottom: 1rem;
  margin: 0.3rem 0;
}

.contact-header {
  text-align: center;
}

input[type='submit'] {
  padding: 0.8rem 1rem;
  width: 10rem;
  border-radius: 0.3rem;
  font-weight: 400;
  outline: none;
  color: white;
  background-color: #378c3f;
  border: none;
  cursor: pointer;
  margin: 1rem 0.1rem;
}
.card-contact {
  padding: 2rem;
  border-radius: 0.2rem;
  box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.2);
  margin: 1rem auto;
  background-color: white;
  width: 90%;
}

.col-contact-container {
  flex: 100%;
  margin: 1rem 0;
  /* padding: 1rem; */
}

.form-section {
  display: flex;
  flex-direction: column-reverse;
}


img {
  max-width: 100%;
  vertical-align: middle;
  object-fit: cover;
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

  /* Big screen devices (889px and above) */
  @media only screen and (min-width: 889px) {
  .card-contact {
    width: 70%;
  }
}


/* Medium screen devices (768px and above) */
@media only screen and (min-width: 768px) {
  .contact-me {
    background-image: url(../../assets/images/map.png);
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    height: 80vh;
    min-height: 600px;
  }
  .title {
    font-size: 3rem;
  }

  .card-contact {
    margin: auto;
    width: 90%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .col-contact-container {
    flex: 50%;
    padding: 1rem;
  }

}
</style>
