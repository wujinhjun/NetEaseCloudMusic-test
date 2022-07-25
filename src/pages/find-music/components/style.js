import styled from "styled-components";

import recommendCover from "../../../static/coverall.png";
import iconAll from "../../../static/iconall.png";
import icon from "../../../static/icon.png";
import picTitle from "../../../static/indexDiscover.png";

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
    /* z-index: 999; */
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
    background-position:0 0;
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
    border-bottom: 2px solid #c10D0c;
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
    margin-top: 9px;
    /* background-color: red; */
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
    transform: translateY(1px);
`;