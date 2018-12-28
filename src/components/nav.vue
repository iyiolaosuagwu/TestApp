<template>
  <!-- <h1>buhuhuh</h1> -->
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark primary-color">
      <div class="container">
        <a class="navbar-brand" href="/">Test</a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <!-- <a class="nav-link" href="#">
                Home
                <span class="sr-only">(current)</span>
              </a> -->
            </li>
            <li class="nav-item">
              <!-- <a class="nav-link" href="/questions">Questions</a> -->
            </li>
            <li class="nav-item">
              <!-- <a class="nav-link" href="#">Sucess</a> -->
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>


<script>
export default {
  name: "nav",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<style scoped>
</style>
