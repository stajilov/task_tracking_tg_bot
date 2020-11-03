import { Injectable, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TrackerService } from '../tracker/tracker.service';

@Injectable()
export class TgBotService implements OnModuleInit {
    constructor(private configService: ConfigService , private trackerService: TrackerService) {}

    onModuleInit() {
        this.botMessage();
    }

    botMessage() {
        process.env.NTBA_FIX_319 = "1";
        const TelegramBot = require('node-telegram-bot-api');
        
        const token =this.configService.get<string>('TELEGRAM_BOT_ID');
        
        const bot = new TelegramBot(token, { polling: true });
        
        bot.on('message', async (msg) => {
        const hi = "hi";
        console.log(msg)
        if (msg.text.toString().toLowerCase().indexOf(hi) === 0) {
            bot.sendMessage(msg.from.id, `Hello ${msg.from.first_name}, ` + `Can you plaese track your time in this format username|project|title|comment|time ?`);
        }
        else {
            try {
                const tsk : string = msg.text.toString();
                const resp =  await this.trackerService.recordTask(tsk);
                console.log("Response:")
                console.log(resp)
                bot.sendMessage(msg.from.id, 'task id ' + resp.id);

            } catch (error) {
                bot.sendMessage(msg.from.id, error.toString());
            }
        }
        }
        )
    }

}