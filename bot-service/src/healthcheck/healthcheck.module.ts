import {Module} from '@nestjs/common'

import {HealthcheckResolver} from './healthcheck.resolver'
import {HealthcheckService} from './healthcheck.service'

@Module({
  providers: [HealthcheckService, HealthcheckResolver]
})
export class HealthcheckModule {}
