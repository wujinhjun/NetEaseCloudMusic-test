import styled from "styled-components";

import picBack from "../static/wrap1.png";
import indexDiscover from "../static/indexDiscover.png";
import button2 from "../static/button2.png";

export const DiscoverWrapper = styled.div`
  background: url(${picBack}) repeat-y 100% 100%;
  width: 980px;
  min-height: 700px;
  margin: 0 auto;
  background-color: #fff;
  border: 1px solid #d3d3d3;
  border-width: 0 1px;
  overflow: auto;
`;

export const DiscoverContentLeft = styled.div`
  float: left;
  width: 100%;
  margin-right: -250px;
`;

export const ContentContainer = styled.div`
  padding: 20px 20px 40px;
  margin-right: 251px;
`;

export const DivideDiv = styled.div`
  position: relative;
  &.recommend {
    margin-bottom: 35px;
  }
`;

export const SortListContainer = styled.div`
  float: left;
  margin: 7px 0 0 20px;
  z-index: 10;
  transform: translateY(3px);
`;

export const SortListMember = styled.a`
  color: #666;
  cursor: pointer;
  text-decoration: none;
  font-size: 12px;
`;

export const LineDivide = styled.span`
  margin: 0 13.31px;
  color: #ccc;
  font-size: 12px;
  font-family: Arial, Helvetica, sans-serif;
`;

export const ListForRecommend = styled.ul`
  margin: 20px 0 0 -42px;
  padding: 0;
  box-sizing: border-box;
  overflow: auto;
`;

export const ListItemForRecommend = styled.li`
  width: 140px;
  height: 204px;
  padding-left: 42px;
  padding-bottom: 30px;
  float: left;
  overflow: hidden;
  line-height: 1.4;
`;

export const DiscoverContentRight = styled.div`
  float: right;
  position: relative;
  width: 250px;
`;

export const ContentContainerRight = styled.div`
  transform: translateY(-1px);
  height: 126px;
  padding-top: 0px;
  background: url(${indexDiscover});
  background-position: 0 0;
`;

export const DescribeText = styled.p`
  width: 205px;
  margin: 0 auto;
  padding: 16px 0;
  line-height: 22px;
  color: #666;
`;

export const ButtonLogin = styled.a`
  margin: 0 auto;
  display: block;
  width: 100px;
  height: 31px;
  line-height: 31px;
  text-align: center;
  color: #fff;
  text-shadow: 0 1px 0 #8a060b;
  background: url(${indexDiscover});
  background-position: 0 -195px;
  text-decoration: none;
  cursor: pointer;
`;

export const SingerListContainer = styled.div`
  margin-top: 15px;
`;

export const TheTitle = styled.h3`
  position: relative;
  height: 23px;
  margin: -1px 20px 0 20px;
  border-bottom: 1px solid #ccc;
  color: #333;
`;

export const TitleText = styled.span`
  float: left;
  color: #333;
  font-weight: 700;
  margin-top: 3px;
`;

export const MoreContainer = styled.a`
  float: right;
  font-weight: normal;
  color: #666;
  margin-top: 3px;
  cursor: pointer;
`;

export const ButtonToBeMusician = styled.div``;

export const BeMusicianLink = styled.a`
  margin-left: 20px;
  border-radius: 4px;
  color: #333;
  background: url(${button2});
  background-position: right -100px;
  padding: 0 5px 0 0;
  white-space: nowrap;
  display: inline-block;
  height: 31px;
  line-height: 31px;
  overflow: hidden;
  vertical-align: top;
  text-align: center;
  cursor: pointer;
`;

export const Content = styled.div`
  width: 170px;
  font-weight: bold;
  color: #333;
  background: url(${button2});
  background-position: 0 -59px;
  padding: 0 15px 0 20px;
  pointer-events: none;
  display: inline-block;
  height: 31px;
  line-height: 31px;
  overflow: hidden;
  vertical-align: top;
  text-align: center;
`;

export const NewDiscWrapper = styled.div`
  position: relative;
  zoom: 1;
  height: 186px;
  margin: 20px 0 37px;
  border: 1px solid #d3d3d3;
  margin-top: 19px;
`;

export const NewDiscInner = styled.div`
  height: 184px;
  padding-left: 16px;
  background: #f5f5f5;
  border: 1px solid #fff;
  z-index: 10;
`;

export const LeftArrowLink = styled.a`
  background: url(${indexDiscover});
  left: 4px;
  position: absolute;
  top: 71px;
  width: 17px;
  height: 17px;
  background-position: -260px -75px;
  cursor: pointer;
  &:hover {
    background-position: -280px -75px;
  }
`;

export const RightArrowLink = styled.a`
  position: absolute;
  top: 70px;
  width: 17px;
  height: 17px;
  background: url(${indexDiscover});
  background-position: -300px -75px;
  cursor: pointer;
  &:hover {
    background-position: -320px -75px;
  }
`;

export const RollContainer = styled.div`
  float: left;
  width: 645px;
  height: 180px;
  overflow: hidden;
  position: relative;
  zoom: 1;
`;
