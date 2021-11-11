declare module '@types-basic' {
  export type Coordinate = {x: number; y: number}
  export type Dimension = {h: number; w: number}
  export type Line = {from: Coordinate; to: Coordinate}

  type ERROR = 1
  type SUCCESS = 0
  export type Status = Readonly<ERROR | SUCCESS>
}
