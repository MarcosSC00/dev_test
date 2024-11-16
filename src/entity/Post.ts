import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";
import { User } from "./User";

//TODO Crie a entidade de Post

@Entity()
export class Post {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    title!: string;

    description!: string;

    @ManyToOne(() => User, user => user.posts)
    user!: User;
}