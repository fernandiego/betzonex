<template>
  <div class="sidebar">
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">Home 2</a></li>
    </ul>
  </div>
</template>

<style scoped>
.sidebar {
  width: 200px;
  background-color: #333;
  color: white;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 50px; /* adjust as needed */
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

li {
  padding: 10px 20px;
}

a {
  color: white;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
