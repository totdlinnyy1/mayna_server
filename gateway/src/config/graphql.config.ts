import {IntrospectAndCompose} from '@apollo/gateway'
import {ApolloGatewayDriver, ApolloGatewayDriverConfig} from '@nestjs/apollo'

export const graphqlConfig: ApolloGatewayDriverConfig = {
  driver: ApolloGatewayDriver,
  gateway: {
    supergraphSdl: new IntrospectAndCompose({
      subgraphs: [{name: 'bot_service', url: 'http://localhost:3002/graphql'}]
    })
  }
}
