import { Controller, Get, Post, Body, Put, Param, Delete, NotFoundException, HttpCode } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  /** 
   * get all users
   **/
  @Get()
  @HttpCode(200)  
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  /** 
   * get user by id
   * @param id
   **/
  @Get(':id')
  @HttpCode(200)  
  async findOne(@Param('id') id: number): Promise<User> {
    const user = await this.usersService.findOne(id);
    if (!user) {
      throw new NotFoundException('User does not exist!');
    } else {
      return user;
    }
  }

  /**
   * create user
   * @parma user
   * @returns
   **/
  @HttpCode(201)
  @Post()
  async create(@Body() user: User): Promise<User> {
    return this.usersService.create(user);
  }

  /**
   * update user
   * @param user
   * @returns
   **/
  @HttpCode(200) 
  @Put(':id')
  async update (@Param('id') id: number, @Body() user: Partial<User>): Promise<any> {
    return this.usersService.update(id, user);
  }

  /**
   * delete user
   * @param id
   */
  @Delete(':id')
  @HttpCode(204) 
  async delete(@Param('id') id: number): Promise<any> {
    const result = await this.usersService.delete(id);
    if (result.affected ===  0) {
       throw new NotFoundException('User does not exist!');
    }
    return
  }
}

