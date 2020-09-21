<template>
  <div id="app" class="container">
    <v-dialog v-model="showDialog" dark>
      <v-card>
        <v-toolbar dark></v-toolbar>
      </v-card>
    </v-dialog>

    <order-header @click="link_accounting()" btn-string="注文を確定する" />

    <v-div v-for="(menu, key) in menus" :key="key">
      <v-divider />

      <v-row>
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
    </v-div>
  </div>
</template>
<script>
// https://omochikaeri.com/api/1.0/restaurants/5WmWRzIbF7ilJcigW7Vx/menus
// https://omochikaeri.com/api/1.0/restaurants/{restaurant_id}/menus
import OrderHeader from "./OrderHeader"
export default {
  components: {
    OrderHeader
  },
  data() {
    return {
      menus: [],
      numOrder: 0,
      ls_data: [],
      showDialog: false,
    }
  },
  methods: {
    link_accounting: function(){
      this.$router.push({ name: 'account'})
    },
    onOpenDialog(index) {
      console.log({index})
      this.showDialog=true
    }
  },
  mounted: function(){
    const restaurant_id = this.$route.query.restaurantId;
    const url = `https://omochikaeri.com/api/1.0/restaurants/${restaurant_id}/menus`;
    fetch(url, {
      mode: 'cors'
    }).then(response => response.json())
      .then(data => this.menus = data.payload.menus);

    this.ls_data = JSON.parse(localStorage.getItem("items")) || [];
  }
}
</script>