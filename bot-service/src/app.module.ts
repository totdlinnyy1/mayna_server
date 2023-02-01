import {ApolloFederationDriverConfig} from '@nestjs/apollo'
import {Module} from '@nestjs/common'
import {ConfigModule} from '@nestjs/config'
import {GraphQLModule} from '@nestjs/graphql'
import {TypeOrmModule} from '@nestjs/typeorm'
import {TelegrafModule} from 'nestjs-telegraf'

import {BotModule} from './bot/bot.module'
import {config} from './config/config'
import {graphqlConfig} from './config/graphql.config'
import {telegrafConfig} from './config/telegraf.config'
import {typeOrmConfig} from './config/typeorm.config'
import {HealthcheckModule} from './healthcheck/healthcheck.module'
import {ApolloLoggingPlugin} from './plugins/apollo-logging.plugin'

@Module({
  imports: [
    ConfigModule.forRoot(config),
    TypeOrmModule.forRootAsync(typeOrmConfig),
    GraphQLModule.forRoot<ApolloFederationDriverConfig>(graphqlConfig),
    TelegrafModule.forRootAsync(telegrafConfig),
    HealthcheckModule,
    BotModule
  ],
  providers: [ApolloLoggingPlugin]
})
export class AppModule {}
