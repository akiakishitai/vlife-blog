<template>
  <div>
    <div class="markdown-body line-numbers" v-html="body"></div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import '@/helpers/string.extension'

@Component
export default class ArticleBody extends Vue {
  /**
   * HTMLレンダリングされた _Markdown_ ソース。
   */
  @Prop({ required: true }) renderd!: string

  /**
   * HTMLの `H1` 要素（タイトル）があれば削除。
   */
  get body(): string {
    return this.renderd.without(/<h1.+?<\/h1>/)
  }
}
</script>

<style lang="scss">
.markdown-body {
  // Heading Level
  h1 {
    @apply text-4xl font-light;
  }
  h2 {
    @apply text-3xl font-normal mt-8;
  }
  h3 {
    @apply text-2xl font-semibold mt-6;
  }
  h4 {
    @apply text-xl font-semibold mt-4;
  }
  h5 {
    @apply text-lg font-semibold mt-4;
  }
  h6 {
    @apply text-base font-semibold mt-4;
  }

  // Paragraph
  p {
    @apply mt-4;
  }

  // List
  ul,
  ol {
    @apply pl-6 mt-4;
  }
  li {
    @apply mt-2;

    > ul,
    > ol {
      @apply pl-4 mt-0;
    }
  }
  ul {
    @apply list-disc;
  }
  ol {
    @apply list-decimal;
  }

  // Table
  table {
    @apply table-auto border-collapse mt-4;
  }
  tr {
    @apply border-b border-black border-opacity-50;

    &:nth-of-type(even) {
      @apply bg-primary-light bg-opacity-15;
    }
  }
  th {
    @apply px-4 py-3;
  }
  td {
    @apply px-4 py-2;
  }

  // Blockquote
  blockquote {
    @apply border-l-4 border-primary border-opacity-54;
    @apply text-black text-opacity-75 italic;
    @apply pl-4;
  }

  hr {
    @apply border-grey-500 mt-6;
  }

  a {
    @apply text-indigo-500;

    &:hover {
      @apply underline;
    }

    &:visited {
      @apply text-purple-800;
    }
  }

  // Codes
  pre,
  code {
    font-family: 'Roboto Mono', monospace;
  }

  // Inline Code
  :not(pre) code {
    @apply rounded-sm bg-primary bg-opacity-38;
    @apply px-1;

    color: rgb(var(--md-dark-text-primary-rgb));
  }

  // Code Block
  pre {
    @apply relative rounded mt-4;

    &:not([data-lang]) {
      @apply py-4 pr-6;
    }
  }
  pre[data-lang] {
    @apply pb-4;

    &::before {
      @apply text-primary-light text-opacity-54;
      @apply border-b border-dashed border-opacity-50;
      @apply -mt-2 mb-4 -ml-3;

      content: attr(data-lang);
      display: block;
    }
  }
}
</style>
