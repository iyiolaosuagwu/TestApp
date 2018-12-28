<template>
  <div class>
    <Nav/>

    <div class="container">
      <div class="col-lg-9 mx-auto">
        <div class="container-pad">
          <h3 class>Test your fit with work and be the wiser</h3>
          <p
            class="pt-2 text-left"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime beatae itaque nihil totam magnam explicabo blanditiis esse. Sed voluptate magnam reprehenderit eum odit ratione corrupti perspiciatis aperiam? Voluptates, a officiis?</p>
          <p
            class="pt-2 text-left"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime beatae itaque nihil totam magnam explicabo blanditiis esse. Sed voluptate magnam reprehenderit eum odit ratione corrupti perspiciatis aperiam? Voluptates, a officiis?</p>
          <p
            class="pt-2 text-left"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime beatae itaque nihil totam magnam explicabo blanditiis esse. Sed voluptate magnam reprehenderit eum odit ratione corrupti perspiciatis aperiam? Voluptates, a officiis?</p>
          <p
            class="pt-2 text-left"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime beatae itaque nihil totam magnam explicabo blanditiis esse. Sed voluptate magnam reprehenderit eum odit ratione corrupti perspiciatis aperiam? Voluptates, a officiis?</p>
        </div>

        <a href="/questions" class="btn btn-danger">Start</a>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "./nav";

export default {
  name: "index",
  components: {
    Nav
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container-pad {
  padding-top: 70px;
}
</style>
