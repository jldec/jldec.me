<script lang="ts">
  import Markdoc from '$lib/components/Markdoc.svelte';
  import type { MarkdownFile } from '$lib/stores/model';

  export let content: MarkdownFile;
</script>

<div class="prose-headings:m-0">
<Markdoc {content} />
</div>