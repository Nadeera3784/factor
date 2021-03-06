/**
 * Had to create this because errors are thrown if there are variables in dynamic import()
 * Ideally, DayJs should give a programmatic way of doing this.
 */
export default {
  af: (): Promise<any> => import("dayjs/locale/af"),
  ar: (): Promise<any> => import("dayjs/locale/ar"),
  az: (): Promise<any> => import("dayjs/locale/az"),
  be: (): Promise<any> => import("dayjs/locale/be"),
  bg: (): Promise<any> => import("dayjs/locale/bg"),
  bi: (): Promise<any> => import("dayjs/locale/bi"),
  bm: (): Promise<any> => import("dayjs/locale/bm"),
  bn: (): Promise<any> => import("dayjs/locale/bn"),
  bo: (): Promise<any> => import("dayjs/locale/bo"),
  br: (): Promise<any> => import("dayjs/locale/br"),
  bs: (): Promise<any> => import("dayjs/locale/bs"),
  ca: (): Promise<any> => import("dayjs/locale/ca"),
  cs: (): Promise<any> => import("dayjs/locale/cs"),
  cv: (): Promise<any> => import("dayjs/locale/cv"),
  cy: (): Promise<any> => import("dayjs/locale/cy"),
  da: (): Promise<any> => import("dayjs/locale/da"),
  de: (): Promise<any> => import("dayjs/locale/de"),
  dv: (): Promise<any> => import("dayjs/locale/dv"),
  el: (): Promise<any> => import("dayjs/locale/el"),
  en: (): Promise<any> => import("dayjs/locale/en"),
  eo: (): Promise<any> => import("dayjs/locale/eo"),
  es: (): Promise<any> => import("dayjs/locale/es"),
  et: (): Promise<any> => import("dayjs/locale/et"),
  eu: (): Promise<any> => import("dayjs/locale/eu"),
  fa: (): Promise<any> => import("dayjs/locale/fa"),
  fi: (): Promise<any> => import("dayjs/locale/fi"),
  fo: (): Promise<any> => import("dayjs/locale/fo"),
  fr: (): Promise<any> => import("dayjs/locale/fr"),
  fy: (): Promise<any> => import("dayjs/locale/fy"),
  ga: (): Promise<any> => import("dayjs/locale/ga"),
  gd: (): Promise<any> => import("dayjs/locale/gd"),
  gl: (): Promise<any> => import("dayjs/locale/gl"),
  gu: (): Promise<any> => import("dayjs/locale/gu"),
  he: (): Promise<any> => import("dayjs/locale/he"),
  hi: (): Promise<any> => import("dayjs/locale/hi"),
  hr: (): Promise<any> => import("dayjs/locale/hr"),
  hu: (): Promise<any> => import("dayjs/locale/hu"),
  id: (): Promise<any> => import("dayjs/locale/id"),
  is: (): Promise<any> => import("dayjs/locale/is"),
  it: (): Promise<any> => import("dayjs/locale/it"),
  ja: (): Promise<any> => import("dayjs/locale/ja"),
  jv: (): Promise<any> => import("dayjs/locale/jv"),
  ka: (): Promise<any> => import("dayjs/locale/ka"),
  kk: (): Promise<any> => import("dayjs/locale/kk"),
  km: (): Promise<any> => import("dayjs/locale/km"),
  kn: (): Promise<any> => import("dayjs/locale/kn"),
  ko: (): Promise<any> => import("dayjs/locale/ko"),
  ku: (): Promise<any> => import("dayjs/locale/ku"),
  ky: (): Promise<any> => import("dayjs/locale/ky"),
  lb: (): Promise<any> => import("dayjs/locale/lb"),
  lo: (): Promise<any> => import("dayjs/locale/lo"),
  lt: (): Promise<any> => import("dayjs/locale/lt"),
  lv: (): Promise<any> => import("dayjs/locale/lv"),
  me: (): Promise<any> => import("dayjs/locale/me"),
  mi: (): Promise<any> => import("dayjs/locale/mi"),
  mk: (): Promise<any> => import("dayjs/locale/mk"),
  ml: (): Promise<any> => import("dayjs/locale/ml"),
  mn: (): Promise<any> => import("dayjs/locale/mn"),
  mr: (): Promise<any> => import("dayjs/locale/mr"),
  ms: (): Promise<any> => import("dayjs/locale/ms"),
  mt: (): Promise<any> => import("dayjs/locale/mt"),
  my: (): Promise<any> => import("dayjs/locale/my"),
  nb: (): Promise<any> => import("dayjs/locale/nb"),
  ne: (): Promise<any> => import("dayjs/locale/ne"),
  nl: (): Promise<any> => import("dayjs/locale/nl"),
  nn: (): Promise<any> => import("dayjs/locale/nn"),
  pl: (): Promise<any> => import("dayjs/locale/pl"),
  pt: (): Promise<any> => import("dayjs/locale/pt"),
  ro: (): Promise<any> => import("dayjs/locale/ro"),
  ru: (): Promise<any> => import("dayjs/locale/ru"),
  rw: (): Promise<any> => import("dayjs/locale/rw"),
  sd: (): Promise<any> => import("dayjs/locale/sd"),
  se: (): Promise<any> => import("dayjs/locale/se"),
  si: (): Promise<any> => import("dayjs/locale/si"),
  sk: (): Promise<any> => import("dayjs/locale/sk"),
  sl: (): Promise<any> => import("dayjs/locale/sl"),
  sq: (): Promise<any> => import("dayjs/locale/sq"),
  sr: (): Promise<any> => import("dayjs/locale/sr"),
  ss: (): Promise<any> => import("dayjs/locale/ss"),
  sv: (): Promise<any> => import("dayjs/locale/sv"),
  sw: (): Promise<any> => import("dayjs/locale/sw"),
  ta: (): Promise<any> => import("dayjs/locale/ta"),
  te: (): Promise<any> => import("dayjs/locale/te"),
  tet: (): Promise<any> => import("dayjs/locale/tet"),
  tg: (): Promise<any> => import("dayjs/locale/tg"),
  th: (): Promise<any> => import("dayjs/locale/th"),
  tk: (): Promise<any> => import("dayjs/locale/tk"),
  tlh: (): Promise<any> => import("dayjs/locale/tlh"),
  tr: (): Promise<any> => import("dayjs/locale/tr"),
  tzl: (): Promise<any> => import("dayjs/locale/tzl"),
  tzm: (): Promise<any> => import("dayjs/locale/tzm"),
  uk: (): Promise<any> => import("dayjs/locale/uk"),
  ur: (): Promise<any> => import("dayjs/locale/ur"),
  uz: (): Promise<any> => import("dayjs/locale/uz"),
  vi: (): Promise<any> => import("dayjs/locale/vi"),
  yo: (): Promise<any> => import("dayjs/locale/yo"),
  zh: (): Promise<any> => import("dayjs/locale/zh"),
} as Record<string, () => Promise<any>>
