import {
  createColor,
  createFont,
  createSprite,
  createStyle,
  createUiUnlitMaterial,
} from "../../../lib/styledUnit";

const standardFonts = [
  "resdb:///dae40ca7b35fe7501bda2e4140a6860b1db47330be5d3c8ab6971fd83a70e9a5.ttf",
  "resdb:///8c1dc004996029f804283dd398ca2a05d4d33ebcba5c0d25ea13fd2026572279.ttf",
  "resdb:///f67f40c65f929f029827ab37cfdc4897dfd9ae3c28d9e98ba46e0d52e39eb97e.ttf",
  "resdb:///e1b12670fd0fd466a643f19a73ab48343cb7fe4702afa59183e7be8b47a90912.ttf",
  "resdb:///b57ed895ae9d09ba7b4b19c343a75cf39aad57156c3450e339d9d11556d7edc1.ttf",
  "resdb:///bcda0bcc22bab28ea4fedae800bfbf9ec76d71cc3b9f851779a35b7e438a839d.otf",
  "resdb:///9aee503e8c9126e238639973a7eb7830ae02b4aed2a8f453b0f86300c2b5a9af.ttf",
] as const;

export const { StyledSpace, Color, Sprite, Material, Font } = createStyle({
  Color: {
    background: createColor([0.1, 0.1, 0.1, 1]),
    white: createColor([0.92, 0.92, 0.92, 1]),
    black: createColor([0, 0, 0, 1]),
  },
  Sprite: {
    gradient: createSprite({
      url: "resdb:///a533460140ea02f8eabadc756b8a8bd0233cddcf75c8ef253ed4cc1d69e253b4.webp",
      rect: [0, 0, 1, 1],
      borders: [0, 0, 0, 0],
      scale: 1,
    }),
    gradient2: createSprite({
      url: "resdb:///68f975dbbdadf8e71a883905c3a05facebf8d1bb93f7ca6915fb9abcfa6eff50.webp",
      rect: [0, 0, 1, 1],
      borders: [0, 0, 0, 0],
      scale: 1,
    }),
    gradientGreen: createSprite({
      url: "resdb:///ca054d38974a35107231ee3538b6888f9b6dbf0f3a4aa9d75d199739ca1a3135.png",
      rect: [0, 0, 1, 1],
      borders: [0, 0, 0, 0],
      scale: 1,
    }),
    circle: createSprite({
      url: "resdb:///427a01c03424b86b4b8ffba936e4eb6cbf4be4d6773fa1f45ec004cfb526d016.png",
      rect: [0, 0, 1, 1],
      borders: [0, 0, 0, 0],
      scale: 1,
    }),
    maru: createSprite({
      url: "resdb:///427a01c03424b86b4b8ffba936e4eb6cbf4be4d6773fa1f45ec004cfb526d016.png",
      rect: [0, 0, 1, 1],
      borders: [0.5, 0.5, 0.5, 0.5],
      scale: 0.25,
    }),
    kadomaru: createSprite({
      url: "resdb:///d8495d0372ef5bb0f9eec8ad864ebf7bf7f699e713176821e6ed0f7826b78091.png",
      rect: [1, 1, 1, 1],
      borders: [0.33333, 0.33333, 0.33333, 0.33333],
      scale: 0.1,
    }),
    logo: createSprite({
      url: "https://catalyst.natsuneko.com/favicon-32x32.png",
      wrapModeU: "Clamp",
      wrapModeV: "Clamp",
    }),
    backLogo: createSprite({
      url: "https://docs.natsuneko.com/logo.png",
      wrapModeU: "Clamp",
      wrapModeV: "Clamp",
    }),
  },
  Material: {
    base: createUiUnlitMaterial({
      alphaClip: true,
      alphaCutoff: 0.5,
      offsetFactor: 10,
      offsetUnits: 500,
      sidedness: "Double",
    }),
    front: createUiUnlitMaterial({
      alphaClip: true,
      alphaCutoff: 0.5,
      offsetFactor: -10,
      offsetUnits: 0,
      sidedness: "Front",
    }),
    backLogo: createUiUnlitMaterial({
      alphaClip: true,
      alphaCutoff: 0.5,
      offsetFactor: -10,
      offsetUnits: 0,
      sidedness: "Back",
    }),
  },
  Font: {
    main: createFont({
      urls: [
        "resdb:///529360eec9dfd688614993dbd7515bc61f7651ebae6c53dd005f6247f98b30c5",
        ...standardFonts,
      ],
    }),
  },
});
