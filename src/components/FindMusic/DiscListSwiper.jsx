import { useEffect, useState } from "react";
import {
  LeftArrowLink,
  RightArrowLink,
  RollContainer,
} from "../../styles/DiscoverStyle";

import NewDiscList from "./NewDiscList";

const locationList = [-1, 0, 1, 2];

const DiscListSwiper = () => {
  const [displayCurrent, setDisplayCurrent] = useState(1);

  const leftMove = () => {
    setDisplayCurrent((displayCurrent + 3) % 4);
  };

  const rightMove = () => {
    setDisplayCurrent((displayCurrent + 1) % 4);
  };
  return (
    <>
      <LeftArrowLink onClick={leftMove}>&nbsp;</LeftArrowLink>
      <RollContainer>
        <NewDiscList location={locationList[(displayCurrent + 3) % 4]} />
        <NewDiscList location={locationList[displayCurrent]} />
        <NewDiscList location={locationList[(displayCurrent + 1) % 4]} />
        <NewDiscList location={locationList[(displayCurrent + 2) % 4]} />
      </RollContainer>
      <RightArrowLink onClick={rightMove}>&nbsp;</RightArrowLink>
    </>
  );
};

export default DiscListSwiper;
