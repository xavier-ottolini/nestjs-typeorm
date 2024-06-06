import { Forum } from "src/forum/forum.entity";
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from "typeorm";

@Entity()

export class Keyword {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        default: ''
    })
    label: string;

    @ManyToMany(() => Forum)
    @JoinTable()
    forums: Forum[]
}