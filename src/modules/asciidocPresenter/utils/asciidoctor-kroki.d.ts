declare module 'asciidoctor-kroki' {
  export function register(
    registry: typeof import('@asciidoctor/core').Asciidoctor.Extensions
  ): typeof import('@asciidoctor/core').Asciidoctor.Extensions
}
