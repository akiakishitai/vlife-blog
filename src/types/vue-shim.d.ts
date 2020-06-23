declare module '*.vue' {
  import Vue from 'vue'

  // メソッドを参照できるようにする
  interface Options {
    options: {
      methods: { [key: string]: Function }
    }
  }
  const vue: typeof Vue & Options

  export default vue
}
