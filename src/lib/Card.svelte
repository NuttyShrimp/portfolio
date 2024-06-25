<script lang="ts">
  export let name: string;
  export let link: string | null = null;
  export let description: string;
  export let tags: string[];
</script>

<div class="border rounded-lg p-4 flex flex-col gap-1">
  {#if link}
    <a href={link} target={"_blank"} class="font-semibold hover:underline">
      {name}
    </a>
  {:else}
    <p class="font-semibold">{name}</p>
  {/if}
  <p class="text-gray-600 text-sm flex-1">{description}</p>
  <div class="flex flex-wrap gap-2">
    {#each tags as tag}
      <div class="text-xs font-semibold rounded-xl bg-gray-200 py-0.5 px-2">
        {tag}
      </div>
    {/each}
  </div>
</div>
