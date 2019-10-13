import {Message, SEND_MESSAGE, DELETE_MESSAGE} from "./types";

export const sendMessage = (newMessage: Message) => ({
  type: SEND_MESSAGE,
  payload: newMessage
});

export const deleteMessage = (timestamp: number) => ({
  type: DELETE_MESSAGE,
  meta: {
    timestamp
  }
});
