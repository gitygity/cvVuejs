<template>
  <header class="nav-bar">
    <nav>
      <div class="nav-container">
        <span class="brand"> CV</span>
        <ul class="navbar-items">
          <li><a href="#about">ABOUT ME</a></li>
          <li><a href="#skills">SKILLS</a></li>
          <li><a href="#portfolio">PORTFOLIO</a></li>
          <li><a href="#experience">EXPERIENCE</a></li>
          <li><a href="#education">EDUCATION</a></li>
          <li><a href="#references">REFERENCES</a></li>
          <li><a href="#contact">CONTACT</a></li>
        </ul>
        <a class="more-menu" href="#" title="Menu"><i class="fa fa-bars"></i></a>
      </div>
    </nav>
  </header>
</template>
<script lang="ts" setup></script>
<style scoped lang="css">
.navbar-items {
  list-style-type: none;
  float: right;
}
.nav-container {
  text-decoration: none;
  color: white;
  font-size: 0.9rem;
  padding: 0.5rem 1rem;
  margin: 0rem 0.2rem;
  border-radius: 0.2rem;
  /* display: block; */
  text-align: start;
}
.nav-container::after {
  display: table;
  content: '';
  clear: both;
}

.navbar-items > li {
  float: left;
}

.navbar-items > li > a {
  text-decoration: none;
  color: white;
  font-size: 0.9rem;
  padding: 0.5rem 1rem;
  margin: 0rem 0.2rem;
  border-radius: 0.2rem;
}

.navbar-items > li > a:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.nav-bar {
  height: 50px;
  position: absolute;
  z-index: 99;
  padding: 20px;
  width: 100%;
}
.navbar-items {
  display: none;
}
/* Extra big screen devices (1200px and above) */
@media only screen and (min-width: 1200px) {
  .more-menu {
    display: none;
  }
  .navbar-items {
    display: inline;
  }
}
</style>
