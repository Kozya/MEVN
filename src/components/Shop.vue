
<template>
  <div class="container">
    <div class="shop-container">
      <p>Shops:</p>
      <ul>
        <li
          :key="shop.id"
          v-for="shop in store.state.shops"
          @click="showProducts(shop)"
          class="shop"
          :class="{ active: activeLink == shop.id }"
        >
          {{ shop.name }}
        </li>
      </ul>
    </div>
    <div class="product-container">
      <div v-if="activeShop === ''">Choose Shop</div>
      <div class="product-card" :key="product.id" v-for="product in activeShop">
        <div class="product-img">
          <img :src="product.img" alt="photo" />
        </div>
        <p>{{ product.name }}</p>
        <div
          :class="{ disabled: product.added }"
          class="product-order-btn"
          @click="addProductToCart(product)"
        >
          <p v-if="product.added">Added</p>
          <p v-else>add to Cart</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.active {
  background-color: #adadad;
}
.disabled {
  pointer-events: none;
  cursor: not-allowed;
}
.shop-container {
  width: 30%;
  display: flex;
  flex-direction: column;
  min-height: 100%;
}
.shop,
.shop-container {
  border: 1px solid #2c3e50;
  border-radius: 5px;
  list-style: none;
  padding: 20px;
}
.shop {
  cursor: pointer;
  margin: 20px 0 20px 0;
}
.shop:hover,
.product-order-btn:hover {
  background-color: rgb(230, 230, 230);
}
.shop.active:hover {
  background-color: #adadad;
}
ul {
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
}
.product-container {
  width: 70%;
  border: 1px solid #2c3e50;
  border-radius: 5px;
  min-height: 100%;
  gap: 20px;
  display: flex;
  align-items: flex-start;
  padding: 20px;
}
.product-order-btn {
  width: 60%;
  height: 30px;
  border: 1px solid #2c3e50;
  border-radius: 5px;
  align-self: flex-end;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 10px 10px 0;
  cursor: pointer;
}
.product-img {
  width: 100%;
  height: 60%;
}
.product-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.product-card {
  width: 45%;
  height: 50%;
  border: 1px solid #2c3e50;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
}
.product-card p {
  margin: 5px;
}
.product-order-btn p {
  font-size: 14px;
}
@media (max-width: 550px) {
  .product-card {
    width: 100%;
  }
  .product-container {
    height: 100%;
  }
  .shop {
    margin: 5px 0 5px 0;
  }
  .shop, .shop-container{
    padding: 10px;
  }
}
</style>


<script>
export default {
  name: "Shop",
  data() {
    return {
      store: this.$store,
      activeShop: "",
      activeLink: "",
    };
  },
  methods: {
    showProducts(shop) {
      this.activeShop = shop.products;
      this.activeLink = shop.id;
    },
    addProductToCart(product) {
      product.added = true;
      this.$store.commit("addOrder", product);
    },
  },
  mounted() {
    this.$store.dispatch("getShops");
  },
  created() {},
};
</script>
