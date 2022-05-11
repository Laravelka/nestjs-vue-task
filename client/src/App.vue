<template>
	<q-layout view="lHh Lpr lFf">
		<q-header v-if="false" elevated class="glossy">
			<q-toolbar>
				<q-toolbar-title>
					Test App
				</q-toolbar-title>
			</q-toolbar>
		</q-header>

		<q-page-container>
			<NotifySettings />
		</q-page-container>
	</q-layout>
</template>

<script>
import { ref } from 'vue'
import NotifySettings from './components/NotifySettings.vue'

export default {
	name: 'LayoutDefault',
	components: {
		NotifySettings
	},
	setup () {
		return {
			leftDrawerOpen: ref(false)
		}
	}
}
</script>
