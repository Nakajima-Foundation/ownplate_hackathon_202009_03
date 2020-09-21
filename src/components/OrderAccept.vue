<template>
  <div id="app" class="container">
    <h1>Menu List</h1>
      <v-row v-for="(menu, key) in menus" :key="key">
        <v-col cols="6">
           <v-img
              :src="menu.itemInfo.image"
              width="20%"
              contain
              class="grey darken-4"
            />
        </v-col>
        <v-col cols="4">
          <span class="name">{{menu.itemInfo.name}}</span>
          <span class="price">{{menu.price.price}}円</span>
          <p>{{menu.itemInfo.description}}</p>
        </v-col>
        <v-col cols="2">
          <span class="num">{{ls_data[key].num || 0}}</span>
        </v-col>
      </v-row>
  </div>
</template>
<style scoped>
li{
  padding: 30px auto;
  display: flex;
}
li.img{
  width: 360px;
}
li.name{
  font-size: 24px;
}
li.price{
  font-size: 24px;
}
</style>
<script>
// https://omochikaeri.com/api/1.0/restaurants/5WmWRzIbF7ilJcigW7Vx/menus
// https://omochikaeri.com/api/1.0/restaurants/{restaurant_id}/menus

export default {
  components: {
  },
  data() {
    return {
      menus: [],
      ls_data: []
    }
  },
  methods: {
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