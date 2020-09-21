<template>
  <v-row class="order-header">
    <v-col>
      <h1>メニュー</h1>
    </v-col>
    <v-spacer></v-spacer>
    <v-col>
      <v-btn rounded large color="error" @click="$emit('click')" class="btn">{{ btnString }}</v-btn>
    </v-col>
  </v-row>
</template>
<style scoped>
.order-header{
    z-index:98;
    background-color: #fff;
    position: sticky;
    top: 0;
}
</style>
<script>
export default {
  props: {
    btnString: {
      type: String,
      required: true
    }
  }
}
</script>