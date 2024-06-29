<script lang="ts">
  import Card from "./lib/Card.svelte";
  import DarkBadge from "./lib/DarkBadge.svelte";
  import IconLink from "./lib/IconLink.svelte";
  import Icon from "@iconify/svelte";
  import { projects, skills } from "./lib/data";
</script>

<main class="max-w-3xl mx-auto sm:py-8 p-2">
  <div class="flex flex-col space-y-8">
    <div class="flex justify-between items-center">
      <div class="gap-1 flex flex-col">
        <h1 class="font-bold text-2xl">Jan lecoutere</h1>
        <p class="text-gray-500">
          A eager to learn student applied information technology at HOGENT,
          following his passion to create high-quality software
        </p>
        <p class="flex items-center gap-2 pl-1">
          <Icon icon="mdi-world" class="size-4" /> Asse, België
        </p>
        <div class="flex gap-2">
          <IconLink icon="lucide:mail" href="mailto:jan@lecoutere.dev" />
          <IconLink icon="lucide:phone" href="tel:+32474551828" />
          <IconLink
            icon="lucide:github"
            href="https://github.com/NuttyShrimp"
          />
          <IconLink
            icon="mdi:linkedin"
            href="https://www.linkedin.com/in/jan-lecoutere/"
          />
        </div>
      </div>
      <div class="shrink-0 overflow-hidden rounded-lg size-28 border">
        <picture class="aspect-square w-full h-full object-cover">
          <source srcset="/images/me.webp" type="image/webp" />
          <source srcset="/images/me.jpg" type="image/jpeg" />
          <img
            src="images/me.jpg"
            alt="Jan Lecoutere"
            class="aspect-square w-full h-full object-cover"
          />
        </picture>
      </div>
    </div>
    <div class="flex flex-col gap-2">
      <h2 class="text-2xl font-bold">About</h2>
      <p class="text-gray-500">
        An eager to learn, young comp science student who has been fascinated
        since childhood by computers &amp; servers. I was always the person to
        spin up the minecraft server for his friends. Which led to searching how
        all these programs worked. I started my journey with a bit of python,
        HTML and CSS. Later I grouped up with a friend to work on a FiveM server
        which was primarily in Lua. This was my first real project, which also
        introduced my to the basics of databases and JavaScript. Later I joined
        another community and helped their server grow to the biggest in Belgium
        as of writing this. In the meantime I started at Ghent University where
        I joined ZeusWPI which introduced me to multiple bigger projects I am
        actively working on
      </p>
    </div>
    <div class="flex flex-col gap-2">
      <h2 class="text-2xl font-bold">Education</h2>
      <div>
        <div class="flex justify-between items-center">
          <p class="font-semibold text-lg">HOGENT</p>
          <p>2023 - Present</p>
        </div>
        <p class="text-gray-500">
          Bachelor of Science Applied Information Technology
        </p>
      </div>
      <div>
        <div class="flex justify-between items-center">
          <p class="font-semibold text-lg">University Ghent</p>
          <p>2021 - 2023</p>
        </div>
        <p class="text-gray-500">Bachelor of Science in Computer Science</p>
      </div>
    </div>
    <div class="flex flex-col gap-2">
      <h2 class="text-2xl font-bold">Skills</h2>
      <div class="flex flex-wrap gap-2">
        {#each skills as skill}
          <DarkBadge>{skill}</DarkBadge>
        {/each}
      </div>
    </div>
    <div class="flex flex-col gap-2">
      <h2 class="text-2xl font-bold">Projects</h2>
      <p class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {#each projects as project}
          <Card
            name={project.name}
            tags={project.tags}
            link={project.link}
            description={project.description}
          />
        {/each}
      </p>
    </div>
  </div>
</main>
