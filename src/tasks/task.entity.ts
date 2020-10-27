import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, Double, CreateDateColumn,
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
  time: Number;

  @ManyToOne(() => User, user => user.tasks)
  user: User;

  @Column()
  @CreateDateColumn()
  created_at!: Date;

  @Column()
  @UpdateDateColumn()
  updated_at!: Date;
}
