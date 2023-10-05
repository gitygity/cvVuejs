<template >
  <section>
    <footer>
      <div class="footer-social-media">
        <ul>
          <li>
            <a href="#"><i class="footer-social-icon fa-brands fa-twitter"></i> </a>
          </li>
          <li>
            <a href="#"><i class="footer-social-icon fa-brands fa-instagram"></i></a>
          </li>
          <li>
            <a href="#"><i class="footer-social-icon fa-brands fa-linkedin"></i></a>
          </li>
          <li>
            <a href="#"><i class="footer-social-icon fa-brands fa-github"></i></a>
          </li>
        </ul>

        <h2>Gity Ghasemi</h2>
        <div class="copy-right">
          <p>© GityGhasemi. All rights reserved.<br />Design - CV</p>
        </div>
      </div>
    </footer>
  </section>
</template>
<script setup lang="ts"></script>
<style scoped lang="css">
footer{
  height: auto;
  padding: 1rem 0rem;
  background-color: rgb(66, 67, 69);
}
.footer-social-media {
  color: white;
  text-align: center;
  width: 100%;
  margin: 1rem 0rem;
}

.footer-social-media ul > li {
  float: left;
  font-size: x-large;
}

.footer-social-media ul {
  display: inline-block;
}

.footer-social-icon {
  color: white;
  padding: 1rem;
}

.footer-social-icon:hover {
  background-color: rgba(197, 194, 194, 0.5);
}

.copy-right > * {
  display: inline-block;
  text-align: center;
}
</style>
