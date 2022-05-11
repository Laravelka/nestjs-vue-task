import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';

import { join } from 'path';
import { GraphQLModule } from '@nestjs/graphql';
import { ServeStaticModule} from '@nestjs/serve-static'; 
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { NotifySettingsModule } from './notify-settings/notify-settings.module';

@Module({
	imports: [
		GraphQLModule.forRoot<ApolloDriverConfig>({
			driver: ApolloDriver,
			// installSubscriptionHandlers: true,
			autoSchemaFile: 'schema.gql' // join(process.cwd(), 'src/schema.gql'),
		}),
		ServeStaticModule.forRoot({
			rootPath: join(__dirname, '..', 'client/dist')
		}),
		NotifySettingsModule,
	],
	// controllers: [AppController],
	// providers: [AppService],
})
export class AppModule {}