<template>
  <div v-if="isMine" class="flex justify-end">
    <div class="bg-blue-200 text-black p-2 rounded-lg max-w-xs">{{ message }}</div>
  </div>

  <!-- Example Received Message -->
  <div v-else class="flex">
    <div class="bg-gray-300 text-black p-2 rounded-lg max-w-xs">
      <span class="capitalize">
        {{ message }}
      </span>
      <img v-if="gif" :src="gif" alt="Gif received" class="w-52 h-52" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { message } from '@/interfaces/message.interface';

const props = defineProps<message>();
</script>
