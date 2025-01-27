import {
  ContentSizeFitterVerticalLayout,
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
import { Status } from "../util/type";

export const StatusView = ({ status }: { status: Status }) => {
  const images = status.medias;
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
        </VerticalLayout>
      </HorizontalLayout>
    </ContentSizeFitterVerticalLayout>
  );
};
