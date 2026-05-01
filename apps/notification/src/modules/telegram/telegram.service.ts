import { Injectable } from '@nestjs/common';
import axios from 'axios';

export class TelegramService {
  async send(message: string) {
    try {
      await axios.post(
        `https://api.telegram.org/bot${process.env.TG_TOKEN}/sendMessage`,
        {
          chat_id: process.env.TG_CHAT_ID,
          text: message,
        },
      );
    } catch (error) {
      console.log(error);
    }
  }
}
