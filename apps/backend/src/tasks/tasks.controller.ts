import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { User } from '../users/user.entity';
import { CreateTaskDto } from './create-task.dto';
import { Task } from './task.entity';
import { TasksService } from './tasks.service'
import { TrackerService } from '../tracker/tracker.service';

import { Pagination } from 'nestjs-typeorm-paginate';


@Controller('tasks')
export class TasksController {
  constructor(
    private readonly tasksService: TasksService, 
    private readonly usersService:  UsersService,  
    private readonly trackerService : TrackerService
    ) {}


    @Get('')
    async index(
      @Query('page') page: number = 1,
      @Query('limit') limit: number = 10,
    ): Promise<Pagination<Task>> {
      limit = limit > 100 ? 100 : limit;
      return this.tasksService.paginate({
        page,
        limit,
        route: '/tasks',
      });
    }

    @Post()
    async create(@Body() createTaskDto: CreateTaskDto) : Promise<Task> {
        //username|project|title|comment|time
        console.log(createTaskDto)
        return this.trackerService.recordTask(createTaskDto.description);
    }

}