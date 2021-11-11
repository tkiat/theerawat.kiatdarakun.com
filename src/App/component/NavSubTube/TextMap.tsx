import React from 'react'

import {ReactComponent as UpperABorder} from './TextMap/_A-border.svg'
import {ReactComponent as UpperCBorder} from './TextMap/_C-border.svg'
import {ReactComponent as UpperDBorder} from './TextMap/_D-border.svg'
import {ReactComponent as UpperEBorder} from './TextMap/_E-border.svg'
import {ReactComponent as UpperFBorder} from './TextMap/_F-border.svg'
import {ReactComponent as UpperGBorder} from './TextMap/_G-border.svg'
import {ReactComponent as UpperIBorder} from './TextMap/_I-border.svg'
import {ReactComponent as UpperLBorder} from './TextMap/_L-border.svg'
import {ReactComponent as UpperMBorder} from './TextMap/_M-border.svg'
import {ReactComponent as UpperOBorder} from './TextMap/_O-border.svg'
import {ReactComponent as UpperPBorder} from './TextMap/_P-border.svg'
import {ReactComponent as UpperQBorder} from './TextMap/_Q-border.svg'
import {ReactComponent as UpperRBorder} from './TextMap/_R-border.svg'
import {ReactComponent as UpperSBorder} from './TextMap/_S-border.svg'
import {ReactComponent as UpperTBorder} from './TextMap/_T-border.svg'
import {ReactComponent as UpperUBorder} from './TextMap/_U-border.svg'
import {ReactComponent as UpperVBorder} from './TextMap/_V-border.svg'
import {ReactComponent as UpperWBorder} from './TextMap/_W-border.svg'

import {ReactComponent as UpperAMask} from './TextMap/_A-mask.svg'
import {ReactComponent as UpperCMask} from './TextMap/_C-mask.svg'
import {ReactComponent as UpperDMask} from './TextMap/_D-mask.svg'
import {ReactComponent as UpperEMask} from './TextMap/_E-mask.svg'
import {ReactComponent as UpperFMask} from './TextMap/_F-mask.svg'
import {ReactComponent as UpperGMask} from './TextMap/_G-mask.svg'
import {ReactComponent as UpperIMask} from './TextMap/_I-mask.svg'
import {ReactComponent as UpperLMask} from './TextMap/_L-mask.svg'
import {ReactComponent as UpperMMask} from './TextMap/_M-mask.svg'
import {ReactComponent as UpperOMask} from './TextMap/_O-mask.svg'
import {ReactComponent as UpperPMask} from './TextMap/_P-mask.svg'
import {ReactComponent as UpperQMask} from './TextMap/_Q-mask.svg'
import {ReactComponent as UpperRMask} from './TextMap/_R-mask.svg'
import {ReactComponent as UpperSMask} from './TextMap/_S-mask.svg'
import {ReactComponent as UpperTMask} from './TextMap/_T-mask.svg'
import {ReactComponent as UpperUMask} from './TextMap/_U-mask.svg'
import {ReactComponent as UpperVMask} from './TextMap/_V-mask.svg'
import {ReactComponent as UpperWMask} from './TextMap/_W-mask.svg'

import {ReactComponent as LowerABorder} from './TextMap/a-border.svg'
import {ReactComponent as LowerBBorder} from './TextMap/b-border.svg'
import {ReactComponent as LowerCBorder} from './TextMap/c-border.svg'
import {ReactComponent as LowerDBorder} from './TextMap/d-border.svg'
import {ReactComponent as LowerEBorder} from './TextMap/e-border.svg'
import {ReactComponent as LowerFBorder} from './TextMap/f-border.svg'
import {ReactComponent as LowerGBorder} from './TextMap/g-border.svg'
import {ReactComponent as LowerHBorder} from './TextMap/h-border.svg'
import {ReactComponent as LowerIBorder} from './TextMap/i-border.svg'
import {ReactComponent as LowerKBorder} from './TextMap/k-border.svg'
import {ReactComponent as LowerLBorder} from './TextMap/l-border.svg'
import {ReactComponent as LowerMBorder} from './TextMap/m-border.svg'
import {ReactComponent as LowerNBorder} from './TextMap/n-border.svg'
import {ReactComponent as LowerOBorder} from './TextMap/o-border.svg'
import {ReactComponent as LowerPBorder} from './TextMap/p-border.svg'
import {ReactComponent as LowerRBorder} from './TextMap/r-border.svg'
import {ReactComponent as LowerSBorder} from './TextMap/s-border.svg'
import {ReactComponent as LowerTBorder} from './TextMap/t-border.svg'
import {ReactComponent as LowerUBorder} from './TextMap/u-border.svg'
import {ReactComponent as LowerVBorder} from './TextMap/v-border.svg'
import {ReactComponent as LowerWBorder} from './TextMap/w-border.svg'
import {ReactComponent as LowerYBorder} from './TextMap/y-border.svg'

