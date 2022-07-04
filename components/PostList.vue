<template>
  <main>
    <ContentList path="/posts" v-slot="{ list }">
      <div
        v-for="post in list
          .sort((a, b) => -a.date.localeCompare(b.date))
          .slice(0, 10)"
        :key="post.date"
      >
        <h2>
          <NuxtLink :to="`${post._path}/`">
            {{ post.title || post._path.split(/^\/posts\/(.+)$/).join('') }}
          </NuxtLink>
        </h2>
        <p>
          {{
            new Date(post.date).toLocaleDateString(undefined, {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })
          }}
        </p>
        <div>{{ post.description }}</div>
      </div>
    </ContentList>
  </main>
</template>
