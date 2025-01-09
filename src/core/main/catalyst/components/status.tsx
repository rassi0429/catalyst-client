import {
  HorizontalLayout,
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


export const StatusView = ({
                           status
                         }: {
  status: Status;
}) => {
  const time = new Date(status.createdAt).toLocaleString();
  const images = status.medias
  const height = images.length > 0 ? 600 : 300;
  return (
    <LayoutElement preferredHeight={height}>
      <StyledImage styledColor={Color.black}>
        <HorizontalLayout
          forceExpandChildWidth={false}
          paddingBottom={40}
          paddingLeft={40}
          paddingRight={40}
          paddingTop={40}
          spacing={20}
        >
          {/* Icon */}
          <LayoutElement minWidth={150} preferredWidth={150}>
            <VerticalLayout forceExpandChildHeight={false}>
              <LayoutElement minHeight={150} preferredHeight={150}>
                <StyledMask styledSprite={Sprite.circle}>
                  <StyledRawImage
                    styledMaterial={Material.front}
                    url={status.user?.profile?.iconUrl + "/tiny"}
                  />
                </StyledMask>
              </LayoutElement>
            </VerticalLayout>
          </LayoutElement>
          {/* Content */}
          <LayoutElement flexibleWidth={1}>
            <VerticalLayout forceExpandChildHeight={false} spacing={15}>
              {/* Top */}
              <LayoutElement minHeight={40} preferredHeight={40}>
                <HorizontalLayout forceExpandChildWidth={false}>
                  <LayoutElement flexibleWidth={1}>
                    <StyledText
                      content={`${status.user?.displayName ?? ""}@${status.user?.screenName}`}
                      horizontalAutoSize
                      size={35}
                      styledColor={Color.white}
                      verticalAlign="Middle"
                      verticalAutoSize
                    />
                  </LayoutElement>
                </HorizontalLayout>
              </LayoutElement>
              <LayoutElement flexibleHeight={1}>
                <VerticalLayout paddingLeft={5} paddingRight={5} spacing={10}>
                  {images.length > 0 && (
                    <LayoutElement minHeight={300} preferredHeight={300}>
                      <StyledImage styledSprite={Sprite.kadomaru}>
                        <StyledScrollArea horizontalFit="PreferredSize">
                          <HorizontalLayout
                            forceExpandChildWidth={false}
                            spacing={10}
                          >
                            {images.map((file, index) => (
                              <LayoutElement
                                key={index}
                                minWidth={600}
                                preferredWidth={600}
                              >
                                <StyledRawImage preserveAspect url={file.url+"/small"} />
                              </LayoutElement>
                            ))}
                          </HorizontalLayout>
                        </StyledScrollArea>
                      </StyledImage>
                    </LayoutElement>
                  )}
                  <StyledText
                    content={status.body}
                    size={35}
                    styledColor={Color.white}
                  />
                </VerticalLayout>
              </LayoutElement>
            </VerticalLayout>
          </LayoutElement>
        </HorizontalLayout>
      </StyledImage>
    </LayoutElement>
  );
};
