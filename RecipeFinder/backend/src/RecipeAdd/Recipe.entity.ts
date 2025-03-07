import { Entity, PrimaryGeneratedColumn, Column, Unique } from 'typeorm';

@Entity()
@Unique(['Itemname']) // Ensures Itemname is unique
export class Recipe {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  Itemname: string;

  @Column()
  Incrediants: string;

  @Column()
  Recipe: string;
}
