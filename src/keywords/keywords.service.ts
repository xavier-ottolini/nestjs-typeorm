import { Injectable } from "@nestjs/common";
import { Keyword } from "./keyword.entity";
import { DeleteResult, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class KeywordsService {
    constructor(@InjectRepository(Keyword) private keywordRepository: Repository<Keyword>) {}
    /**
     * Find all keywords
     * @returns 
     */
    async findAll(): Promise<Array<Keyword>> {
        return this.keywordRepository.find()
    }

    /**
     * Find one keyword and the forum topics list
     * @param id 
     * @returns 
     */
    async findOne(id: number): Promise<Keyword | null> {
        return this.keywordRepository.findOne({
            where: { id }
        })
    }

    /**
     * 
     * @param keyword 
     * @returns 
     */
    async create(keyword: Keyword): Promise<Keyword> {
        const newKeyword = this.keywordRepository.create(keyword)
        return this.keywordRepository.save(newKeyword)
    }

    /**
     * 
     * @param id 
     * @param keyword 
     * @returns 
     */
    async update(id: number, keyword: Partial<Keyword>): Promise<Keyword | null> {
        await this.keywordRepository.update(id, keyword)
        return this.keywordRepository.findOne({
            where: { id }
        })
    }

    /**
     * 
     * @param id 
     * @returns 
     */
    async delete(id: number): Promise<DeleteResult> {
        return this.keywordRepository.delete(id)
    }
}