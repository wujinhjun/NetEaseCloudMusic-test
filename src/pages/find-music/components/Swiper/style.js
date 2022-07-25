import styled, { keyframes } from "styled-components";

import arrowPic from '../../../../static/arrow.png';
import downloadPic from '../../../../static/download.png';
// for banner

export const SwiperWrapper = styled.div`
    position: relative;
    height: 285px;
    width: 100%;
    /* left: 50%;
    transform: translateX(-25.75%); */
    /* margin: 0 auto; */
`
export const BannerWrapper = styled.div`
    background-size: 6000px;
    background-position: center center;
    transform: translateY(-1px);
    height: 285px;
    width: 100%;
    /* z-index: -1; */
    backface-visibility: hidden;
    position: absolute;
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

export const DotsContainer = styled.div`
    position: absolute;
    top: 259px;
    left: 460px;
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

export const SwiperCardContainer = styled.div`
    width: 982px;
    height: 285px;
    position: relative;
    margin: 0 auto;
`;

export const CardDownloadContainer = styled.div`
    position: absolute;
    top: -1px;
    z-index: 10;
    /* top: 105px; */
    /* right: 460px; */
    right: -1px;
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


// for recommend
export const Cover = styled.div`
    width: 140px;
    height: 140px;
    position: relative;
    display: block;
`;