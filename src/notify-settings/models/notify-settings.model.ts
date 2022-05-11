import { Field, ObjectType } from '@nestjs/graphql'
import { NotifySettingsItem } from './notify-settings-item.model';

@ObjectType()
export class NotifySettings {
	@Field(type => [NotifySettingsItem])
	settings: NotifySettingsItem[]
}