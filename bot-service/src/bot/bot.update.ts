import {Ctx, Start, Update} from 'nestjs-telegraf'
import {Context} from 'telegraf'

import {getTelegramUserId} from '../helpers/getTelegramUserId'

import {BotService} from './bot.service'

@Update()
export class BotUpdate {
  constructor(private readonly _botService: BotService) {}

  @Start()
  async onStart(@Ctx() ctx: Context): Promise<void> {
    const userId = getTelegramUserId(ctx)
    const candidate = await this._botService.findTelegramUser(userId)
    if (!candidate) {
      await this._botService.createTelegramUser({userId})
    }
    await ctx.reply('Hello')
  }
}
