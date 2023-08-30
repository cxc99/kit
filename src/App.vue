<template>
  <div>124</div>
  <button @click="onButton">点击</button>
</template>

<script setup lang="ts">
import { assistUtils, dispathUrl, toolKit } from "@/utils";
// import { assistUtils, dispathUrl } from "xc-utlis/xc-utlis";

// console.log(assistUtils);

function cs() {
  console.log(1);
}

function onButton() {
  const debounce = toolKit.debounce(cs, 2000);
  debounce();
}
</script>

<style lang="scss" scoped></style>
