import {Context} from 'telegraf'

export const getTelegramUserId = (context: Context): number => {
  if ('callback_query' in context.update) {
    return context.update.callback_query.from.id
  }

  if ('message' in context.update) {
    return context.update.message.from.id
  }

  if ('my_chat_member' in context.update) {
    return context.update.my_chat_member.from.id
  }

  const CANT_FIND_ID = -1
  return CANT_FIND_ID
}
