<template>
  <div class="bg-gray-100 h-screen flex flex-col mx-auto">
    <chatHeader />

    <chatMessages />

    <chatInput />
  </div>
</template>

<script lang="ts" setup>
import chatHeader from './chat/chatHeader.vue';
import chatMessages from './chat/chatMessages.vue';
import chatInput from './chat/chatInput.vue';
</script>
