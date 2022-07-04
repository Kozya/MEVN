<template>
  <div class="cart-container container">
    <div class="form-wrapper">
      <div class="client-form">
        <label for="name">Name</label>
        <input name="name" type="text" v-model="clientData.name" />
        <label for="mail">Email</label>
        <input name="mail" type="text" v-model="clientData.email" />
        <label for="phone">Phone</label>
        <input name="phone" type="number" v-model="clientData.phone" />
        <label for="adders">Address</label>
        <input name="adders" type="text" v-model="clientData.address" />
        <div v-if="validationError" class="validation-error">
          Сomplete all fields
        </div>
      </div>
      <div class="orders-container">
        <div v-if="!orders.length">Cart is empty</div>
        <div class="order" :key="order.id" v-for="(order, index) in orders">
          <div class="order-img-container">
            <img :src="order.img" alt="photo" />
          </div>
          <div class="order-price-container">
            <p>{{ order.name }}</p>
            <p>Price:{{ order.price }}</p>
            <input
              class="product-count"
              type="number"
              min="0"
              @change="cangeProductCount(order, index)"
              v-model="order.amount"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="submit-container-btn">
      <div>Total price: {{ this.$store.state.totalPrice }}</div>
      <div class="submit-form-btn" @click="validateOrder()">Submit</div>
    </div>
  </div>
</template>
<style>
.order-price-container input {
  width: 80%;
  height: 20px;
  font-size: 16px;
}
.validation-error {
  color: red;
}
.order {
  padding: 10px;
  justify-content: center;
  border: 1px solid #2c3e50;
  margin-bottom: 20px;
}
.submit-container-btn {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 20px;
}
.submit-form-btn {
  height: 30px;
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #2c3e50;
  border-radius: 5px;
  margin-left: 20px;
  cursor: pointer;
}
.submit-form-btn:hover {
  background-color: rgb(230, 230, 230);
}
.form-wrapper {
  display: flex;
  column-gap: 20px;
}

.client-form input {
  height: 40px;
  border-radius: 5px;
  margin-bottom: 20px;
  width: 80%;
}
.client-form {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 1px solid #2c3e50;
  border-radius: 5px;
  padding: 20px;
}
.orders-container {
  width: 50%;
  border: 1px solid #2c3e50;
  border-radius: 5px;
  padding: 20px;
}
.order {
  display: flex;
  justify-content: space-between;
  gap: 10px;
}
.order-img-container {
  width: 50%;
}
.order-img-container img {
  width: 100%;
  height: 100%;
}
.cart-containe {
  flex-direction: column;
}
.cart-container {
  flex-direction: column;
}
@media (max-width: 550px) {
  .form-wrapper {
    flex-direction: column-reverse;
    row-gap: 20px;
  }
  .client-form{
    width: 87%;
  }
  .orders-container{
    width: 87%;
  }
}
</style>
<script>
import axios from "axios";
export default {
  name: "ShoppingCart",
  data() {
    return {
      ordersList: this.$store.state.orders,
      clientData: {
        name: "",
        email: "",
        phone: "",
        address: "",
      },
      costCollection: [],
      validationError: false,
      order: {},
    };
  },
  computed: {
    orders() {
      return this.$store.state.orders;
    },
  },
  methods: {
    cangeProductCount(order, index) {
      let cost = order.price * order.amount;
      this.costCollection[index] = cost;
      this.getTotalCost(this.costCollection);
    },
    getTotalCost(collection) {
      let sum = 0;
      collection.forEach((el) => {
        sum = sum + el;
      });
      this.$store.commit("setTotalPrice", sum);
    },
    validateOrder() {
      let errors = [];
      for (const key in this.clientData) {
        if (this.clientData[key] === "") {
          errors.push(this.clientData[key]);
        }
      }
      if (errors.length) {
        this.validationError = true;
      } else {
        this.validationError = false;
        this.sendUserOrder();
      }
    },
    sendUserOrder() {
      axios
        .post("api/orders/confirm", {
          clientData: this.clientData,
          totalPrice: this.$store.state.totalPrice,
          order: this.ordersList,
        })
        .then(function (response) {
          document.location = "/";
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
  mounted() {},
};
</script>
