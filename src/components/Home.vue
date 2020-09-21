<template>
  <div class="home">
    <h2>お店の名前OO席</h2>

    <h1>いらっしゃいませ</h1>

    <p>何名様ですか？</p>

    <div class="customer_num_container">
      <button class="customer_minus-button" @click="minus">−</button>
      <div class="customer_num">{{ customer_num }}</div>
      <button class="customer_plus-button" @click="plus">＋</button>
    </div>

    <p>お車でお越しですか？</p>
    <input type="radio" value="car" id="car" class="car" v-model="transportation">
    <label for="car">はい</label>
    <input type="radio" value="etc" id="etc" class="etc" v-model="transportation">
    <label for="etc">いいえ</label>

    <button class="to_menu">メニューに進む</button>

  </div>
</template>

<script>
export default {
  name: 'Home',
  data: function() {
   return{
     customer_num: 0,
     transportation: ""
   }
  },
  methods: {
    minus() {
      if(this.customer_num < 1) {
        return
      }
      this.customer_num -= 1
    },
    plus() {
      this.customer_num += 1
    }
  }
}
</script>

<style scoped>
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
}
.customer_num {
  margin-left: 30px;
}
.customer_plus-button {
  margin-left: 30px;
  width: 40px;
}
.etc {
  margin-left: 30px;
}
.to_menu {
  font-size: 25px;
  margin-top: 30px;
  display: block;
}
</style>
