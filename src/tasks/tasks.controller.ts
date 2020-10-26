import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { User } from '../users/user.entity';
import { CreateTaskDto } from './create-task.dto';
import { Task } from './task.entity';
import { TasksService } from './tasks.service'

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService,private readonly usersService:  UsersService ) {}

    @Post()
    async create(@Body() createTaskDto: CreateTaskDto) {

        let comps: string[] = createTaskDto.description.split("|")
        let u : User = await  this.usersService.findByUserName(comps[0])
        
        return 'OK';
    }

 
}