import styled from "styled-components";
import { keyframes } from "styled-components";

import arrowPic from '../../../static/arrow.png';
import downloadPic from '../../../static/download.png';
import recommendCover from "../../../static/coverall.png";
import iconAll from "../../../static/iconall.png";
import icon from "../../../static/icon.png";
import picTitle from "../../../static/indexDiscover.png";

// for banner
export const BannerWrapper = styled.div`
    background-size: 6000px;
    background-position: center center;
    transform: translateY(-1px);
    height: 285px;
    /* z-index: -1; */
    backface-visibility: hidden;
`;

export const BannerContainer = styled.div`
    position: relative;
    width: 982px;
    height: 285px;
    margin: 0 auto;
    /* transform: translateY(1px); */
`;

const fadeInAndOut = keyframes`
    0% {
        opacity: 0.2;
    }
    5% {
        opacity: 0.8;
    }
    10% {
        opacity: 1;
    }
    40% {
        opacity: 1;
    }
    75% {
        opacity: 0.6;
    }
    100% {
        opacity: 0.1;
    }
`;

export const BannerImg = styled.div`
    width: 730px;
    height: 283.75px;
    background-size: cover;
    display: block;
    overflow: hidden;
    /* animation-name: ${fadeInAndOut};
    animation-timing-function: linear;
    animation-duration: 3.01s;
    animation-iteration-count: 1;
    animation-iteration-count: infinite; */
    cursor: pointer;
`;

export const LeftArrow = styled.div`
    background: url(${arrowPic});
    background-position: 0 -360px;
    display: block;
    position: absolute;
    top: 50%;
    left: -68px;;
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
    right: -68px;;
    margin-top: -31px;
    width: 37px;
    height: 63px;
    cursor: pointer;
    :hover {
        background-position: 0 -578px;
    }
`;

export const CardDownloadContainer = styled.div`
    position: absolute;
    top: 0;
    z-index: 10;
    top: 0px;
    right: 460px;
    width: 254px;
    height: 285px;
    background-image: url(${downloadPic});
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
    height:285px;
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
    height:285px;
    background-image: url(${arrowPic});
    background-position: -20px 0;
`;

export const DotsContainer = styled.div`
    position: absolute;
    top: 259px;
    left: 0;
    width: 730px;
    height: 20px;
    text-align: center;
`;

export const DotItem = styled.div`
    display: inline-block;
    /* position: relative; */
    width: 20px;
    height: 20px;
    text-align: center;
    background: url(${arrowPic});
    background-position: 3px -343px;
    cursor: pointer;
    &.active, :hover {
        background-position: -16px -343px;
    }
    margin: 0 1.7px;
`;

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