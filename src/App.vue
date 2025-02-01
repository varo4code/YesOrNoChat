<template>
  <div class="bg-gray-100 h-screen flex flex-col mx-auto">
    <chatHeader />

    <chatMessages :messageList="messageList" />

    <chatInput @sendMessage="onNewMessage" />
  </div>
</template>

<script lang="ts" setup>
import chatHeader from './chat/chatHeader.vue';
import chatMessages from './chat/chatMessages.vue';
import chatInput from './chat/chatInput.vue';
import { ref } from 'vue';
import type {message} from './interfaces/message.interface';

const messageList = ref<message[]>([
  {
    // id: new Date().getTime(),
    message: 'Hello World',
    isMine: true,
  },
  {
    // id: new Date().getTime(),
    message: 'NOo',
    gif: 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExc3lnbWpwZndycGpuYzJsdjNkeGI0cDA3ZXVsMWF1NnMwNmJyZzQ1cCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/fXnRObM8Q0RkOmR5nf/giphy.gif',
  },
  {
    // id: new Date().getTime(),
    message: 'Bye World',
  },
]);

const onNewMessage = (text: string) => {
  messageList.value.push({
    message: text,
    isMine: true
  })
}


</script>
