import { Module } from '@nestjs/common';
import { NotifySettingsService } from './notify-settings.service';
import { NotifySettingsResolver } from './notify-settings.resolver';

@Module({
	providers: [NotifySettingsResolver, NotifySettingsService]
})
export class NotifySettingsModule {}
