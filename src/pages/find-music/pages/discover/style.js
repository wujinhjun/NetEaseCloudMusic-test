import styled from "styled-components";

import picBack from "../../../../static/wrap1.png";

export const DiscoverWrapper = styled.div`
    background: url(${picBack}) repeat-y 100% 100%;
    width: 980px;
    min-height: 700px;
    margin: 0 auto;
    background-color: #fff;
    border: 1px solid #d3d3d3;
    border-width: 0 1px;
    /* background-color: red; */
`;

export const DiscoverContentLeft = styled.div`
    float: left;
    width: 100%;
    margin-right: -250px;
    /* background-color: blue; */
`;

export const ContentContainer = styled.div`
    padding: 20px 20px 40px;
    margin-right: 251px;
`;

export const DivideDiv = styled.div`
    /* display: block; */
    position: relative;
    &.recommend {
        margin-bottom: 35px;
    }
`;

export const SortListContainer = styled.div`
    float: left;
    margin: 7px 0 0 20px;
    z-index: 10;
    /* width: 239.25px; */
`;

export const SortListMember = styled.a`
    color: #666;
    cursor: pointer;
    text-decoration: none;
    font-size: 12px;
`;

export const LineDivide = styled.span`
    margin: 0 13.4375px;
    color: #ccc;
    font-size: 12px;
    font-family: Arial, Helvetica, sans-serif;
`;

export const ListForRecommend = styled.ul`
    margin: 20px 0 0 -42px;
    padding: 0;
    box-sizing: border-box;
    overflow: auto;
    /* height: auto; */
    /* width: 100%; */
    /* height: 100%; */
    /* position: relative; */
    /* float: left; */
`;

export const ListItemForRecommend = styled.li`
    width: 140px;
    height: 204px;
    padding-left: 42px;
    padding-bottom: 30px;
    float: left;
    /* display: inline-block; */
    overflow: hidden;
    /* padding: 0 0 30px 50px; */
    line-height: 1.4;
`;