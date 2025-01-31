import { VerticalLayout } from "../../unit/package/PrimitiveUix/main";
import { StyledScrollArea } from "../../unit/package/StyledUix/main";
import { Status } from "./util/type";
import { StatusView } from "./components/status";

export const GlobalTimeLine = ({ statuses }: { statuses: Status[] }) => {
  return (
    <StyledScrollArea verticalFit="PreferredSize">
      <VerticalLayout forceExpandChildHeight={false} spacing={5}>
        {statuses.map((status, index) => (
          <StatusView key={index} status={status} />
        ))}
      </VerticalLayout>
    </StyledScrollArea>
  );
};
