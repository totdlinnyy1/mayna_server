import {Module} from '@nestjs/common'
import {TypeOrmModule} from '@nestjs/typeorm'

import {BotService} from './bot.service'
import {BotUpdate} from './bot.update'
import {TelegramUserEntity} from './entities/telegram-user.entity'

@Module({
  imports: [TypeOrmModule.forFeature([TelegramUserEntity])],
  providers: [BotService, BotUpdate]
})
export class BotModule {}
