<template>
  <div ref="chatRef" class="flex-1 overflow-y-auto">
    <div class="flex justify-center">
      <div class="w-lg h-100 p-4">
        <div class="flex flex-col space-y-2">
          <chatMessageItem v-for="msg in messageList" v-bind="msg" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { message } from '@/interfaces/message.interface';
import chatMessageItem from './chatMessageItem.vue';
import { onMounted, ref, useTemplateRef, watch } from 'vue';
import { sleep } from '@/composables/sleep';

interface Props {
  messageList: message[];
}
const props = defineProps<Props>();

// Callback to be called after the component has been mounted.
onMounted( async() =>{
  await sleep(1.5);
  props.messageList.push({
    message: 'Hello World',
  })
  await sleep();
  props.messageList.push({
    message: 'Ask me a question',
  })
  await sleep();
  props.messageList.push({
    message: 'But my answer will only be Yes or No :)',
  })
});


const chatRef = useTemplateRef("chatRef");
// const chatRef = ref<HTMLDivElement|null>(null);  

watch(props.messageList, async ()=>{
  setTimeout(() => {
    chatRef.value?.scrollTo({
      top: chatRef.value?.scrollHeight,
      behavior: 'smooth'
    })
  }, 200);
})

</script>
