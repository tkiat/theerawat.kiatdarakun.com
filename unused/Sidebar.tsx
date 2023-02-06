{willShowCustomMenu &&
<>
  <hr className="sidebar__linebreak sidebar__linebreak--custom" />

  <section className="sidebar__section">
    <div className="sidebar__header">Custom Theme</div>
    <div className="grid">
      <BaseThemePicker />
      <WaveColorPickers />
      <DuckColorPickers />
    {!isMobile() &&
      <TubeColorPickers />
    }
    </div>
  </section>
</>
}
