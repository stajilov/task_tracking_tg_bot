import { Module } from '@nestjs/common';
import { TasksService } from '../tasks/tasks.service';
import { UsersService } from '../users/users.service';
import { TasksModule } from '../tasks/tasks.module';
import { UsersModule } from '../users/users.module';
import { TrackerService } from './tracker.service';
import { Task } from '../tasks/task.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../users/user.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Task]), TypeOrmModule.forFeature([User])],
  providers: [TrackerService, TasksService, UsersService],
})
export class TrackerModule {}