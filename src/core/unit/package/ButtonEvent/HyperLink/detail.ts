import {
  DetailBase,
  UnitProp,
  generateUnitConfig,
  getMainProps,
  getMirrorProps,
  getWebProps,
} from "../../../../../lib/miragex/unit/common";

const detail = {
  code: "ButtonEvent/HyperLink",
  propsConfig: {
    urlEn: UnitProp.Uri(""),
    urlJa: UnitProp.Uri(""),
    urlKo: UnitProp.Uri(""),
    reasonEn: UnitProp.String(""),
    reasonJa: UnitProp.String(""),
    reasonKo: UnitProp.String(""),
  },
  children: "multi",
} as const satisfies DetailBase;

export type MainProps = getMainProps<typeof detail>;
export type MirrorProps = getMirrorProps<typeof detail>;
export type WebProps = getWebProps<typeof detail>;
export const unitConfig = generateUnitConfig(detail);
