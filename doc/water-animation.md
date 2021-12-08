# Water Flow Animation

There are two types of node: text and valve, and they appear in this order.

```
text -> valve -> text -> valve -> ... -> text
```

The water moves from one text node to another text node. At the end of the flow, water occupies both the text node and the next valve node. The exception is the last text node where the water occupies only this one node.

In this document, I would like to elaborate how to compute the water flow so that the animation looks reasonably convincing. I have got two assumptions to make the computation process easier:

- The capacity of a text node and a valve node is 100L and 20L respectively
- At the beginning, the water level is 80% of the total capacity

Assume we have 4 nodes:

```
text -> valve -> text -> valve
```

We need 4 steps to move water from the first node to the last node:

1. Drain water from the beginning node to the right node (denoted by `R-Drain`)
2. Pass water through the 2nd node to the right (`R-Pass`)
3. Pass water through the 3rd node to the right (`R-pass`)
4. Stop water at the 4th node (`R-Stop`)

This movement, along with some others, are shown in the table below.

| Current Active Node # | Target Node # | Steps                                 |
| :-------------------: | :-----------: | :------------------------------------ |
|           1           |       4       | R-Drain -> R-Pass -> R-Pass -> R-Stop |
|           2           |       3       | R-Drain -> R-Stop                     |
|           3           |       1       | L-Stop <- L-Pass <- L-Drain           |
|           2           |       1       | L-Stop <- L-Drain                     |

To animate the water flow, I put the rectangle behind each node occupying full width and height and move only along Y axis to mimic the water flow. This is probably not the most realistic animation but it is accceptable to my eye when it is fast enough. The tables below show the corresponding CSS animation for each step.

### R-Drain: Drain water to the next right text node

| Water (L) | Valve (L) | Cumulative Flow (L) |          Text Animation           |           Valve Animation           |
| :-------: | :-------: | :-----------------: | :-------------------------------: | :---------------------------------: |
|    80     |    16     |          0          |  0%{transform: translateY(20%);}  |   0%{transform: translateY(20%);}   |
|    76     |    20     |          4          |                 -                 |    4%{transform: translateY(0);}    |
|     0     |    20     |         80          | 80%{transform: translateY(100%);} |   80%{transform: translateY(0);}    |
|     0     |     0     |         100         |                 x                 | 100%{transform: translateY(-100%);} |

- Animation Duration Multiplier = 1
- Next Animation Delay Multiplier = 4/100

#### Explanation

The symbol '-' denotes the middle of the transition which is not a keyframe itself so there is no need to write this to CSS. The symbol 'x' means the animation already ends at that point. As shown in the table above, there are four steps:

1. The 80% water level assumption makes it 80L for text (100L capacity) and 16L for valve (20L capacity). We also need to shift both highlighter boxes by 20% to the bottom.
2. The next row is considered a keyframe for the valve because it is the midpoint of two different behaviors (recuding volumne and constant volume). This is not considered a keyframe for the text because it is in the middle of the constant transition from 80L to 0L. The total flow for this step is 4L (from the total of 100L in the last row) makes it 4% in the keyframe. We don't know this 100L value in advance so we actually have to compute this after everything else.
3. The next row is considered a keyframe for the text because that is the end of the animation, and it is also considered the keyframe for the valve because it is the midpoint of two different behaviors (constant volume and decreasing volume).
4. We now don't have to care about the text anymore since the animation already finishes. We use translateY(-100%) because the water flows upwards.

The cumulative water flow is not always 100L as we will see in one of the next examples. That's why we need something like Animation Duration Multiplier (just below the above table). This animation has the multiplier of 1 since I set this as a reference while `R-Pass` has 216L cumulative flow so its multipler becomes 2.16. This means the animation duration of `R-Pass` is 2.16 times of that from `R-Drain`.

We triggers the next animation when the water reaches the end of a node. This corresponds to the point where the water fill the valve (second row in the table) in this `R-Drain` case. At this point, the animation is still at 4% of its overal duration. Therefore, we set the Next Animation Delay Multiplier to 0.04.

Given the base animation duration of 1 second. The overall animation duration of `R-Drain` is `1 * Animation Duration Multiplier` or `1` second. We trigger the next animation at `overall animation duration * Next Animation Delay Multiplier = 1 * 0.04 = 0.04` seconds.

