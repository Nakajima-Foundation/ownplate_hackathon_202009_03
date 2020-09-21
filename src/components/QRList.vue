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
        :option="{width: '15%'}"
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
      const maxIssueNumber = 48
      const links = [...Array(maxIssueNumber)].map((_, i) => {
        const seatid = i < 42 ? seatid: 9999
        const link = encodeURI(`${origin}/menu?restaurantid=${restaurantId}&seatid=${seatid}`)
        return link

      })
      return links
    }
  }
}
</script>