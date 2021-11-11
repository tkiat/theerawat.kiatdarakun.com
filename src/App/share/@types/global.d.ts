declare module '*.svg' {
  import React = require('react')
  export const ReactComponent:
    React.FunctionComponent<React.SVGProps<SVGSVGElement>>
}

// recursive
// declare type ImmutableObject<T> = {
//   readonly [K in keyof T]: ImmutableObject<T[K]>
// }
