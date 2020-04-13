declare module '*.md' {
  const source: string
  export default source

  // Front Matter の属性
  export interface Attribute {
    readonly title: string
    readonly description?: string
    readonly date: string
    readonly updateAt?: string
    readonly tags: string[]
  }

  export interface Content {
    readonly attribute: Attribute
    readonly body: string
    readonly frontMatter?: string
  }
}
