import {Injectable} from '@nestjs/common'

@Injectable()
export class HealthcheckService {
  getVersion(): string {
    return '1.0.0'
  }
}
