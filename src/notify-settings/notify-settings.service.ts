import { NotifySettings } from './models/notify-settings.model';
import { Injectable } from '@nestjs/common';
import { readFileSync } from 'fs';

@Injectable()
export class NotifySettingsService {
	get(): NotifySettings {
		const json = readFileSync(`${__dirname}/../../files/notify-settings.json`, 'utf8');

		return JSON.parse(json);
	}
}
