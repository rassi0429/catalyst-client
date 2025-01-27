import axios from "axios";
import { useState, useCallback, useEffect } from "react";
import {
  ContentSizeFitterVerticalLayout,
  GridLayout,
  HorizontalLayout,
  IgnoreLayout,
  LayoutElement,
  VerticalLayout,
} from "../../../unit/package/PrimitiveUix/main";
import {
  StyledImage,
  StyledMask,
  StyledRawImage,
  StyledScrollArea,
  StyledText,
} from "../../../unit/package/StyledUix/main";
import { Color, Material, Sprite } from "../util/style";
import { Reaction, Status } from "../util/type";

export const StatusView = ({ status }: { status: Status }) => {
  const images = status.medias;

  const [reactions, setReactions] = useState<Reaction>({});
  const getReactions = useCallback(() => {
    axios
      .get<{
        reactions: Reaction;
      }>(`https://api.natsuneko.com/catalyst/v1/status/${status.id}/reactions`)
      .then((res) => {
        setReactions(res.data.reactions);
      });
  }, [status.id]);

  useEffect(() => {
    getReactions();
  }, [getReactions, status.id]);

  return (
    <ContentSizeFitterVerticalLayout>
      <IgnoreLayout>
        <StyledImage styledColor={Color.black} />
      </IgnoreLayout>
      <HorizontalLayout
        forceExpandChildWidth={false}
        paddingBottom={40}
        paddingLeft={40}
        paddingRight={40}
        paddingTop={40}
        spacing={20}
      >
        {/* Icon */}
        <LayoutElement minHeight={150} minWidth={150}>
          <VerticalLayout forceExpandChildHeight={false}>
            <LayoutElement minHeight={150} preferredHeight={150}>
              <StyledMask styledSprite={Sprite.circle}>
                <StyledRawImage
                  preserveAspect
                  styledMaterial={Material.front}
                  url={status.user?.profile?.iconUrl + "/tiny"}
                />
              </StyledMask>
            </LayoutElement>
          </VerticalLayout>
        </LayoutElement>
        {/* Content */}
        <VerticalLayout forceExpandChildHeight={false} spacing={15}>
          {/* Top */}
          <StyledText
            content={`${status.user?.displayName ?? ""}@${status.user?.screenName}`}
            horizontalAutoSize
            size={35}
            styledColor={Color.white}
            verticalAlign="Middle"
            verticalAutoSize
          />
          <VerticalLayout paddingLeft={5} paddingRight={5} spacing={10}>
            {images.length > 0 && (
              <LayoutElement flexibleWidth={1} minHeight={360}>
                <StyledImage styledSprite={Sprite.kadomaru}>
                  <StyledScrollArea horizontalFit="PreferredSize">
                    <HorizontalLayout
                      forceExpandChildWidth={false}
                      spacing={10}
                    >
                      {images.map((file, index) => (
                        <LayoutElement key={index} minWidth={600}>
                          <StyledRawImage
                            preserveAspect
                            url={file.url + "/small"}
                          />
                        </LayoutElement>
                      ))}
                    </HorizontalLayout>
                  </StyledScrollArea>
                </StyledImage>
              </LayoutElement>
            )}
          </VerticalLayout>
          <StyledText
            content={status.body}
            size={35}
            styledColor={Color.white}
          />
          {/* Reaction */}
          <GridLayout cellSize={[80, 40]} spacing={[14, 10]}>
            {Object.values(reactions).map((reaction, index) => (
              <HorizontalLayout key={index}>
                <LayoutElement minHeight={40} minWidth={40}>
                  <StyledRawImage preserveAspect url={reaction.url} />
                </LayoutElement>
                <LayoutElement minHeight={40} minWidth={40}>
                  <StyledText
                    content={`${reaction.count}`}
                    horizontalAlign="Center"
                    size={35}
                    styledColor={Color.white}
                    verticalAlign="Middle"
                  />
                </LayoutElement>
              </HorizontalLayout>
            ))}
          </GridLayout>
        </VerticalLayout>
      </HorizontalLayout>
    </ContentSizeFitterVerticalLayout>
  );
};
