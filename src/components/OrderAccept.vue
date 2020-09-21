<template>
  <div id="app" class="container">
    <v-dialog
      v-model="showDialog"
      dark
    >
      <v-card>
        <v-toolbar dark>
        </v-toolbar>
      </v-card>
    </v-dialog>
    <h1>Menu List</h1>
      <v-row v-for="(menu, key) in menus" :key="key">
        <v-col cols="6">
           <v-img
              :src="menu.itemInfo.image"
              width="60%"
              contain
              class="grey darken-4"
            />
        </v-col>
        <v-col cols="6">
          <span class="name">{{ menu.itemInfo.name }}</span>
          <span class="price">{{ menu.price.price }}円</span>
          <span>{{ menu.itemInfo.description }}</span>
          <v-btn color="primary" click="onOpenDialog(key)">追加</v-btn>
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
      showDialog: false,
      numOrder: 0,
    }
  },
  methods: {
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
  }
}
</script>