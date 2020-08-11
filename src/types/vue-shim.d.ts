declare module '*.vue' {
  import Vue from 'vue'

  // メソッドを参照できるようにする
  interface Options {
    options: {
      // eslint-disable-next-line @typescript-eslint/ban-types
      methods: { [key: string]: Function }
    }
  }
  const vue: typeof Vue & Options

  export default vue
}
