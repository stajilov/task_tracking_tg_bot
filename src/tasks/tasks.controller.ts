import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { User } from '../users/user.entity';
import { CreateTaskDto } from './create-task.dto';
import { Task } from './task.entity';
import { TasksService } from './tasks.service'

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService, private readonly usersService:  UsersService ) {}

    @Post()
    async create(@Body() createTaskDto: CreateTaskDto) : Promise<Task> {

        //username|project|title|comment|time
        console.log(createTaskDto)
        const comps: string[] = createTaskDto.description.split("|")
        const userName :string = comps[0]
        const u : User = await this.usersService.createOrInsertByUsername(userName)
        return this.tasksService.create(comps[1], comps[2],comps[3], comps[4], u)
    }

 
}