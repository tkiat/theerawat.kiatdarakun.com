import React from "react"
import {useImmer} from "use-immer"

import {Dimension} from "@types-basic"
import {useDebounce} from "./useDebounce"

type P = {msDelay: number}
export const useViewportDimensions = ({msDelay}: P): Dimension => {
  const [dimensions, setDimensions] = useImmer<Dimension>({
    h: document.documentElement.clientHeight,
    w: document.documentElement.clientWidth,
  })
  const debouncedDimension = useDebounce<Dimension>(dimensions, msDelay)

  React.useEffect(() => {
    const debouncedHandleResize = () => {
      setDimensions(d => {
        d.h = document.documentElement.clientHeight
        d.w = document.documentElement.clientWidth
      })
    }
    window.addEventListener("resize", debouncedHandleResize)
    return () => {
      window.removeEventListener("resize", debouncedHandleResize)
    }
  }, [setDimensions])

  return debouncedDimension
}
