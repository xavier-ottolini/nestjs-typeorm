import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity() 
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        default: ''
    })
    firstname: string;

    @Column({
        default: ''
    })
    lastname: string;

    @Column({
        default: '',
        unique: true
    })
    username: string;
    @Column({
        default: ''
    })
    email: string;
}