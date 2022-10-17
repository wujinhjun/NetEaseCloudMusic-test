import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  TheTopContainer,
  TheTopItem,
  TheTopWrapper,
  RIcon,
} from "../styles/FindMusicStyle";
import Discover from "./FindMusic/Discover";
import RankList from "./FindMusic/Rank";

import { changeChooseDiscover } from "../store/FindMusicStore";

const FindMusic = () => {
  const dispatch = useDispatch();
  const active = useSelector((state) => state.findMusic.active);

  return (
    <Fragment>
      <TheTopContainer>
        <TheTopWrapper>
          <TheTopItem
            onClick={() => dispatch(changeChooseDiscover("推荐"))}
            className={"推荐" === active ? "active" : ""}
          >
            推荐
          </TheTopItem>
          <TheTopItem
            onClick={() => dispatch(changeChooseDiscover("排行榜"))}
            className={"排行榜" === active ? "active" : ""}
          >
            排行榜
          </TheTopItem>
          <TheTopItem
            onClick={() => dispatch(changeChooseDiscover("歌单"))}
            className={"歌单" === active ? "active icon" : "icon"}
          >
            歌单
            {/* <RIcon /> */}
          </TheTopItem>
          <TheTopItem
            onClick={() => dispatch(changeChooseDiscover("主播电台"))}
            className={"主播电台" === active ? "active" : ""}
          >
            主播电台
          </TheTopItem>
          <TheTopItem
            onClick={() => dispatch(changeChooseDiscover("歌手"))}
            className={"歌手" === active ? "active" : ""}
          >
            歌手
          </TheTopItem>
          <TheTopItem
            onClick={() => dispatch(changeChooseDiscover("新碟上架"))}
            className={"新碟上架" === active ? "active" : ""}
          >
            新碟上架
          </TheTopItem>
        </TheTopWrapper>
      </TheTopContainer>
      {active === "推荐" ? <Discover /> : null}
      {active === "排行榜" ? <RankList /> : null}
    </Fragment>
  );
};

export default FindMusic;
