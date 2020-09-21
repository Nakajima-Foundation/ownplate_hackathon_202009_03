<template>
  <div class="accounting">
    <h2>確認</h2>
    <table>
      <tr>
        <th class="cuisine_name">メニュー</th>
        <th class="cuisine_name">注文数</th>
        <th class="cuisine_price">金額</th>
      </tr>
      <tr class="items" v-for="item in items" :key="item.name">
        <td class="cuisine_name">{{ item.name }}</td>
        <td class="cuisine_num">{{ item.num }}</td>
        <td class="cuisine_price">¥{{ item.price }}</td>
      </tr>
      <tr class="sum_price">
        <td></td>
        <td>
          <b>合計</b>
        </td>
        <td>
          <b>¥{{ sumPrice() }}</b>
        </td>
      </tr>
    </table>

    <div class="account_proceed">
      <router-link class="to_menu" to="/menu" tag="button">追加注文</router-link>
      <button class="call_staff" @click="runAccount">お会計する</button>
    </div>
  </div>
</template>

<script>
import { db } from "@/plugins/firebase";

export default {
  name: "account",
  data: function () {
    return {
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
  },
};
</script>

<style>
table {
  width: calc(100% - 60px);
  text-align: left;
}
.accounting {
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
  font-size: 18px;
}
.account_proceed {
  margin-top: 20px;
}
.call_staff {
  margin-left: 20px;
}
</style>