<script lang="ts">
	import { page } from '$app/stores';


</script>

<header class="mx-auto">
	<nav>
		<div class="flex items-center py-4 overflow-x-auto whitespace-nowrap">
			<a href="/" class="text-gray-600 dark:text-{$page.url.pathname == "/" ? "gray-200" : "gray-400"} hover:underline">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					fill="currentColor"
					class="w-5 h-5"
					viewBox="0 0 16 16"
				>
					<path
						d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z"
					/>
				</svg>
			</a>

			<span class="mx-3 text-gray-500 dark:text-gray-300"> / </span>

			<a href="/upload" class="text-gray-600 dark:text-{$page.url.pathname == "/upload" ? "gray-200" : "gray-400"} hover:underline"> Upload </a>

			<span class="mx-3 text-gray-500 dark:text-gray-300"> / </span>

			<a href="/about" class="text-gray-600 dark:text-{$page.url.pathname == "/about" ? "gray-200" : "gray-400"} hover:underline"> About </a>
		</div>
	</nav>
</header>

