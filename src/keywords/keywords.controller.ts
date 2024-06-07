import { Controller, Get, Delete, NotFoundException, Post, Put, HttpCode, Body, Param } from "@nestjs/common";
import { KeywordsService } from "./keywords.service";
import { Keyword } from "./keyword.entity";

@Controller('keywords')
export class KeywordsController {
    constructor(private  readonly keywordsService: KeywordsService) {}

    /**
     * @returns 
     */
    @Get()
    @HttpCode(200)     
    async findAll(): Promise<Array<Keyword>> {
        return this.keywordsService.findAll()
    }

    /**
     * @param id 
     * @returns 
     */
    @Get(':id')
    @HttpCode(200)     
    async findOne(@Param('id') id: number): Promise<Keyword | null> {
        const keyword = await this.keywordsService.findOne(id)
        if (!keyword) {
            throw new NotFoundException("Keyword not found")
        } else {
            return keyword
        }
    }

    /**
     * @param keyword 
     * @returns 
     */
    @Post()
    @HttpCode(201)
    async create(@Body() keyword: Keyword): Promise<Keyword> {
        return this.keywordsService.create(keyword)
    }

    @Put(':id')
    @HttpCode(200)
    async update(@Param('id') id: number, @Body() keyword: Partial<Keyword>): Promise<Keyword | null> {
        const updatedKeyword = await this.keywordsService.update(id, keyword)
        if (!updatedKeyword) {
            throw new NotFoundException("Keyword not found")
        }
        return updatedKeyword
    }

    @Delete(':id')
    @HttpCode(204)
    async delete(@Param('id') id: number): Promise<void> {
        const result = await this.keywordsService.delete(id)
        if (result.affected === 0) {
            throw new NotFoundException("Keyword not found")
        }
    }
}