<template>
  <div>
    <span>Color mode: </span>
    <select v-model="$colorMode.preference">
      <option value="system">System</option>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
    </select>
  </div>
</template>

<script setup>
const colorMode = useColorMode()
console.log(colorMode.preference)
</script>
