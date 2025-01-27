import {
  UnitProp,
  generateUnitConfig,
  getMainProps,
  getMirrorProps,
  getWebProps,
} from "../../../../../lib/miragex/unit/common";

const detail = {
  code: "PrimitiveUix/ContentSizeFitterVerticalLayout",
  propsConfig: {
    horizontalFit: UnitProp.EnumSizeFit("Disabled"),
    verticalFit: UnitProp.EnumSizeFit("Disabled"),
    paddingTop: UnitProp.Float(0),
    paddingLeft: UnitProp.Float(0),
    paddingBottom: UnitProp.Float(0),
    paddingRight: UnitProp.Float(0),
    spacing: UnitProp.Float(0),
    horizontalAlign: UnitProp.EnumLayoutHorizontalAlignment("Left"),
    verticalAlign: UnitProp.EnumLayoutVerticalAlignment("Top"),
    forceExpandChildWidth: UnitProp.Boolean(true),
    forceExpandChildHeight: UnitProp.Boolean(true),
  },
  children: "multi" as const,
};

export type MainProps = getMainProps<typeof detail>;
export type MirrorProps = getMirrorProps<typeof detail>;
export type WebProps = getWebProps<typeof detail>;
export const unitConfig = generateUnitConfig(detail);
