<template>
  <div class="flex-1">
    <div class="flex justify-center">
      <div class="w-lg h-100 p-4">
        <div class="flex flex-col space-y-2">
          <chatMessageItem :is-mine="true" message="Hello World" />
          <chatMessageItem
            :is-mine="false"
            message="Noo"
            gif="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExc3lnbWpwZndycGpuYzJsdjNkeGI0cDA3ZXVsMWF1NnMwNmJyZzQ1cCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/fXnRObM8Q0RkOmR5nf/giphy.gif"
          />
          <chatMessageItem :is-mine="false" message="Bye World" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import chatMessageItem from './chatMessageItem.vue';
</script>
