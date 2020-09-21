<template>
  <div id="app" class="container">
    <v-row>
      <v-col>
        <h1>メニュー</h1>
      </v-col>
      <v-spacer></v-spacer>
      <v-col />
      <v-col>
        <v-btn rounded large color="error" @click="link_accounting" class="btn">注文を確定する</v-btn>
      </v-col>
    </v-row>
    <v-row v-for="(menu, key) in valid(menus)" :key="key">
      <v-col cols="6">
        <v-img :src="menu.itemInfo.image" width="60%" contain class="grey darken-4" />
      </v-col>
      <v-col cols="4">
        <span class="name font-weight-bold">{{menu.itemInfo.name}}</span>
        <span class="price font-weight-bold">{{menu.price.price}}円</span>
        <p>{{menu.itemInfo.description}}</p>
      </v-col>
      <v-col cols="2">
        <span class="num">{{ls_data[key].num || 0}}</span>
      </v-col>
    </v-row>
  </div>
</template>
<script>
// https://omochikaeri.com/api/1.0/restaurants/5WmWRzIbF7ilJcigW7Vx/menus
// https://omochikaeri.com/api/1.0/restaurants/{restaurant_id}/menus

export default {
  data() {
    return {
      menus: [],
      numOrder: 0,
      ls_data: [],
    }
  },
  async created() {
    await Promise.all([this.fetchRemoteData(), this.fetchLocalData()]);
  },
  methods: {
    valid(menus) {
      console.log(menus);
      return menus.filter(menu => {
        return menu.num !== 0
      })
    },
    link_accounting(){
      this.$router.push({ name: 'account', query: { restaurant_id: this.$route.query.restaurant_id }})
    },
    async fetchRemoteData() {
      const restaurant_id = this.$route.query.restaurant_id;
      const url = `https://omochikaeri.com/api/1.0/restaurants/${restaurant_id}/menus`;
      const response = await fetch(url, {mode: 'cors'})
      const menuJson = await response.json()
      this.menus = menuJson.payload.menus
    },
    async fetchLocalData() {
      this.ls_data = await JSON.parse(localStorage.getItem("items")) || [];
    },
  },
}
</script>