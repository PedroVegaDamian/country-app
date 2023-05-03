export interface Country {
  name: Name;
  tld?: string[];
  cca2: string;
  ccn3?: string;
  cca3: string;
  independent?: boolean;
  status: Status;
  unMember: boolean;
  currencies?: Currencies;
  idd: Idd;
  capital?: string[];
  altSpellings: string[];
  region: Region;
  subregion?: string;
  languages?: { [key: string]: string };
  translations: { [key: string]: Translation };
  latlng: number[];
  landlocked: boolean;
  area: number;
  demonyms?: Demonyms;
  flag: string;
  maps: Maps;
  population: number;
  fifa?: string;
  car: Car;
  timezones: string[];
  continents: Continent[];
  flags: Flags;
  coatOfArms: CoatOfArms;
  startOfWeek: StartOfWeek;
  capitalInfo: CapitalInfo;
  postalCode?: PostalCode;
  cioc?: string;
  borders?: string[];
  gini?: { [key: string]: number };
}

export interface CapitalInfo {
  latlng?: number[];
}

export interface Car {
  signs?: string[];
  side: Side;
}

export enum Side {
  Left = "left",
  Right = "right",
}

export interface CoatOfArms {
  png?: string;
  svg?: string;
}

export enum Continent {
  Africa = "Africa",
  Antarctica = "Antarctica",
  Asia = "Asia",
  Europe = "Europe",
  NorthAmerica = "North America",
  Oceania = "Oceania",
  SouthAmerica = "South America",
}

