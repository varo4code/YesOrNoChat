<template>
  <div class="flex-1">
    <div class="flex justify-center">
      <div class="w-lg h-100 p-4">
        <div class="flex flex-col space-y-2">
          <!-- <chatMessageItem v-for="msg in messageList" :message="msg.message" :is-mine="msg.isMine" :gif="msg.gif"/> -->
          <chatMessageItem v-for="item in messageList" v-bind="item" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { message } from '@/interfaces/message.interface';
import chatMessageItem from './chatMessageItem.vue';

interface Props {
  messageList: message[];
}

defineProps<Props>();
</script>
