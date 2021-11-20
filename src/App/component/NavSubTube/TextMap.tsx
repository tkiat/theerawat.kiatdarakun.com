import React from 'react'

import {ReactComponent as UpperABorder} from './TextMap/a_uppercase-border.svg'
import {ReactComponent as UpperCBorder} from './TextMap/c_uppercase-border.svg'
import {ReactComponent as UpperDBorder} from './TextMap/d_uppercase-border.svg'
import {ReactComponent as UpperEBorder} from './TextMap/e_uppercase-border.svg'
import {ReactComponent as UpperFBorder} from './TextMap/f_uppercase-border.svg'
import {ReactComponent as UpperGBorder} from './TextMap/g_uppercase-border.svg'
import {ReactComponent as UpperHBorder} from './TextMap/h_uppercase-border.svg'
import {ReactComponent as UpperIBorder} from './TextMap/i_uppercase-border.svg'
import {ReactComponent as UpperLBorder} from './TextMap/l_uppercase-border.svg'
import {ReactComponent as UpperMBorder} from './TextMap/m_uppercase-border.svg'
import {ReactComponent as UpperOBorder} from './TextMap/o_uppercase-border.svg'
import {ReactComponent as UpperPBorder} from './TextMap/p_uppercase-border.svg'
import {ReactComponent as UpperQBorder} from './TextMap/q_uppercase-border.svg'
import {ReactComponent as UpperRBorder} from './TextMap/r_uppercase-border.svg'
import {ReactComponent as UpperSBorder} from './TextMap/s_uppercase-border.svg'
import {ReactComponent as UpperTBorder} from './TextMap/t_uppercase-border.svg'
import {ReactComponent as UpperUBorder} from './TextMap/u_uppercase-border.svg'
import {ReactComponent as UpperVBorder} from './TextMap/v_uppercase-border.svg'
import {ReactComponent as UpperWBorder} from './TextMap/w_uppercase-border.svg'

import {ReactComponent as UpperAMask} from './TextMap/a_uppercase-mask.svg'
import {ReactComponent as UpperCMask} from './TextMap/c_uppercase-mask.svg'
import {ReactComponent as UpperDMask} from './TextMap/d_uppercase-mask.svg'
import {ReactComponent as UpperEMask} from './TextMap/e_uppercase-mask.svg'
import {ReactComponent as UpperFMask} from './TextMap/f_uppercase-mask.svg'
import {ReactComponent as UpperGMask} from './TextMap/g_uppercase-mask.svg'
import {ReactComponent as UpperHMask} from './TextMap/h_uppercase-mask.svg'
import {ReactComponent as UpperIMask} from './TextMap/i_uppercase-mask.svg'
import {ReactComponent as UpperLMask} from './TextMap/l_uppercase-mask.svg'
import {ReactComponent as UpperMMask} from './TextMap/m_uppercase-mask.svg'
import {ReactComponent as UpperOMask} from './TextMap/o_uppercase-mask.svg'
import {ReactComponent as UpperPMask} from './TextMap/p_uppercase-mask.svg'
import {ReactComponent as UpperQMask} from './TextMap/q_uppercase-mask.svg'
import {ReactComponent as UpperRMask} from './TextMap/r_uppercase-mask.svg'
import {ReactComponent as UpperSMask} from './TextMap/s_uppercase-mask.svg'
import {ReactComponent as UpperTMask} from './TextMap/t_uppercase-mask.svg'
import {ReactComponent as UpperUMask} from './TextMap/u_uppercase-mask.svg'
import {ReactComponent as UpperVMask} from './TextMap/v_uppercase-mask.svg'
import {ReactComponent as UpperWMask} from './TextMap/w_uppercase-mask.svg'

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
    H: <UpperHBorder />,
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
    H: <UpperHMask />,
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
