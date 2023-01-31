import {Field, ObjectType} from '@nestjs/graphql'

@ObjectType()
export class HealthcheckObjectType {
  @Field(() => String, {description: 'Bot service version'})
  version: string
}
