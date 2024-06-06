import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";

@Entity() 
export class Forum {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(() => Forum, 
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
}