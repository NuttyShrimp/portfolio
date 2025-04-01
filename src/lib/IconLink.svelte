<script lang="ts">
  import Icon, { type IconifyIcon } from "@iconify/svelte";

  export let icon: string | IconifyIcon;
  export let href: string;
  export let details: string | undefined = undefined;
</script>

<a
  {href}
  class="border border-gray-300 rounded-lg p-2 hover:bg-gray-100 flex gap-2 items-center justify-center min-w-10 min-h-10"
  target="_blank"
>
  <Icon {icon} />
  {#if details}<span>{details}</span>{/if}
</a>
