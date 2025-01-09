import { VerticalLayout } from "../../unit/package/PrimitiveUix/main";
import { StyledScrollArea } from "../../unit/package/StyledUix/main";
import { Status } from "./util/type";
import { StatusView } from "./components/status";

export const GlobalTimeLine = ({ statuses }: { statuses: Status[] }) => {
  // const limitedStatuses = useMemo(() => statuses.slice(0, 30), [statuses]);

  return (
    <StyledScrollArea verticalFit="PreferredSize">
      <VerticalLayout
        forceExpandChildHeight={false}
        paddingBottom={50}
        paddingLeft={25}
        paddingRight={25}
        paddingTop={50}
        spacing={5}
      >
        {statuses.map((status, index) => (
          <StatusView key={index} status={status} />
        ))}
      </VerticalLayout>
    </StyledScrollArea>
  );
};
