import { ref } from 'vue';
import type { message } from '@/interfaces/message.interface';
import type { YesNoResponse } from '@/interfaces/yesnoresponse.interface';
import { sleep } from './sleep';

export const sendMessage = () => {
  const messageList = ref<message[]>([]);

  const getMessageResponse = async (): Promise<YesNoResponse> => {
    const res = await fetch('https://yesno.wtf/api');
    return await res.json();
  };

  const onNewMessage = async (text: string) => {
    messageList.value.push({
      message: text,
      isMine: true,
    });

    await sleep(1.5);
    if (
      !text.includes('?') &&
      !text.toLowerCase().includes('want') &&
      !text.toLowerCase().includes('quieres')
    )
      return;
    const { answer, image } = await getMessageResponse();
    messageList.value.push({
      message: answer,
      gif: image,
    });
  };

  return {
    messageList,
    onNewMessage,
  };
};
