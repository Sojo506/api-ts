import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn
}
  from 'typeorm';
import { CarInterface } from '../interfaces/car.interface';

@Entity()
export class Item implements CarInterface {
  @PrimaryGeneratedColumn("uuid",)
  id: string;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  color: string;

  @Column({
    type: 'enum',
    enum: ['gasoline', 'electric'],
    default: 'gasoline',
  })
  fuel: 'gasoline' | 'electric';

  @Column({ nullable: false })
  year: number;

  @Column({ nullable: false })
  description: string;

  @Column('integer', { nullable: false })
  price: number;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;
}
