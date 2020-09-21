<template>
  <div id="app" class="container">
    <v-dialog
      v-model="showDialog"
      max-width="500"
      height="300px"
    >
      <v-card>
        <v-toolbar dark>
          {{ selectedItem.name }}
        </v-toolbar>
        <v-row no-gutters class="align-baseline">
          <v-col offset="2" cols="2">
            <v-btn @click="changeCourtNum(false)">-</v-btn>
          </v-col>
          <v-col class="ma-2" offset="3" cols="2">
            <v-text-field
              label="個数"
              v-model="selectedItem.num"
              background-color="white"
              :rules="[v => Number(v)>=0 || '個数は0以上で指定ください']"
            />
          </v-col>
          <v-col offset="2" cols="2">
            <v-btn @click="changeCourtNum(true)">+</v-btn>
          </v-col>
        </v-row>
        <v-text-field
          class="ma-4"
          label="金額???内税????"
          :value="itemTotal"
          background-color="white"
          />
      </v-card>
    </v-dialog>
    <h1>Menu List</h1>
      <v-row v-for="(menu, key) in menus" :key="key">
      <v-col>
        <h1>Menu List</h1>
      </v-col>
      <v-spacer></v-spacer>
      <v-col>
        <v-btn rounded large color="primary" @click="link_order_accept" class="btn">注文画面へ進む</v-btn>
      </v-col>
    </v-row>
     <v-row v-for="(menu, key) in menus" :key="key">
        <v-col cols="6">
          <v-img
            :src="menu.itemInfo.image"
            style="width: 20%"
            contain
            class="grey darken-4"
            />
        </v-col>
        <v-col cols="6">
          <span class="name">{{menu.itemInfo.name}}</span>
          <span class="price">{{menu.price.price}}円</span>
          <p>{{menu.itemInfo.description}}</p>
          <v-btn
            color="primary"
            @click="onOpenDialog(key)"
          >
            追加
          </v-btn>
        </v-col>
      </v-row>
  </div>
</template>
<style scoped>
.top{
  display: flex;
  justify-content: space-between;
}
.btn{
  float: right;
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
      ls_data: [],
      showDialog: false,
      selectedItem: {}
    }
  },
  computed: {
    itemTotal() {
      const selectItem = this.selectedItem
      return selectItem.num * selectItem.price
    },
    totalNums: () => {
      return this.ls_data.map(x => x.num).reduce((acc, cur) => acc + cur);
    }
  },
  methods: {
    onOpenDialog(index) {
      this.selectedItem = this.ls_data[index]
      this.showDialog=true
    },
    changeCourtNum(incre) {
      if (incre) {
        this.selectedItem.num ++
      } else {
        this.selectedItem.num --
      }
    },
    link_order_accept: function(){
      this.$router.push({ name: 'orderAccept', query: { restaurantId: this.$route.query.restaurantId }})
    }
  },
  mounted: function(){
    const restaurant_id = this.$route.query.restaurantId;
    const url = `https://omochikaeri.com/api/1.0/restaurants/${restaurant_id}/menus`;
    fetch(url, {
      mode: 'cors'
    }).then(response => response.json())
      .then(data => {
        this.menus = data.payload.menus;
        this.ls_data = this.menus.map(x => ({name: x.itemInfo.name, num: 0, price: x.price.price}));
        localStorage.setItem("items", JSON.stringify(this.ls_data));
      });
  }
}
</script>