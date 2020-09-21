<template>
  <v-row>
    <v-col>
      <h1>メニュー</h1>
    </v-col>
    <v-spacer></v-spacer>
    <v-col>
      <v-btn rounded large color="error" @click="$emit('click')" class="btn">{{ btnString }}</v-btn>
    </v-col>
  </v-row>
</template>

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