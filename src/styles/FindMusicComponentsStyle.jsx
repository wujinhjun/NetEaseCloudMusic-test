import styled from "styled-components";

import recommendCover from "../static/coverall.png";
import iconAll from "../static/iconall.png";
import icon from "../static/icon.png";
import picTitle from "../static/indexDiscover.png";
import indexPic from "../static/index.png";
import arrowPic from "../static/arrow.png";
import downloadPic from "../static/download.png";

// for recommend
export const Cover = styled.div`
  width: 140px;
  height: 140px;
  position: relative;
  display: block;
`;

export const Pic = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  border: 0;
`;

export const Mask = styled.a`
  background: url(${recommendCover});
  background-position: 0 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const BottomIcon = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 27px;
  background: url(${recommendCover});
  background-position: 0 -537px;
  color: #ccc;
`;

export const HeadsetIcon = styled.span`
  float: left;
  width: 14px;
  height: 11px;
  background: url(${iconAll});
  background-position: 0 -24px;
  margin: 9px 5px 9px 10px;
`;

export const NumberAudience = styled.span`
  float: left;
  margin: 7px 0 0 0;
  font-size: 12px;
`;

export const PlayIcon = styled.a`
  position: absolute;
  right: 10px;
  bottom: 5px;
  width: 16px;
  height: 17px;
  background: url(${iconAll});
  background-position: 0 0;
`;

export const TitleForRecommend = styled.a`
  margin: 8px 0 3px;
  font-size: 14px;
  width: 100%;
  padding: 0;
  display: inline-block;
  max-width: 100%;
  vertical-align: middle;
`;

export const RadioIcon = styled.div`
  margin-top: -1px;
  position: relative;
  top: -1px;
  margin-right: 3px;
  vertical-align: middle;
  width: 35px;
  height: 15px;
  background: url(${icon});
  background-position: -31px -658px;
  display: inline-block;
  overflow: hidden;
`;

// for title
export const TitleWrapper = styled.div`
  height: 33px;
  padding: 0 10px 0 34px;
  background: url(${picTitle}) no-repeat 0 9999px;
  background-position: -225px -156px;
  border-bottom: 2px solid #c10d0c;
  transform: translateY(-1px);
`;

export const TitleName = styled.a`
  float: left;
  font-size: 20px;
  font-weight: normal;
  line-height: 28px;
  text-decoration: none;
  font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
  cursor: pointer;
  color: #333;
`;

export const MoreIconContainer = styled.span`
  float: right;
  margin-top: 12px;
`;

export const MoreContent = styled.a`
  color: #666;
  cursor: pointer;
  text-decoration: none;
  font-size: 12px;
`;

export const MoreIcon = styled.div`
  display: inline-block;
  width: 12px;
  height: 12px;
  margin-left: 4px;
  vertical-align: middle;
  background: url(${picTitle}) no-repeat 0 9999px;
  background-position: 0 -240px;
`;

// for singer list
export const SingerList = styled.ul`
  margin: 6px 0 14px 20px;
  overflow: auto;
`;

export const SingerListItem = styled.li`
  margin-top: 14px;
  float: left;
  width: 210px;
  height: 62px;
  background: #fafafa;
  list-style: none;
`;

export const SingerListItemLink = styled.a`
  float: left;
  width: 210px;
  height: 62px;
  background: #fafafa;
  text-decoration: none;
  cursor: pointer;
  color: #333;
`;

export const SingerListItemHead = styled.div`
  float: left;
  width: 62px;
  height: 62px;
`;

export const SingerListItemInfo = styled.div`
  float: left;
  width: 133px;
  height: 60px;
  padding-left: 14px;
  border: 1px solid #e9e9e9;
  border-left: none;
`;

export const SingerName = styled.h4`
  margin-top: 11px;
  width: 90%;
  height: 22px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
  font-size: 14px;
  font-weight: 700;
  display: inline-block;
`;

export const SingerIntroduction = styled.p`
  width: 90%;
  margin-top: 6px;
  color: #666;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
`;

// for new disc
export const DiscWrapper = styled.div`
  margin-bottom: 7px;
  width: 100px;
  height: 100px;
  position: relative;
  display: block;
`;

export const ImgBack = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  border: 0;
`;

export const CoverAlbum = styled.div`
  background: url(${recommendCover});
  width: 118px;
  height: 100px;
  background-position: 0 -570px;
  position: absolute;
  top: 0;
  left: 0;
  cursor: pointer;
`;

export const NameAndAuthor = styled.p`
  width: 90%;
  line-height: 18px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
  cursor: pointer;
`;

