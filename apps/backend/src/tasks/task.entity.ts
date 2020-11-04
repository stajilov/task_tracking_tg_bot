import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn,
  UpdateDateColumn,} from 'typeorm';
import { User } from '../users/user.entity'

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  project: string;

  @Column()
  title: string;

  @Column()
  comment: string;

  @Column()
  time: number;

  @ManyToOne(() => User, user => user.tasks)
  user: User;

  @ManyToOne(() => User, user => user.created_tasks)
  created_by: User;

  @Column()
  @CreateDateColumn()
  created_at!: Date;

  @Column()
  @UpdateDateColumn()
  updated_at!: Date;
}
