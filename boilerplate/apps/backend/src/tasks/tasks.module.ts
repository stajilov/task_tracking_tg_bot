import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { Task } from './task.entity';
import { User } from '../users/user.entity';
import { UsersModule } from '../users/users.module';
import { UsersService } from '../users/users.service';
import { TrackerModule } from '../tracker/tracker.module';
import { TrackerService } from '../tracker/tracker.service';

@Module({
  imports: [TypeOrmModule.forFeature([Task]), UsersModule, TrackerModule ],
  providers: [TasksService, TrackerService],
  controllers: [TasksController],
})
export class TasksModule {}