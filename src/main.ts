
require('module-alias/register')
import {createServer} from "@infrastructure/http/server";
import { initDB } from '@infrastructure/database'

const main = async (): Promise<void> => {
    const server = await createServer()
    const { API_PORT: port, API_HOST: host } = server.config;
    await initDB()
    // await sequelize.sync({force: true})
    await server.listen({ host, port })
    process.on('unhandledRejection', (err) => {
        console.error(err)
        process.exit(1)
    })

    for (const signal of ['SIGINT', 'SIGTERM']) {
        process.on(signal, () => {
                console.log(`closing application on ${signal}`)
                server.close()
                    .then(() => process.exit(0))
                    .catch(() => process.exit(1))
            }
        )
    }
}

void main()