
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './task.entity';

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


}