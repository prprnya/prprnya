<template>
  <main>
    <ContentDoc>
      <template #not-found>
        <h1>Post not found!</h1>
        <div><NuxtLink to="/posts">Go Back to Posts</NuxtLink></div>
      </template>
    </ContentDoc>
  </main>
</template>
