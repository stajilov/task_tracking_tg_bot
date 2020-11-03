import { Injectable, OnModuleInit } from '@nestjs/common';
import { Task } from '../tasks/task.entity';
import { User } from '../users/user.entity';

import { TasksService } from '../tasks/tasks.service'
import { UsersService } from '../users/users.service';

@Injectable()
export class TrackerService {
    constructor(private readonly tasksService: TasksService, private readonly usersService:  UsersService ) {}

    async recordTask(description : string ) : Promise<Task> {
        const comps: string[] = description.split("|")
        const userName : string = comps[0]
        const u : User = await this.usersService.createOrInsertByUsername(userName)
        return await this.tasksService.create(comps[1], comps[2],comps[3], comps[4], u)
    }

}