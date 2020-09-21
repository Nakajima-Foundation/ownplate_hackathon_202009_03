<template>
  <div>
    <div
      v-for="(url, index) in links"
      :key="`qrcode-${index}`"
    >
      <qr-code
        :encodedUrl="url"
      />
    </div>
  </div>
</template>
<style scoped>
</style>
<script>
// import axios from 'axios'
import QrCode from "@/components/TheQrCode"
export default {
  components: {
    QrCode
  },
  data() {
    return {
      links: []
    }
  },
  created() {
    const origin = window.location.origin
    const restrantId = this.$route.query.restrantid
    this.links = this.getLinks(origin, restrantId)
  },
  methods: {
    getLinks(origin, restrantId) {
      const maxIssueNumber = 50
      const links = [...Array(maxIssueNumber)].map((_, i) => {
        const seatid = i + 1
        const link = encodeURI(`${origin}/menu?restrantid=${restrantId}&seatid=${seatid}`)
        return link

      })
      return links
    }
  }
}
</script>