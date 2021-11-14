import React from "react"
import {useImmer} from "use-immer"

const mkInitIndex = (k: string) => {
  const temp = parseInt(localStorage.getItem(k) ?? "0")
  return isNaN(temp) ? 0 : temp
}

type TabItem = {title: string, content?: React.ReactElement}
type P = {items: TabItem[], localKey: string}
export const TabsContent = ({items, localKey}: P): React.ReactElement => {
  const [cur, setCur] = useImmer(mkInitIndex(localKey))
  const curRef = React.useRef<number>(cur)
  React.useEffect(() => {
    const cleanup = () =>
      localStorage.setItem(localKey, curRef.current.toString())
    window.addEventListener("beforeunload", cleanup)
    return () => {
      cleanup()
      window.removeEventListener("beforeunload", cleanup)
    }
  }, [])

  return (
    <>
      <div className="tab-content">
        <div className="tab-content__tablist" role="tablist"
             aria-label="content tab-content"
        >
        {items.map(({content, title}, i) => !content
          ? <div className="item item--decorate" key={i}>{title + " >"}</div>
          : <button
              className={"item item--button" +
                (cur === i ? " item--active" : "")}
              role="tab"
              id={"tab" + i}
              key={i}
              onClick={() => {
                setCur(i)
                curRef.current = i
              }}
              aria-controls={"panel" + i}
              aria-selected={cur === i ? "true" : "false"}
            >
              {title}
            </button>
        )}
        </div>
      </div>
    {items.map(({content}, i) => (
      <div
        role="tabpanel"
        aria-labelledby={"tab" + i}
        id={"panel" + i}
        key={i}
        style={{display: cur === i ? "block" : "none"}}
      >
        {content}
      </div>
    ))}
    </>
  )
}
