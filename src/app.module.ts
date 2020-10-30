import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Connection } from 'typeorm';
import { UsersModule } from './users/users.module';
import { UsersController } from './users/users.controller';
import { User } from './users/user.entity';
import { UsersService } from './users/users.service';
import { TasksModule } from './tasks/tasks.module';
import { Task } from './tasks/task.entity';
import { ConfigModule } from '@nestjs/config';
import { TgbotModule } from './bot/tgbot.module';
import { TrackerModule } from './tracker/tracker.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'AdvancedStuff!!#love',
        database: 'dotnetappdb',
        entities: [User, Task],
        synchronize: true,
        autoLoadEntities: true
  }), ConfigModule.forRoot({isGlobal: true}),
    UsersModule, 
    TasksModule, TgbotModule, TrackerModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
