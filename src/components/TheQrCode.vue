<template>
  <img
    :src="`https://api.qrserver.com/v1/create-qr-code/?data=${encodedUrl}&size=100x100`"
    alt="QRコード"
  />
</template>
<script>
//src="https://api.qrserver.com/v1/create-qr-code/?data=https%3A%2F%2Fwww.google.com%2Fsearch%3Fq%3Dgoogle%26oq%3Dgoogle%2B%26aqs%3Dchrome.0.69i59l3j69i60l4j69i65.1625j0j7%26sourceid%3Dchrome%26ie%3DUTF-8%0D%0A&size=100x100"
// :src="`https://api.qrserver.com/v1/create-qr-code/?data=${restrantId};${seatNumber}&size=100x100`"

export default {
  props: {
    encodedUrl: {
      type: String,
      required: true
    }
  }
}
</script>