import {Plugin} from '@nestjs/apollo'
import {Logger} from '@nestjs/common'
import {
  ApolloServerPlugin,
  GraphQLRequestListener
} from 'apollo-server-plugin-base'

// ApolloLoggingPlugin is a plugin that allows logging query and mutation
// Logs information such as: operation, ip address, execution time, source
// In the debug mode, it also logs response
@Plugin()
export class ApolloLoggingPlugin implements ApolloServerPlugin {
  async requestDidStart(): Promise<GraphQLRequestListener> {
    const start = performance.now()
    return {
      async willSendResponse({
        operation,
        context,
        source,
        response,
        debug
      }): Promise<void> {
        const logger: Logger = new Logger(ApolloLoggingPlugin.name)

        const type = operation?.operation
        const ip = context.req.ip

        const end = performance.now()
        logger.log(
          `Graphql ${type} from ip address ${ip} duration ${
            end - start
          } ms source ${source}`
        )

        if (debug) {
          const data = response.data
          logger.debug(`Graphql response data`, data)
        }
      }
    }
  }
}
