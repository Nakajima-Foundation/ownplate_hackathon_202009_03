<template>
  <div class="home">
    <h1>いらっしゃいませ</h1>
    <h2 v-if="restaurant !== null">{{ restaurant.info.name }}{{ seatId }}席</h2>
    <p>何名様ですか？</p>
    <div class="customer_num_container">
      <v-btn color="success" text class="customer_minus-button" @click="minus">−</v-btn>
      <div class="customer_num">{{ customer_num }}</div>
      <v-btn color="error" text class="customer_plus-button" @click="plus">＋</v-btn>
    </div>
    <p>お車でお越しですか？</p>
    <input type="radio" value="car" id="car" class="car" v-model="transportation" />
    <label for="car">はい</label>
    <input type="radio" value="etc" id="etc" class="etc" v-model="transportation" />
    <label for="etc">いいえ</label>
    <v-btn @click="toMenu" class="to_menu">メニューに進む</v-btn>
  </div>
</template>

<script>
export default {
  name: "Home",
  data: function () {
    return {
      customer_num: 0,
      transportation: "",
      restaurants: null,
      restaurant: null,
      seatId: "",
      restaurant_id: ""
    };
  },
  created: async function () {
    this.restaurant_id = this.$route.query.restaurant_id;
    this.seatId = this.$route.query.seat_id;
    const url = `https://omochikaeri.com/api/1.0/restaurants/`;
    const response = await fetch(url, { mode: "cors" });
    const responseJson = await response.json();
    this.restaurants = responseJson.payload.restaurants;
    this.restaurant = this.restaurants.find(
      (restaurant) => restaurant.id === this.restaurant_id
    );
  },
  methods: {
    toMenu() {
      if (this.customer_num === 0) {
        alert("『何名様ですか？』を入力してください");
        return;
      }
      if (this.transportation === "") {
        alert("『お車でお越しですか？』を入力してください");
        return;
      }
      localStorage.setItem("start_time", Date.now().toString());
      localStorage.setItem("customer_num", this.customer_num);
      localStorage.setItem("transportation", this.transportation);
      this.$router.push(`/menu?restaurant_id=${this.restaurant_id}`);
    },
    minus() {
      if (this.customer_num < 1) {
        return;
      }
      this.customer_num -= 1;
    },
    plus() {
      this.customer_num += 1;
    },
  },
};
</script>

<style scoped>
h1 {
  margin-top: 30px;
  font-weight: normal;
  font-size: 35px;
}
h2 {
  font-weight: normal;
  font-size: 30px;
}
p {
  margin-top: 30px;
}
.home {
  margin-left: 30px;
  margin-right: 30px;
  font-size: 20px;
}
.customer_num_container {
  display: flex;
}
.customer_minus-button {
  width: 40px;
  font-size: 30px !important;
}
.customer_num {
  margin-left: 30px;
}
.customer_plus-button {
  margin-left: 30px;
  width: 40px;
  font-size: 30px !important;
}
.etc {
  margin-left: 30px;
}
.to_menu {
  width: 160px;
  height: 50px;
  font-size: 23px;
  margin-top: 30px;
  display: block;
}
</style>
