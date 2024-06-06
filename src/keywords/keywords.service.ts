import { Injectable } from "@nestjs/common";
import { Keyword } from "./keyword.entity";
import { DeleteResult, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { Key } from "readline";

@Injectable()
export class KeywordsService {
    constructor(@InjectRepository(Keyword) private keywordRepository: Repository<Keyword>) {}
    /**
     * Find all keywords
     * @returns 
     */
    findAll(): Promise<Array<Keyword>> {
        return this.keywordRepository.find()
    }

    /**
     * Find one keyword and the forum topics list
     * @param id 
     * @returns 
     */
    findOne(id: number): Promise<Keyword | null> {
        return this.keywordRepository.findOne({
            where: { id },
            relations: {
                forums: true,
            }
        })
    }

    /**
     * 
     * @param keyword 
     * @returns 
     */
    create(keyword: Keyword): Promise<Keyword> {
        const newKeyword = this.keywordRepository.create(keyword)
        return  this.keywordRepository.save(keyword)
    }

    update(keyword: Keyword): Promise<Keyword> {
        
    }
}