### R-Pass: Pass water to the next right node

| Water (L) | Valve (L) | Cumulative Flow (L) |            Text Animation            |           Valve Animation           |
| :-------: | :-------: | :-----------------: | :----------------------------------: | :---------------------------------: |
|     0     |     0     |          0          |  0%{transform: translateY(-100%);}   |  0%{transform: translateY(100%);}   |
|  96(top)  |     0     |         96          |                  -                   |                  -                  |
|    96     |     0     |         100         |                  -                   | 46.3%{transform: translateY(100%);} |
|    76     |    20     |         120         |                  -                   |  55.56%{transform: translateY(0);}  |
|     0     |    20     |         196         | 90.74%{transform: translateY(100%);} |  90.74%{transform: translateY(0);}  |
|     0     |     0     |         216         |                  x                   | 100%{transform: translateY(-100%);} |

- Animation Duration Multiplier = 2.16
- Next Animation Delay Multiplier = 120/216

Note: `(top)` denotes that water connects to the top of the node and disconnects to the bottom of the node

### R-Stop: Stop water at the next right node

| Water (L) | Valve (L) | Cumulative Flow (L) |          Text Animation           |           Valve Animation            |
| :-------: | :-------: | :-----------------: | :-------------------------------: | :----------------------------------: |
|     0     |     0     |          0          | 0%{transform: translateY(-100%);} |   0%{transform: translateY(100%);}   |
|  96(top)  |     0     |         20          |                 -                 |                  -                   |
|    96     |     0     |         96          |                 -                 | 82.76%{transform: translateY(100%);} |
|    80     |    16     |         100         | 100%{transform: translateY(20%);} |  100%{transform: translateY(20%);}   |

- Animation Duration Multiplier = 1
- Next Animation Delay Multiplier = 0

Note: Being the last node in the flow, the Next Animation Delay Multiplier must be 0.

### L-Drain: Drain water to the next left text node

| Water (L) | Valve (L) | Cumulative Flow (L) |           Text Animation            |           Valve Animation            |
| :-------: | :-------: | :-----------------: | :---------------------------------: | :----------------------------------: |
|    80     |     0     |          0          |   0%{transform: translateY(20%);}   |   0%{transform: translateY(20%);}    |
|    96     |     0     |         16          |                  -                  | 13.79%{transform: translateY(100%);} |
|  96(top)  |     0     |         20          |                  -                  |                  x                   |
|     0     |     0     |         116         | 100%{transform: translateY(-100%);} |                  x                   |

- Animation Duration Multiplier = 1.16
- Next Animation Delay Multiplier = 20/116

### L-Pass: Pass water to the next left text node

| Water (L) | Valve (L) | Cumulative Flow (L) |           Text Animation            |           Valve Animation           |
| :-------: | :-------: | :-----------------: | :---------------------------------: | :---------------------------------: |
|     0     |     0     |          0          |  0%{transform: translateY(100%);}   |  0%{transform: translateY(-100%);}  |
|     0     |    20     |         20          | 9.26%{transform: translateY(100%);} |  9.26%{transform: translateY(0);}   |
|    76     |    20     |         96          |                  -                  |  44.44%{transform: translateY(0);}  |
|    96     |     0     |         116         |                  -                  | 53.7%{transform: translateY(100%);} |
|  96(top)  |     0     |         120         |                  -                  |                  x                  |
|     0     |     0     |         216         | 100%{transform: translateY(-100%);} |                  x                  |

- Animation Duration Multiplier = 2.16
- Next Animation Delay Multiplier = 120/116

### L-Stop: Stop water at the next left text node

| Water (L) | Valve (L) | Cumulative Flow (L) |          Text Animation           |          Valve Animation          |
| :-------: | :-------: | :-----------------: | :-------------------------------: | :-------------------------------: |
|     0     |     0     |          0          | 0%{transform: translateY(100%);}  | 0%{transform: translateY(-100%);} |
|     0     |    20     |         20          | 20%{transform: translateY(100%);} |  20%{transform: translateY(0);}   |
|    76     |    20     |         96          |                 -                 |  96%{transform: translateY(0);}   |
|    80     |    16     |         100         | 100%{transform: translateY(20%);} | 100%{transform: translateY(20%);} |

- Animation Duration Multiplier = 1
- Next Animation Delay Multiplier = 0
