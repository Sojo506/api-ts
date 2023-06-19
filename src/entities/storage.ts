import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
}
  from 'typeorm';
import { Storage } from '../interfaces/storage.interface';
import { UserModel } from './user';

@Entity()
export default class StorageModel implements Storage {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  fileName: string;

  @Column()
  path: string;


  @ManyToOne(() => UserModel, user => user.storages)
  user: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;
}