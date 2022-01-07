<template>
  <div id="chat">
      <div id="messages">
        <div v-for="(messageItem, index) in messageList" :class="'messageItem ' + (username === messageItem.username ? 'localMessageItem' : 'messageItemDistant')" :key="index">
          <div v-if="username === messageItem.username">{{ messageItem.message }}</div>
          <div v-else >{{ messageItem.username }}: {{ messageItem.message }}</div>
        </div>
      </div>
      <form id="form" @submit="sendMessage">
          <input id="message" autocomplete="off" v-model="message" />
          <button>Send</button>
      </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { io } from "socket.io-client";
import { ChatMessage } from "@/types/ChatMessage";
import { ChatInfo } from "../types/ChatInfo";

export default defineComponent({
  name: 'ChatWindow',
  props: {
    infos: {
      type: ChatInfo,
      required: true
    }
  },
  methods: {
    sendMessage (event: any) {
      event.preventDefault();
      if (this.message !== "") {
        this.socket.emit("chat_message", { username: this.infos.username, message: this.message })
        this.message = "";
      }
    }
  },
  created () {
    this.username = this.infos.username
    this.socket.on("chat_message", ({ username, message }) => {
      this.messageList.push({ username, message })
      window.scrollTo(0, document.body.scrollHeight);
    });
  },
  data () {
    return {
      socket: io("http://localhost:3000", { query: { textDiscussionId: this.infos.discussion._id } }),
      messageList: new Array<ChatMessage>(),
      message: "",
      username: ""
    };
  }
})
</script>

<style scoped>
  #chat {
    height: 100vh;
    overflow: hidden;
  }
  #messages {
    height: 95vh;
    width: 100%;
    display: flex;
    margin: 0;
    flex-direction: column;
    justify-content: flex-end;
  }

  #form {
    height: 5vh;
    width: 100%;
    display: flex;
    flex-direction: row;
  }
  #form button{
    height: 100%;
    width: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #message {
    height: 100%;
    width: 90%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  #username-form {
    margin: 20px;
  }
  .messageItem {
    width: 100%;
    display: flex;
    flex-direction: row;
  }
  .messageItemDistant {
    justify-content: flex-start;
  }
  .messageItemDistant div{
    background-color: lightblue;
    padding: 10px;
    margin: 10px;
  }
  .localMessageItem {
    justify-content: flex-end;
  }
  .localMessageItem div{
    background-color: lightgreen;
    margin: 10px;
    padding: 10px;
  }
</style>