export interface Currencies {
  DKK?: TartuGecko;
  FOK?: TartuGecko;
  PKR?: TartuGecko;
  PLN?: TartuGecko;
  JOD?: TartuGecko;
  LSL?: TartuGecko;
  ZAR?: TartuGecko;
  EUR?: TartuGecko;
  TWD?: TartuGecko;
  KPW?: TartuGecko;
  IRR?: TartuGecko;
  IQD?: TartuGecko;
  ARS?: TartuGecko;
  MOP?: TartuGecko;
  AMD?: TartuGecko;
  KRW?: TartuGecko;
  AUD?: TartuGecko;
  PAB?: TartuGecko;
  USD?: TartuGecko;
  MNT?: TartuGecko;
  XOF?: TartuGecko;
  RSD?: TartuGecko;
  ETB?: TartuGecko;
  TTD?: TartuGecko;
  DJF?: TartuGecko;
  BSD?: TartuGecko;
  CHF?: TartuGecko;
  UAH?: TartuGecko;
  GMD?: TartuGecko;
  NAD?: TartuGecko;
  UYU?: TartuGecko;
  SBD?: TartuGecko;
  DZD?: TartuGecko;
  MAD?: TartuGecko;
  MRU?: TartuGecko;
  SCR?: TartuGecko;
  THB?: TartuGecko;
  MMK?: TartuGecko;
  FKP?: TartuGecko;
  BYN?: TartuGecko;
  BWP?: TartuGecko;
  ERN?: TartuGecko;
  BZD?: TartuGecko;
  CKD?: TartuGecko;
  NZD?: TartuGecko;
  NGN?: TartuGecko;
  GBP?: TartuGecko;
  GEL?: TartuGecko;
  ISK?: TartuGecko;
  SOS?: TartuGecko;
  MUR?: TartuGecko;
  COP?: TartuGecko;
  CUC?: TartuGecko;
  CUP?: TartuGecko;
  HUF?: TartuGecko;
  CDF?: TartuGecko;
  LKR?: TartuGecko;
  PEN?: TartuGecko;
  BIF?: TartuGecko;
  KYD?: TartuGecko;
  INR?: TartuGecko;
  XCD?: TartuGecko;
  XAF?: TartuGecko;
  LAK?: TartuGecko;
  RWF?: TartuGecko;
  TZS?: TartuGecko;
  KHR?: TartuGecko;
  ZWL?: TartuGecko;
  NOK?: TartuGecko;
  MDL?: TartuGecko;
  KES?: TartuGecko;
  PHP?: TartuGecko;
  VES?: TartuGecko;
  KID?: TartuGecko;
  SYP?: TartuGecko;
  MKD?: TartuGecko;
  GIP?: TartuGecko;
  MYR?: TartuGecko;
  PGK?: TartuGecko;
  EGP?: TartuGecko;
  ILS?: TartuGecko;
  JMD?: TartuGecko;
  MXN?: TartuGecko;
  BBD?: TartuGecko;
  SEK?: TartuGecko;
  SZL?: TartuGecko;
  LYD?: TartuGecko;
  ANG?: TartuGecko;
  CZK?: TartuGecko;
  GYD?: TartuGecko;
  SLL?: TartuGecko;
  AED?: TartuGecko;
  ZMW?: TartuGecko;
  PYG?: TartuGecko;
  JEP?: TartuGecko;
  KWD?: TartuGecko;
  HNL?: TartuGecko;
  SAR?: TartuGecko;
  ALL?: TartuGecko;
  VUV?: TartuGecko;
  BGN?: TartuGecko;
  AOA?: TartuGecko;
  SSP?: TartuGecko;
  AZN?: TartuGecko;
  BTN?: TartuGecko;
  AFN?: TartuGecko;
  SHP?: TartuGecko;
  BMD?: TartuGecko;
  FJD?: TartuGecko;
  SRD?: TartuGecko;
  TVD?: TartuGecko;
  GTQ?: TartuGecko;
  DOP?: TartuGecko;
  XPF?: TartuGecko;
  TOP?: TartuGecko;
  BRL?: TartuGecko;
  YER?: TartuGecko;
  IMP?: TartuGecko;
  IDR?: TartuGecko;
  GGP?: TartuGecko;
  MVR?: TartuGecko;
  CVE?: TartuGecko;
  QAR?: TartuGecko;
  CLP?: TartuGecko;
  BOB?: TartuGecko;
  LBP?: TartuGecko;
  CAD?: TartuGecko;
  KGS?: TartuGecko;
  TND?: TartuGecko;
  MGA?: TartuGecko;
  HKD?: TartuGecko;
  NIO?: TartuGecko;
  UGX?: TartuGecko;
  BHD?: TartuGecko;
  BND?: TartuGecko;
  SGD?: TartuGecko;
  GHS?: TartuGecko;
  HTG?: TartuGecko;
  RON?: TartuGecko;
  WST?: TartuGecko;
  OMR?: TartuGecko;
  SDG?: BAM;
  TJS?: TartuGecko;
  KZT?: TartuGecko;
  BAM?: BAM;
  VND?: TartuGecko;
  TMT?: TartuGecko;
  UZS?: TartuGecko;
  RUB?: TartuGecko;
  MWK?: TartuGecko;
  STN?: TartuGecko;
  TRY?: TartuGecko;
  NPR?: TartuGecko;
  CNY?: TartuGecko;
  KMF?: TartuGecko;
  JPY?: TartuGecko;
  CRC?: TartuGecko;
  AWG?: TartuGecko;
  LRD?: TartuGecko;
  MZN?: TartuGecko;
  BDT?: TartuGecko;
  GNF?: TartuGecko;
}

export interface TartuGecko {
  name: string;
  symbol: string;
}

export interface BAM {
  name: string;
}

export interface Demonyms {
  eng: Eng;
  fra?: Eng;
}

export interface Eng {
  f: string;
  m: string;
}

export interface Flags {
  png: string;
  svg: string;
  alt?: string;
}

export interface Idd {
  root?: string;
  suffixes?: string[];
}

export interface Maps {
  googleMaps: string;
  openStreetMaps: string;
}

export interface Name {
  common: string;
  official: string;
  nativeName?: { [key: string]: Translation };
}

export interface Translation {
  official: string;
  common: string;
}

export interface PostalCode {
  format: string;
  regex?: string;
}

export enum Region {
  Africa = "Africa",
  Americas = "Americas",
  Antarctic = "Antarctic",
  Asia = "Asia",
  Europe = "Europe",
  Oceania = "Oceania",
}

export enum StartOfWeek {
  Monday = "monday",
  Saturday = "saturday",
  Sunday = "sunday",
}

export enum Status {
  OfficiallyAssigned = "officially-assigned",
  UserAssigned = "user-assigned",
}
