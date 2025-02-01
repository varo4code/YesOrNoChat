import { ref } from 'vue';
import type { message } from '@/interfaces/message.interface';

export const sendMessage = () => {
  const messageList = ref<message[]>([
    {
      message: 'Hello World',
      isMine: true,
    },
  ]);

  const onNewMessage = (text: string) => {
    messageList.value.push({
      message: text,
      isMine: true,
    });

    setTimeout(() => {
      messageList.value.push({
        message: 'No',
        gif: 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExc3lnbWpwZndycGpuYzJsdjNkeGI0cDA3ZXVsMWF1NnMwNmJyZzQ1cCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/fXnRObM8Q0RkOmR5nf/giphy.gif',
      });
    }, 2500);
  };

  return {
    messageList,
    onNewMessage,
  };
};
