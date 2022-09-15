import React from 'react'

export const Contact = (): React.ReactElement =>
  <header className="contact">
    <h1 className="contact__header">Contact</h1>
    <p className="contact__paragraph">
      <span role="img" aria-hidden="true">
        {'\u{2709}'}
      </span>{' '}
      tkiat@tutanota.com{' '}
      <span role="img" aria-hidden="true">
        {'\u{260E}'}
      </span>{' '}
      (+66)646468180
    </p>
    <a
      className="contact__link"
      href="https://raw.githubusercontent.com/tkiat/configs-and-scripts/main/configs/gpg/public.pgp"
      target="blank">
      GPG Public Key
    </a>
  </header>
