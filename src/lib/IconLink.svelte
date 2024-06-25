<script lang="ts">
  import Icon, { type IconifyIcon } from "@iconify/svelte";

  export let icon: string | IconifyIcon;
  export let href: string;
</script>

<a
  {href}
  class="border border-gray-300 rounded-lg p-2 hover:bg-gray-100"
  target="_blank"
>
  <Icon {icon} />
</a>
