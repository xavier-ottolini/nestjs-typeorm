import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { Forum } from './forum.entity';

@Injectable()
export class ForumService {
    constructor(
        @InjectRepository(Forum) private forumRepository: Repository<Forum>,
    ) {}

    /**
     * get all forum
     * @returns 
     */
    async findAll(): Promise<Array<Forum>> {
        return await this.forumRepository.find()
    }

    /**
     * get a topic by id
     * @param id 
     * @returns 
     */
    async findOne(id: number): Promise<Forum | null> {
        const entity = await this.forumRepository.findOne({
            where: { id },
            relations: {
                parent: true,
                user: true
            },
        })
        console.debug('topic: ', entity)
        return entity
    }

    /**
     * Create a topic in the forum
     * @param forum 
     * @returns 
     */
    async create(forum: Forum): Promise<Forum> {
        const newForum = this.forumRepository.create(forum)
        return await this.forumRepository.save(newForum)
    }

    /**
     * Update the topic in the forum
     * @param id
     * @param forum
     * @returns
     */
    async update(id: number, forum: Forum): Promise<Forum | null> {
        this.forumRepository.update(id, forum)
        return this.forumRepository.findOne({
            where: { id }
        })
    }

    async delete(id: number): Promise<DeleteResult> {
        return await this.forumRepository.delete(id)
    }
}
