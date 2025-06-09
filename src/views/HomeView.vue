<template>
  <div class="flex items-center justify-center pt-8 lg:min-h-screen">
    <RouterLink
      data-text="Click here to learn more."
      to="/about"
      class="lg:text-4xl text-3xl relative overflow-hidden pb-8 before:content-[attr(data-text)attr(data-text)] before:underline before:decoration-wavy before:decoration-blue-400 before:absolute before:whitespace-nowrap before:text-transparent hover:before:animate-wave"
    >
      Click here to learn more.
    </RouterLink>
  </div>
</template>
