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

@Module({
  imports: [
    TypeOrmModule.forRoot(    
      {
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'AdvancedStuff!!#love',
        database: 'dotnetappdb',
        entities: [User, Task],
        synchronize: true,
        autoLoadEntities: true
  } ),
    UsersModule, TasksModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
