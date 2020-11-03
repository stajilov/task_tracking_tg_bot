import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TasksService } from '../tasks/tasks.service';
import { TrackerModule } from '../tracker/tracker.module';
import { TrackerService } from '../tracker/tracker.service';
import { UsersService } from '../users/users.service';
import { TgBotService } from './tgbot.service';
import { Task } from '../tasks/task.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../users/user.entity';


@Module({
  imports: [ConfigModule, TrackerModule, TypeOrmModule.forFeature([Task]), TypeOrmModule.forFeature([User])],
  providers: [TgBotService, TrackerService, TasksService, UsersService],
})
export class TgbotModule {}