<template>
  <nav>
    <router-link to="/">Shop</router-link> |
    <router-link to="/cart">Shoping cart</router-link>
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
.container {
  display: flex;
  column-gap: 20px;
  width: 1100px;
  margin: 0 auto;
}
@media (max-width: 1099px) {
  .container {
    width: 830px;
  }
}
@media (max-width: 850px) {
  .container {
    width: 550px;
  }
  .product-container {
    flex-wrap: wrap;
  }
}
@media (max-width: 550px) {
  .container {
    width: 100%;
  }
  .product-card{
    width: 100%;  
  }
}
</style>
