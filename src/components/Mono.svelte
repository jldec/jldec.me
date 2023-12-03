<script lang="ts">
  import Markdoc from '$lib/components/Markdoc.svelte';
  import type { MarkdownFile } from '$lib/stores/model';

  export let content: MarkdownFile;
</script>

<div class="p-4 prose-headings:my-2 prose-headings:font-mono prose-headings:text-green-700 prose-headings:px-4 prose-headings:-mx-4">
<Markdoc {content} />
</div>