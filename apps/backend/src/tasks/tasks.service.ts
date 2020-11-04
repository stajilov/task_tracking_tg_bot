
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../users/user.entity';
import { Repository } from 'typeorm';

import { Task } from './task.entity';

import {
  paginate,
  Pagination,
  IPaginationOptions,
} from 'nestjs-typeorm-paginate';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private tasksRepository: Repository<Task>,
  ) {}

  findAll(): Promise<Task[]> {
    return this.tasksRepository.find();
  }

  findOne(id: string): Promise<Task> {
    return this.tasksRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.tasksRepository.delete(id);
  }

  create(project : string, title: string, comment: string, time : string, u: User): Promise<Task> {
    const t = new Task;
    t.project = project;
    t.title = title;
    t.comment = comment;
    t.time = parseInt(time, 10);
    t.user = u;
    return this.tasksRepository.save(t);
  }

  async paginate(options: IPaginationOptions): Promise<Pagination<Task>> {
    return paginate<Task>(this.tasksRepository, options);
  }




}