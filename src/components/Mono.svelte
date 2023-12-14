<script lang="ts">
  import Markdoc from '$lib/components/Markdoc.svelte';
  import type { MarkdownFile } from '$lib/stores/model';
  import { fixlink } from '$lib/fixlink';

  export let content: MarkdownFile;
</script>

<img
  src={fixlink(`jldec.jpg`)}
  alt="jldec"
  class="float-right w-[100px] h-[100px] mx-2 object-cover rounded-full"
  width="100"
  height="100"
/>

<div class="prose-headings:font-mono prose-headings:text-green-700 prose-headings:px-4 prose-headings:-mx-4 prose-headings:my-2">
  <Markdoc {content} />
</div>
