import { Entity, Column, PrimaryGeneratedColumn, OneToMany , Unique} from 'typeorm';
import { Task } from '../tasks/task.entity'


@Entity()
@Unique(['username'])
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column(({ nullable: true }))
  firstName: string;

  @Column(({ nullable: true }))
  lastName: string;

  @Column({ unique: true })
  email: string;

  @Column({ unique: true })
  username: string;

  @Column(({ nullable: false }))
  password: string;

  @Column({ default: false })
  isActive: boolean;

  @Column({ default: false })
  isAdmin: boolean;

  @Column({ default: false })
  isManager: boolean;

  @OneToMany(type => Task, task => task.user)
  tasks: Task[];

  @OneToMany(type => Task, task => task.created_by)
  created_tasks: Task[];



}
