import { Field, ID, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class NotifySettingsItem {
	@Field(type => ID)
	id: number

	@Field(type => String)
	label: string

	@Field(type => Boolean)
	isChecked: boolean

	@Field(type => Boolean)
	isDisabled: boolean
}