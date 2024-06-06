import { Controller, Get, Post, Delete, HttpCode, Param, Body, Put } from '@nestjs/common';
import { ForumService } from './forum.service';
import { Forum } from './forum.entity'

@Controller('forum')
export class ForumController {
    constructor(private readonly forumService: ForumService) {}
    /**
     * Get all the topic
     * @returns 
     */
    @Get()
    @HttpCode(200)
    async findAll(): Promise<Array<Forum>> {
        return await this.forumService.findAll()
    }

    /**
     * Get one topic
     * @param id 
     * @returns 
     */
    @Get(':id')
    @HttpCode(200)
    async findOne(@Param('id') id: number): Promise<Forum | Error> {
        const forum = await this.forumService.findOne(id)
        if (!forum) {
            return new Error('Forum topic not found')
        }
        return forum
    }

    @Post()
    @HttpCode(201)
    async create(@Body() forum: Forum): Promise<Forum> {
        console.error("post forum:", forum);
        return this.forumService.create(forum)
    }

    /**
     * update the forum topic
     * @param id 
     * @param forum 
     * @returns 
     */
    @Put(':id')
    @HttpCode(200)
    async update(@Param('id') id: number,  @Body() forum: Forum): Promise<Forum | Error> {
        const updatedForum = await this.forumService.update(id, forum)
        if (updatedForum != null) {
            return new Error('Forum topic not found')
        } else {
            return updatedForum as unknown as Forum
        }
    }

    @Delete(':id')
    @HttpCode(204)
    async delete(@Param('id') id: number): Promise<Error | void> {
        const result = await this.forumService.delete(id)
        if (result.affected ===  0) {
            return new Error('Forum topic not found')
        }
    }
}
