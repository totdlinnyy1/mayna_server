import {InjectRepository} from '@nestjs/typeorm'
import {Repository} from 'typeorm'

import {CreateTelegramUserDto} from './dtos/createTelegramUser.dto'
import {TelegramUserEntity} from './entities/telegram-user.entity'

export class BotService {
  constructor(
    @InjectRepository(TelegramUserEntity)
    private readonly _telegramUsersRepository: Repository<TelegramUserEntity>
  ) {}

  async findTelegramUser(
    userId: number
  ): Promise<TelegramUserEntity | undefined> {
    return await this._telegramUsersRepository.findOne({
      where: {user_id: userId}
    })
  }

  async createTelegramUser(
    data: CreateTelegramUserDto
  ): Promise<TelegramUserEntity> {
    const user = this._telegramUsersRepository.create({user_id: data.userId})
    return await this._telegramUsersRepository.save(user)
  }
}
