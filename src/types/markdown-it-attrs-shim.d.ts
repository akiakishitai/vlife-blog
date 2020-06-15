declare module 'markdown-it-attrs' {
  import md from 'markdown-it'

  type AttrsOption = {
    leftDelimiter?: string
    rightDelimiter?: string
    allowedAttributes?: (string | RegExp)[]
  }

  const attr: md.PluginSimple | md.PluginWithOptions<AttrsOption>
  export default attr
}
