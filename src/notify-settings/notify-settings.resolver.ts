import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { NotifySettingsService } from './notify-settings.service';
import { NotifySettings } from './models/notify-settings.model';

@Resolver('NotifySettings')
export class NotifySettingsResolver {
	constructor(
		private notifySettingsService: NotifySettingsService,
	) {}

	@Query(returns => NotifySettings)
	getNotifySettings(): NotifySettings {
		return this.notifySettingsService.get();
	}
}
