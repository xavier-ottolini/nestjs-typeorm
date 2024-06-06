import { User } from "src/users/user.entity";
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, ManyToMany, JoinTable } from "typeorm";

@Entity() 
export class Forum {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Forum, 
        (forum) => forum.id, 
        {
            onDelete: 'SET NULL'
        })
    @JoinColumn()
    parent: Forum | null

    @Column({
        default: ''
    })
    title: string;

    @Column({
        default: ''
    })
    message: string;

    @ManyToOne(() => User, 
        (user) => user.id, 
        {
            onDelete: 'CASCADE'
        })
    @JoinColumn()
    user: User | null

    @ManyToMany(() => Forum)
    @JoinTable()
    forums: Forum[]
}