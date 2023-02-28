import React from "react"
import * as jsYaml from "js-yaml"
import {Updater, useImmer} from "use-immer"

import {capitalize, isType} from "@app/share"

import {TooltipText} from "../../share"
import {AvgChart} from "./Consumables/AvgChart"
import {Cooking} from "./Consumables/Cooking"
import {WeekTable} from "./Consumables/WeekTable"
import {WeeklySummary, createAvgWeeklySummary, createWeeklySummaries} from "./Consumables/share"
import {Weeks, ConsumableType, consumableTypes, isWeeks} from "./Consumables/week"

const source = "/character/consumables/record.yaml"
const avgSummaryDefaultOptions = [4, 12, 52]

type Cur = {
  display: string,
  consumables: Set<ConsumableType>,
}

export const Consumables = (): React.ReactElement => {
  const [weeks, setWeeks] = React.useState<Weeks>({})
  const [avgSummaries, setAvgSummaries] = React.useState<WeeklySummary>({})

  const [cur, setCur] = useImmer<Cur>({
    display: avgSummaryDefaultOptions[0] + "",
//     display: "2023-02-11"
    consumables: new Set([0, 1].map(x => consumableTypes[x])),
  })

  React.useEffect((): (() => void) => {
    let mounted = true;

    (async () => {
      const res = await fetch(source)

      if (mounted) {
        const t = res.headers.get("content-type")
        if (t && t.indexOf("text/yaml") !== -1) {
          const c = jsYaml.load(await res.text())
          if (isWeeks(c)) setWeeks(c)
        } else {
          console.error("the content-type of " + source + " is not yaml")
        }
      }
    })()

    return () => { mounted = false }
  }, [])

  React.useEffect((): (() => void) | undefined => {
    if (Object.keys(weeks).length === 0) return

    const numWeeks = Object.keys(weeks).length
    const avgSummaryOptions = []
    for (const x of avgSummaryDefaultOptions) {
      if (numWeeks > x) avgSummaryOptions.push(x)
      else break
    }
    avgSummaryOptions.push(numWeeks)

    const weeklySummaries = createWeeklySummaries(weeks)

    setAvgSummaries(avgSummaryOptions.reduce((acc, cur) => {
      acc[cur] = createAvgWeeklySummary(weeklySummaries.slice(0, cur), cur)
      return acc
    }, {} as WeeklySummary))
  }, [weeks])

  return (
    <section>
      <h2>Consumables</h2>

      <section>
        <h3 className="highlight">Record</h3>

        <div className="consumables-panel">
          <Why />&ensp;
          <How /> —&nbsp;
          <label className="consumables-panel__label" htmlFor="consumables-panel-select">
            {cur.display in avgSummaries ? "Single Week" : "Weekly Avg." }
          </label>
          <Select
            cur={cur.display}
            setCur={setCur}
            entriesGroup1={Object.keys(avgSummaries)}
            entriesGroup2={Object.keys(weeks)}
          />
          <Checkboxes cur={cur.consumables} setCur={setCur} />
          <hr />
        </div>

        <div className="consumables-display-container">
          {
            cur.display in avgSummaries ?
              <AvgChart consumables={cur.consumables} avgSummary={avgSummaries[cur.display]} />
            : <WeekTable consumables={cur.consumables} week={weeks[cur.display]} />
          }
        </div>
      </section>

      <section>
        <Cooking />
      </section>
    </section>
  )
}

type SelectInp = {
  cur: string,
  setCur: Updater<Cur>,
  entriesGroup1: string[],
  entriesGroup2: string[],
}
const Select = ({cur, setCur, entriesGroup1, entriesGroup2}: SelectInp):
  React.ReactElement =>
  <>
    <select
      id="consumables-panel-select"
      key={entriesGroup1.length && entriesGroup2.length ?
        "not loaded" : "loaded"}
      onChange={e => setCur(d => {d.display = e.target.value})}
      defaultValue={cur}
    >
      <optgroup label="Weekly Average">
        {
          entriesGroup1.map((x, i) =>
            <option key={i} value={x}>Last {x} Weeks</option>
          )
        }
      </optgroup>
      <optgroup label="Single Week">
        {
          entriesGroup2.map((x, i) =>
            <option key={i} value={x}>{x}</option>
          )
        }
      </optgroup>
    </select>
  </>

type CheckboxInp = {
  cur: Set<ConsumableType>,
  setCur: Updater<Cur>,
}
const Checkboxes = ({cur, setCur}: CheckboxInp): React.ReactElement =>
  <>
    {
      consumableTypes.map((x, i) =>
        <label className="consumables-panel__checkbox" key={i}>
          <input
            type="checkbox"
            value={x}
            checked={cur.has(x)}
            onChange={e => {
              const v = e.target.value
              if(isType(v, consumableTypes)) {
                setCur(d => {
                  e.target.checked ?
                    d.consumables = new Set(d.consumables.add(v))
                  : d.consumables = new Set([...d.consumables].filter(x => x !== v))
                })
              }
            }}
          />
          {capitalize(x)}
        </label>
      )
    }
  </>

const Why = (): React.ReactElement =>
  <TooltipText text="Why?">
    <p>I live my life according to the realization that what truly matter cannot go beyond the flow inherent to sentient beings, and I subjectively prioritize my flow first. This results in me giving the following priorities: nonprocessed &gt; minimally processed &gt; processed &gt; ultra-processed, no waste &gt; more waste, and no fuel &gt; shorter delivery &gt; longer delivery and minimizing unnecessary impact to the environment and suffering upon other sentient beings. Trade-offs may exist but I shall use good judgment.</p>

    <p>This recording should not only remind me this realization but also serve as one practical example of a possible lifestyle based on this realization. This will also support the relevant works (that I am working on).</p>
  </TooltipText>

const How = (): React.ReactElement =>
  <TooltipText text="How?">
    <p>I just weigh and record almost all consumables I bought. While it sounds tedious, I often reuse numbers.</p>

    <ul>
      <li><b className="highlight">Non-vegan</b>: Rather than veganism (that minimizes animal products), I actually want to minimize unnecessary suffering in my own terms, which means I still consume animal products in some occasions. I still use the “vegan” term in my record as it is understood by many; I just don't record these non-vegan products in those occasions here.</li>
      <li><b className="highlight">Health</b>: I regard consumables that are harmful for health regardless of the amount as <i>unhealthy</i> (like typical ultra-processed food). When I am not sure about that, I regard it as <i>probably unhealthy</i> (e.g., processed food in a shop that I don't know what happens behind the scenes).</li>
      <li><b className="highlight">Delivery</b>: I exclude the delivery price and packaging waste to make it more universal to the reader. Unlike <i>private</i> delivery, <i>public</i> delivery targets multiple destinations per trip. I divide the share accordingly, like half the actual distance when I share half the order with another person.</li>
    </ul>
  </TooltipText>
