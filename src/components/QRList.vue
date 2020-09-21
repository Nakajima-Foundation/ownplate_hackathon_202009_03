<template>
  <v-row>
    <v-col
      v-for="(url, index) in links"
      class="ma-4"
      :key="`qrcode-${index}`"
    >
      <p v-if="index<42" style="text-align:center;">{{ index+1 }}</p>
      <p v-else style="text-align:center;">席番号無し</p>
      <vue-qrcode
        :value="url"
        :option="{width: '20%'}"
      />
    </v-col>
  </v-row>
</template>
<style scoped>
</style>
<script>
// import axios from 'axios'
import VueQrcode from "@chenfengyuan/vue-qrcode";
export default {
  components: {
    VueQrcode
  },
  data() {
    return {
      links: []
    }
  },
  created() {
    const origin = window.location.origin
    const restaurantId = this.$route.query.restaurantId
    this.links = this.getLinks(origin, restaurantId)
  },
  methods: {
    getLinks(origin, restaurantId) {
      const maxIssueNumber = 49
      const links = [...Array(maxIssueNumber)].map((_, i) => {
        const seatid = i < 42 ? i+1: 9999
        const link = encodeURI(`${origin}/?restaurant-id=${restaurantId}&seat-id=${seatid}`)
        return link
      })
      return links
    }
  }
}
</script>