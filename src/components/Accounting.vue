<template>
  <div class="accounting">
    <h2 class="title">確認</h2>
    <v-data-table
    class="account_table"
      :hide-default-footer="true"
      mobile-breakpoint="0"
      :disable-sort="true"
      :headers="headers"
      :items="items"
    ></v-data-table>
    <div class="sum_price">合計&emsp;¥{{ sumPrice() }}</div>
    <div class="account_proceed">
      <v-btn class="to_menu" @click="toMenu" color="primary">追加注文</v-btn>
      <v-btn class="call_staff" @click="runAccount" color="error">お会計する</v-btn>
    </div>
  </div>
</template>

<script>
import { db } from "@/plugins/firebase";

export default {
  name: "account",
  data: () => {
    return {
      headers: [
        {
          text: "メニュー",
          align: "start",
          value: "name",
        },
        {
          text: "注文数",
          value: "num",
        },
        {
          text: "金額",
          value: "price",
        },
      ],
      items: [
        {
          name: "麻婆豆腐",
          num: 1,
          price: 800,
        },
        {
          name: "油淋鶏",
          num: 1,
          price: 700,
        },
        {
          name: "炒飯",
          num: 1,
          price: 750,
        },
      ],
    };
  },
  methods: {
    sumPrice() {
      let sum = 0;
      this.items.forEach((item) => {
        sum += item.price;
      });
      return sum;
    },
    runAccount() {
      console.log("runAccount");
      db.collection("account/").add({
        items: [
          {
            name: "麻婆豆腐",
            num: 1,
            price: 800,
          },
          {
            name: "油淋鶏",
            num: 1,
            price: 700,
          },
          {
            name: "炒飯",
            num: 1,
            price: 750,
          },
        ],
        sum_price: this.sumPrice(),
      });
    },
    toMenu() {
      this.$router.push("/menu");
    },
  },
};
</script>

<style>
.title {
  font-weight: normal;
}
.account_table {
    margin-top: 20px;
}
.accounting {
  margin-top: 30px;
  margin-left: 30px;
  margin-right: 30px;
}
.cuisine_num,
.cuisine_price {
  margin-left: 30px;
}
.items {
  margin-top: 30px;
}
.sum_price {
  font-size: 20px;
  text-align: right;
}
.account_proceed {
  margin-top: 20px;
}
.call_staff {
  margin-left: 20px;
}
</style>