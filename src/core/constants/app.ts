import Loading from '@components/shared/Loading';

const defaultDynamicImportConfig = {
  ssr:false,
  loading:  Loading,
}

export enum EAppModules {
  SR = 'sr',
  ZID = 'zid',
  ZIM = 'zim',
  WUD = 'wud',
  BRD = 'brd',
  IRD = 'ird',
  SETTINGS = 'settings',
  RAPORTS = 'raports',
}

export const DEFAULT_APP_MODULE = EAppModules.SR;
export const SETTINGS_APP_MODULE = EAppModules.SETTINGS;
export const RAPORTS_APP_MODULE = EAppModules.RAPORTS;
