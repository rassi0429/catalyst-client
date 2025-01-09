import { GlobalTimeLine } from "./global";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { Status } from "./util/type";
import { StyledImage, StyledMask } from "../../unit/package/StyledUix/main";
import { Color, Material, Sprite } from "./util/style";
import { StyledSpace } from "./util/style";
import { Canvas, LayoutElement, VerticalLayout } from "../../unit/package/PrimitiveUix/main";


export const Catalyst = () => {
  const [statuses, setStatuses] = useState<Status[]>([]);
  const getStatus = useCallback(() => {
    axios.get("https://api.natsuneko.com/catalyst/v1/timeline/firehose")
      .then((res) => {
        //console.log(res.data)
        console.log("get from catalyst")
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
        <StyledMask styledSprite={Sprite.kadomaru}>
          <VerticalLayout forceExpandChildHeight={false}>
            <LayoutElement flexibleHeight={1}>
              <GlobalTimeLine statuses={statuses}/>
            </LayoutElement>
          </VerticalLayout>
        </StyledMask>
      </Canvas>
    </StyledSpace>
  )
}
