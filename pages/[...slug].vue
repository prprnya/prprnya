<template>
  <main>
    <ContentDoc>
      <template #not-found>
        <h1>Page not found!</h1>
        <div><NuxtLink to="/">Go Back to HomePage</NuxtLink></div>
      </template>
    </ContentDoc>
  </main>
</template>