export const NameLink = styled.a`
  color: #000;
  &:hover {
    text-decoration: underline;
  }
`;

export const AuthorLink = styled(NameLink)`
  color: #666;
`;

export const ListAlbum = styled.ul`
  background-color: #f5f5f5;
  position: absolute;
  top: 0;
  width: 645px;
  margin: 28px 0 0 0;
  left: ${(props) => props.location * 645}px;
  transition: all 1.5s ease-in-out;
  z-index: ${(props) => props.indexZ};
`;

export const ListItemAlbum = styled.li`
  float: left;
  display: inline;
  width: 118px;
  height: 150px;
  margin-left: 11px;
  background: url(${indexPic}) no-repeat;
  background-position: -260px 100px;
`;

// For Swiper
export const SwiperWrapper = styled.div`
  position: relative;
  height: 285px;
  width: 100%;
`;

export const BannerWrapper = styled.div`
  background-size: 6000px;
  background-position: center center;
  transform: translateY(-1px);
  height: 285px;
  width: 100%;
  backface-visibility: hidden;
  position: absolute;
  &.others {
    display: none;
  }
`;

export const BannerContainer = styled.div`
  position: relative;
  width: 982px;
  height: 285px;
  margin: 0 auto;
`;

export const BannerImg = styled.div`
  width: 730px;
  height: 283.75px;
  background-size: cover;
  display: block;
  overflow: hidden;
  cursor: pointer;
  &.others {
    transition: opacity 1s;
    opacity: 0;
    z-index: 0;
  }
  &.active {
    z-index: 10;
    transition: opacity 1s;
    opacity: 1;
  }

  &.bannerImg-enter {
    opacity: 0;
  }
  &.bannerImg-enter-active {
    opacity: 1;
    transition: opacity 1s;
  }
  &.bannerImg-exit {
    opacity: 1;
  }
  &.bannerImg-exit-active {
    opacity: 0;
    transition: opacity 1s;
  }
`;

export const LeftArrow = styled.div`
  background: url(${arrowPic});
  background-position: 0 -360px;
  display: block;
  position: absolute;
  top: 50%;
  left: -68px;
  margin-top: -31px;
  width: 37px;
  height: 63px;
  cursor: pointer;
  :hover {
    background-position: 0 -430px;
  }
`;

export const RightArrow = styled.div`
  background: url(${arrowPic});
  background-position: 0 -508px;
  display: block;
  position: absolute;
  top: 50%;
  right: -68px;
  margin-top: -31px;
  width: 37px;
  height: 63px;
  cursor: pointer;
  :hover {
    background-position: 0 -578px;
  }
`;

export const DotsContainer = styled.div`
  position: relative;
  transform: translate(-125px, -27px);
  width: 730px;
  height: 20px;
  text-align: center;
  margin: 0 auto;
`;

export const DotItem = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  text-align: center;
  background: url(${arrowPic});
  background-position: 3px -343px;
  cursor: pointer;
  &.active,
  :hover {
    background-position: -16px -343px;
  }
  margin: 0 1.7px;
`;

export const SwiperCardContainer = styled.div`
  width: 982px;
  height: 285px;
  position: relative;
  margin: 0 auto;
  cursor: pointer;
`;

export const CardDownloadContainer = styled.div`
  position: absolute;
  top: -1px;
  z-index: 10;
  right: -1px;
  width: 254px;
  height: 285px;
  background-image: url(${downloadPic});
  cursor: initial;
`;

export const CardPicLink = styled.a`
  display: block;
  width: 215px;
  height: 56px;
  margin: 186px 0 0 19px;
  :hover {
    background-image: url(${downloadPic});
    background-position: 0 -290px;
  }
  cursor: pointer;
`;

export const CardTip = styled.p`
  margin: 10px auto;
  text-align: center;
  display: block;
  color: #8d8d8d;
  padding: 0;
  font-size: 12px;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  transform: translateY(1px);
`;

export const CardShadowLeft = styled.span`
  position: absolute;
  display: block;
  box-sizing: border-box;
  top: 0;
  left: -20px;
  width: 20px;
  height: 285px;
  background-image: url(${arrowPic});
  background-origin: padding-box;
  background-position: -1px 0;
  background-repeat: no-repeat;
`;

export const CardShadowRight = styled.span`
  display: block;
  position: absolute;
  top: 0;
  right: -20px;
  left: auto;
  width: 20px;
  height: 285px;
  background-image: url(${arrowPic});
  background-position: -20px 0;
`;

export const MouseListener = styled.div`
  width: calc(100% - 254px);
  height: 100%;
`;
