<template>
  <div class="flex-1 overflow-y-auto p-4">
    <div class="flex flex-col space-y-2">

      <chatMessageItem :is-mine="true" message="Hello World" />
      <chatMessageItem :is-mine="false" message="Hello World" />

    </div>
  </div>
</template>

<script setup lang="ts">
import chatMessageItem from './chatMessageItem.vue';
</script>
