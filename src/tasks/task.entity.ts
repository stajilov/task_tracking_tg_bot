import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, Double} from 'typeorm';
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
  time: Double;

  @ManyToOne(() => User, user => user.tasks)
  user: User;

  @Column('timestamp with time zone', { nullable: false, default: () => 'CURRENT_TIMESTAMP' })  
  created_at: Date;

}
