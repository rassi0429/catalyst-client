import { GlobalTimeLine } from "./global";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { Status } from "./util/type";
import {
  StyledButton,
  StyledImage,
  StyledMask,
  StyledText,
} from "../../unit/package/StyledUix/main";
import { Color, Font, Material, Sprite } from "./util/style";
import { StyledSpace } from "./util/style";
import {
  Canvas,
  HorizontalLayout,
  LayoutElement,
  RectTransform,
  VerticalLayout,
} from "../../unit/package/PrimitiveUix/main";
import { HyperLink } from "../../unit/package/ButtonEvent/main";

export const Catalyst = () => {
  const [statuses, setStatuses] = useState<Status[]>([]);
  const getStatus = useCallback(() => {
    axios
      .get("https://api.natsuneko.com/catalyst/v1/timeline/firehose")
      .then((res) => {
        //console.log(res.data)
        console.log("get from catalyst");
        setStatuses(res.data.statuses);
      });
  }, []);

  useEffect(() => {
    getStatus();
  }, [getStatus]);

  return (
    <StyledSpace>
      <Canvas size={[850, 1580]}>
        <StyledImage
          styledColor={Color.background}
          styledMaterial={Material.base}
          styledSprite={Sprite.kadomaru}
        />
        <RectTransform
          anchorMax={[0.5, 0.5]}
          anchorMin={[0.5, 0.5]}
          offsetMax={[32, 32]}
          offsetMin={[-32, -32]}
        >
          <StyledImage
            flipHorizontally
            styledMaterial={Material.backLogo}
            styledSprite={Sprite.backLogo}
          />
        </RectTransform>
        <VerticalLayout
          forceExpandChildHeight={false}
          paddingBottom={25}
          paddingLeft={25}
          paddingRight={25}
          paddingTop={25}
          spacing={10}
        >
          <LayoutElement preferredHeight={96}>
            <StyledButton
              styledHighlightColor={Color.gray}
              styledNormalColor={Color.transparent}
              styledSprite={Sprite.kadomaru}
            >
              <HyperLink
                reasonEn="Open Catalyst in web browser"
                reasonJa="Catalystをwebで開く"
                reasonKo="Catalyst를 엽니다"
                urlEn="https://catalyst.natsuneko.com"
                urlJa="https://catalyst.natsuneko.com"
                urlKo="https://catalyst.natsuneko.com"
              />
              <HorizontalLayout
                forceExpandChildWidth={false}
                paddingLeft={5}
                paddingRight={5}
                spacing={10}
              >
                <LayoutElement preferredWidth={96}>
                  <StyledImage
                    styledMaterial={Material.front}
                    styledSprite={Sprite.logo}
                  />
                </LayoutElement>
                <LayoutElement flexibleWidth={1}>
                  <StyledText
                    content="Catalyst"
                    styledColor={Color.white}
                    styledFont={Font.main}
                    styledMaterial={Material.text}
                    verticalAlign="Middle"
                  />
                </LayoutElement>
              </HorizontalLayout>
            </StyledButton>
          </LayoutElement>
          <LayoutElement flexibleHeight={1}>
            <StyledMask styledSprite={Sprite.kadomaru}>
              <GlobalTimeLine statuses={statuses} />
            </StyledMask>
          </LayoutElement>
        </VerticalLayout>
      </Canvas>
    </StyledSpace>
  );
};
