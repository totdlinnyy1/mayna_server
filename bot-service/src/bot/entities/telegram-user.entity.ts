import {Column, Entity, Index} from 'typeorm'

import {DefaultEntity} from '../../entities/default.entity'

@Entity('telegram-users')
export class TelegramUserEntity extends DefaultEntity {
  @Index()
  @Column({type: 'integer', unique: true})
  user_id: number
}
