import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Keyword } from "./keyword.entity";
import { KeywordsController } from "./keywords.controller";
import { KeywordsService } from "./keywords.service";


@Module({
    imports: [TypeOrmModule.forFeature([Keyword])],
    controllers: [KeywordsController],
    providers: [KeywordsService]
  })
  export class KeywordModule {}