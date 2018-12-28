<template>
  <div class>
    <Nav/>
    <div class>
      <div class="succ card">
        <h2 class>Submission</h2>
        <h2 class>Successful</h2>
      </div>
    </div>
  </div>
</template>


<script>
import Nav from "./nav";

export default {
  components: {
    Nav
  }
};
</script>


<style scoped>
.succ {
  color: green;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 50px 100px;
}
</style>
