<template>
  <div class="accounting">
    <h2>確認</h2>
    <table>
      <tr>
        <th>メニュー</th>
        <th>注文数</th>
        <th>金額</th>
      </tr>
      <tr class="items" v-for="item in items" :key="item.name">
        <td class="cuisine_name">{{ item.name }}</td>
        <td class="cuisine_num">{{ item.num }}</td>
        <td class="cuisine_price">¥{{ item.price }}</td>
      </tr>
    </table>

    <button @click="d">いいえ</button>
    <button>はい</button>
  </div>
</template>

<script>
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
};
</script>

<style>
.accounting {
  margin-left: 30px;
  margin-right: 30px;
}
.cuisine_num,
.cuisine_price {
  margin-left: 20px;
}
</style>