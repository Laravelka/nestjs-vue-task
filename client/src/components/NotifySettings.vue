<template>
	<q-page>
		<div class="flex flex-center q-pa-sm rounded-borders">
			<q-card v-if="isError" class="bg-red-5" style="width: 350px">
				<q-card-section class="row items-center no-wrap text-white">
					{{ errorMessage }}
				</q-card-section>
			</q-card>
			<q-card v-else style="width: 550px">
				<q-card-section>
					<q-item>
						<q-item-section side top class="col-3 gt-xs">
							<q-item-label lines="2" caption>
								<div class="text-h6">Email Notifcations</div>
							</q-item-label>
						</q-item-section>
						<q-item-section style="min-height: 172px">
							<q-item-label lines="1" v-for="item in settings" v-bind:key="item.id">
								<q-checkbox v-model="item.isChecked" :disable="item.isDisabled" :label="item.label" />
							</q-item-label>
							
						</q-item-section>
					</q-item>
					<div class="flex flex-center">
						<q-btn no-caps color="primary" label="Save Changes" @click="saveSettings" />
					</div>
				</q-card-section>
				
			</q-card>
		</div>
	</q-page>
</template>

<script>
	import gql from 'graphql-tag';

	export default {
		name: 'NotifySettings',
		data() {
			return {
				isError: false,
				settings: [],
				errorMessage: null,
			}
		},
		methods: {
			saveSettings() {
				console.log('Save Changes:', this.settings);
			}
		},
		beforeCreate() {
			this.$apollo.query({
				query: gql`query getNotifySettings {
					getNotifySettings {
						settings {
							id
							label
							isChecked
							isDisabled
						}
					}
				}`
			}).then((response) => {
				const { data } = response;

				this.isError = false;
				this.errorMessage = null;
				this.settings = data.getNotifySettings.settings;
			}).catch((error) => {
				this.isError = true;
				this.errorMessage = error.message;

				console.error('error:', error.message);
			});
		}
	}
</script>
