<script lang="ts">
  import Markdoc from '$lib/components/Markdoc.svelte';
  import type { MarkdownFile } from '$lib/stores/model';
  import { fixlink } from '$lib/fixlink';

  export let content: MarkdownFile;
</script>

<div class="relative pr-[110px] prose-headings:my-2 prose-headings:font-mono prose-headings:text-green-700 prose-headings:px-4 prose-headings:-mx-4">
  <img
    src={fixlink(`jldec.jpg`)}
    alt="jldec"
    class="absolute right-0 top-0 w-[100px] h-[100px] m-0 object-cover rounded-full"
    width="100"
    height="100"
  />
  <Markdoc {content} />
</div>
