import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";

import {
  DiscoverWrapper,
  DiscoverContentLeft,
  ContentContainer,
  DivideDiv,
  SortListContainer,
  SortListMember,
  LineDivide,
  ListForRecommend,
  ListItemForRecommend,
  NewDiscWrapper,
  NewDiscInner,
  LeftArrowLink,
  RightArrowLink,
  //   fro right
  DiscoverContentRight,
  ContentContainerRight,
  DescribeText,
  ButtonLogin,
  SingerListContainer,
  TheTitle,
  MoreContainer,
  TitleText,
  ButtonToBeMusician,
  BeMusicianLink,
  Content,
  RollContainer,
} from "./style";

import NewBanner from "../../components/NewBanner";
import Title from "../../components/Title";
import RecommendMember from "../../components/RecommendMember";
import SingerListPage from "../../components/SingerListPage";
import NewDiscList from "../../components/NewDiscList";

import { getInfoRecommend, getInfoSingerList } from "../../store";

const Discover = () => {
  const listMember = (
    <SortListContainer>
      <SortListMember>华语</SortListMember>
      <LineDivide>|</LineDivide>
      <SortListMember>流行</SortListMember>
      <LineDivide>|</LineDivide>
      <SortListMember>摇滚</SortListMember>
      <LineDivide>|</LineDivide>
      <SortListMember>民谣</SortListMember>
      <LineDivide>|</LineDivide>
      <SortListMember>电子</SortListMember>
    </SortListContainer>
  );
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("discover recommend and singer list mounted");
    dispatch(getInfoRecommend());
    dispatch(getInfoSingerList());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const recommendList = useSelector((state) => state.findMusic.recommendList);
  const singerList = useSelector((state) => state.findMusic.singerList);
  // console.log(recommendList);
  return (
    <Fragment>
      <NewBanner></NewBanner>
      {/* <Banner /> */}
      <DiscoverWrapper>
        <DiscoverContentLeft>
          <ContentContainer>
            <DivideDiv className="recommend">
              <Title name="热门推荐" other={listMember} />
              <ListForRecommend>
                {recommendList.map((item, index) => {
                  return (
                    <ListItemForRecommend key={item.id}>
                      <RecommendMember
                        title={item.title}
                        photoUrl={item.photoUrl}
                        numViews={item.numViews}
                        isRadio={item.isRadio}
                        listUrl={item.listUrl}
                      />
                    </ListItemForRecommend>
                  );
                })}
              </ListForRecommend>
            </DivideDiv>
            <DivideDiv>
              <Title name="新碟上架" />
              {/* <NewDisc
                picLink="https://p4.music.126.net/xx0IesJ90lCktDZy_AlLqA==/109951167708703253.jpg?param=100y100"
                name="Celebrate"
                author="TWICE"
              ></NewDisc> */}
              <NewDiscWrapper>
                <NewDiscInner>
                  <LeftArrowLink>&nbsp;</LeftArrowLink>
                  <RollContainer>
                    <NewDiscList></NewDiscList>
                  </RollContainer>
                  <RightArrowLink>&nbsp;</RightArrowLink>
                </NewDiscInner>
              </NewDiscWrapper>
            </DivideDiv>
          </ContentContainer>
        </DiscoverContentLeft>
        <DiscoverContentRight>
          <ContentContainerRight>
            <DescribeText>
              登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机
            </DescribeText>
            <ButtonLogin>用户登录</ButtonLogin>
          </ContentContainerRight>
          <SingerListContainer>
            <TheTitle>
              <TitleText>入驻歌手</TitleText>
              <MoreContainer>查看全部 {">"}</MoreContainer>
            </TheTitle>
            <SingerListPage singerList={singerList} />
            <ButtonToBeMusician>
              <BeMusicianLink>
                <Content>申请成为网易音乐人</Content>
              </BeMusicianLink>
            </ButtonToBeMusician>
          </SingerListContainer>
        </DiscoverContentRight>
      </DiscoverWrapper>
    </Fragment>
  );
};

export default Discover;
