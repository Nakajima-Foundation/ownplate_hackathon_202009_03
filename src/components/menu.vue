<template>
  <div class="container">
    <v-dialog v-model="showDialog" max-width="500" height="300px">
      <v-card>
        <v-toolbar dark>{{ selectedItem.name }}</v-toolbar>
        <v-row no-gutters class="align-baseline">
          <v-col offset="2" cols="2">
            <v-btn @click="changeCountNum(-1)">-</v-btn>
          </v-col>
          <v-col color="primary" offset="1" cols="2">
            <v-text-field
              label="個数"
              v-model="selectedItem.num"
              background-color="white"
              :rules="[v => Number(v)>=0 || '個数は0以上で指定ください']"
            />
          </v-col>
          <v-col offset="1" cols="2">
            <v-btn @click="changeCountNum(1)">+</v-btn>
          </v-col>
        </v-row>
        <v-flex offset-xs1 xs10>
          <v-text-field class="mx-8" label="金額" :value="itemTotal" background-color="white" />
        </v-flex>
        <v-flex offset-xs9 xs3 class="pb-4">
          <v-btn @click="showDialog=false">閉じる</v-btn>
        </v-flex>
      </v-card>
    </v-dialog>
    <order-header
      @click="link_order_accept()"
      :btn-string="btnString"
    />
    <v-container v-for="(menu, key) in menus" :key="key">
      <v-divider />
      <v-row>
        <v-col cols="6">
          <v-img :src="menu.itemInfo.image" style="width: 60%" contain class="grey darken-4" />
        </v-col>
        <v-col cols="6">
          <span class="name font-weight-bold">{{menu.itemInfo.name}}</span>
          <span class="price font-weight-bold">{{menu.price.price}}円</span>
          <p>{{menu.itemInfo.description}}</p>
          <v-btn color="primary" @click="onOpenDialog(key)">追加</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<style scoped>
.top {
  display: flex;
  justify-content: space-between;
}
.btn {
  float: right;
}
</style>
<script>
import OrderHeader from "./OrderHeader"
// https://omochikaeri.com/api/1.0/restaurants/5WmWRzIbF7ilJcigW7Vx/menus
// https://omochikaeri.com/api/1.0/restaurants/{restaurant_id}/menus

export default {
  components: {
    OrderHeader
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
      return selectItem.num * selectItem.price || 0
    },
    btnString () {
      const totalNums = this.ls_data.map(x => x.num).reduce((acc, cur) => acc + cur, 0);
      if(totalNums) return "注文画面へ進む " + "(" + totalNums + ")";
      else return "注文画面へ進む";
    }
  },
  methods: {
    onOpenDialog(index) {
      this.selectedItem = this.ls_data[index]
      this.showDialog=true
    },
    changeCountNum(diff) {
      this.selectedItem.num += diff
    },
    link_order_accept: function(){
      this.setItemLocalStorage()
      this.$router.push({ name: 'orderAccept', query: { restaurant_id: this.$route.query.restaurant_id }})
    },
    setItemLocalStorage() {
      localStorage.setItem("items", JSON.stringify(this.ls_data));
    }
  },
  mounted: function(){
    const restaurant_id = this.$route.query.restaurant_id;
    const url = `https://omochikaeri.com/api/1.0/restaurants/${restaurant_id}/menus`;
    fetch(url, {
      mode: 'cors'
    }).then(response => response.json())
      .then(data => {
        console.log(data);
        this.menus = data.payload.menus;
        this.ls_data = this.menus.map(x => ({name: x.itemInfo.name, num: 0, price: x.price.price}));
      });
  }
}
</script>