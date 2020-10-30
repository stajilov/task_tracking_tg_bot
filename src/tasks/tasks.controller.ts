import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { User } from '../users/user.entity';
import { CreateTaskDto } from './create-task.dto';
import { Task } from './task.entity';
import { TasksService } from './tasks.service'
import { TrackerService } from '../tracker/tracker.service';

@Controller('tasks')
export class TasksController {
  constructor(
    private readonly tasksService: TasksService, 
    private readonly usersService:  UsersService,  
    private readonly trackerService : TrackerService
    ) {}

    @Post()
    async create(@Body() createTaskDto: CreateTaskDto) : Promise<Task> {
        //username|project|title|comment|time
        console.log(createTaskDto)
        return this.trackerService.recordTask(createTaskDto.description);
    }

}