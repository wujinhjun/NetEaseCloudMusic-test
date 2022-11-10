import React from "react";

import {
  SingerList,
  SingerListItem,
  SingerListItemLink,
  SingerListItemHead,
  SingerListItemInfo,
  SingerName,
  SingerIntroduction,
} from "../../styles/FindMusicComponentsStyle";

const SingerListPage = (props) => {
  const { singerList } = props;
  //   console.log(singerList);
  return (
    <SingerList>
      {singerList.map((item) => {
        return (
          <SingerListItem key={item.id}>
            <SingerListItemLink href={item.link}>
              <SingerListItemHead
                style={{ backgroundImage: `url(${item.head})` }}
              ></SingerListItemHead>
              <SingerListItemInfo>
                <SingerName>{item.name}</SingerName>
                <SingerIntroduction>{item.introduction}</SingerIntroduction>
              </SingerListItemInfo>
            </SingerListItemLink>
          </SingerListItem>
        );
      })}
    </SingerList>
  );
};

export default SingerListPage;
