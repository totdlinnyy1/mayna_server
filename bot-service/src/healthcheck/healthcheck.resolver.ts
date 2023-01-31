import {Query, Resolver} from '@nestjs/graphql'

import {HealthcheckObjectType} from './graphql/healthcheck.object-type'
import {HealthcheckService} from './healthcheck.service'

@Resolver(() => HealthcheckObjectType)
export class HealthcheckResolver {
  constructor(private readonly _healthcheckService: HealthcheckService) {}

  @Query(() => String, {description: 'Get version of bot service'})
  getVersion(): string {
    return this._healthcheckService.getVersion()
  }
}
