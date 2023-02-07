import React from "react"

export const localSafariBypassKey = "will-skip-safari-prompt"

export const SafariWarning = () => {
  document.getElementById("loading")?.remove()
  return (
    <>
      <p>
        Sorry I have no MacBook and therefore cannot test on the Safari
        browser. <span role="img" aria-hidden="true">{"\u{1F622}"}</span>
      </p>
      <p>Switch to another browser like Firefox or
        <button
          onClick={() => {
            localStorage.setItem(localSafariBypassKey, "true")
            location.reload()
          }}
        >proceed anyway.</button>
      </p>
    </>
  )
}