import {ReactComponent as LowerAMask} from './TextMap/a-mask.svg'
import {ReactComponent as LowerBMask} from './TextMap/b-mask.svg'
import {ReactComponent as LowerCMask} from './TextMap/c-mask.svg'
import {ReactComponent as LowerDMask} from './TextMap/d-mask.svg'
import {ReactComponent as LowerEMask} from './TextMap/e-mask.svg'
import {ReactComponent as LowerFMask} from './TextMap/f-mask.svg'
import {ReactComponent as LowerGMask} from './TextMap/g-mask.svg'
import {ReactComponent as LowerHMask} from './TextMap/h-mask.svg'
import {ReactComponent as LowerIMask} from './TextMap/i-mask.svg'
import {ReactComponent as LowerKMask} from './TextMap/k-mask.svg'
import {ReactComponent as LowerLMask} from './TextMap/l-mask.svg'
import {ReactComponent as LowerMMask} from './TextMap/m-mask.svg'
import {ReactComponent as LowerNMask} from './TextMap/n-mask.svg'
import {ReactComponent as LowerOMask} from './TextMap/o-mask.svg'
import {ReactComponent as LowerPMask} from './TextMap/p-mask.svg'
import {ReactComponent as LowerRMask} from './TextMap/r-mask.svg'
import {ReactComponent as LowerSMask} from './TextMap/s-mask.svg'
import {ReactComponent as LowerTMask} from './TextMap/t-mask.svg'
import {ReactComponent as LowerUMask} from './TextMap/u-mask.svg'
import {ReactComponent as LowerVMask} from './TextMap/v-mask.svg'
import {ReactComponent as LowerWMask} from './TextMap/w-mask.svg'
import {ReactComponent as LowerYMask} from './TextMap/y-mask.svg'

type P = {[k in 'border' | 'mask']: {[index: string]: React.ReactElement}}
export const mapping: P = {
  border: {
    A: <UpperABorder />,
    C: <UpperCBorder />,
    D: <UpperDBorder />,
    E: <UpperEBorder />,
    F: <UpperFBorder />,
    G: <UpperGBorder />,
    I: <UpperIBorder />,
    L: <UpperLBorder />,
    M: <UpperMBorder />,
    O: <UpperOBorder />,
    P: <UpperPBorder />,
    Q: <UpperQBorder />,
    R: <UpperRBorder />,
    S: <UpperSBorder />,
    T: <UpperTBorder />,
    U: <UpperUBorder />,
    V: <UpperVBorder />,
    W: <UpperWBorder />,

    a: <LowerABorder />,
    b: <LowerBBorder />,
    c: <LowerCBorder />,
    d: <LowerDBorder />,
    e: <LowerEBorder />,
    f: <LowerFBorder />,
    g: <LowerGBorder />,
    h: <LowerHBorder />,
    i: <LowerIBorder />,
    k: <LowerKBorder />,
    l: <LowerLBorder />,
    m: <LowerMBorder />,
    n: <LowerNBorder />,
    o: <LowerOBorder />,
    p: <LowerPBorder />,
    r: <LowerRBorder />,
    s: <LowerSBorder />,
    t: <LowerTBorder />,
    u: <LowerUBorder />,
    v: <LowerVBorder />,
    w: <LowerWBorder />,
    y: <LowerYBorder />,
  },
  mask: {
    A: <UpperAMask />,
    C: <UpperCMask />,
    D: <UpperDMask />,
    E: <UpperEMask />,
    F: <UpperFMask />,
    G: <UpperGMask />,
    I: <UpperIMask />,
    L: <UpperLMask />,
    M: <UpperMMask />,
    O: <UpperOMask />,
    P: <UpperPMask />,
    Q: <UpperQMask />,
    R: <UpperRMask />,
    S: <UpperSMask />,
    T: <UpperTMask />,
    U: <UpperUMask />,
    V: <UpperVMask />,
    W: <UpperWMask />,

    a: <LowerAMask />,
    b: <LowerBMask />,
    c: <LowerCMask />,
    d: <LowerDMask />,
    e: <LowerEMask />,
    f: <LowerFMask />,
    g: <LowerGMask />,
    h: <LowerHMask />,
    i: <LowerIMask />,
    k: <LowerKMask />,
    l: <LowerLMask />,
    m: <LowerMMask />,
    n: <LowerNMask />,
    o: <LowerOMask />,
    p: <LowerPMask />,
    r: <LowerRMask />,
    s: <LowerSMask />,
    t: <LowerTMask />,
    u: <LowerUMask />,
    v: <LowerVMask />,
    w: <LowerWMask />,
    y: <LowerYMask />,
  },
}
