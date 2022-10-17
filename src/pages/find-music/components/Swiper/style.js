import styled from "styled-components";

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
    /* cursor: pointer; */
    &.others {
        display: none;
    }
`;

export const BannerContainer = styled.div`
    position: relative;
    width: 982px;
    height: 285px;
    margin: 0 auto;
    /* transform: translateY(1px); */
`;

export const BannerImg = styled.div`
    width: 730px;
    height: 283.75px;
    background-size: cover;
    display: block;
    overflow: hidden;
    cursor: pointer;
    &.others {
        /* display: none; */
        transition: opacity 1s;
        opacity: 0;
        z-index: 0;
        /* pointer-events: none; */
    }
    &.active {
        z-index: 10;
        transition: opacity 1s;
        opacity: 1;
        /* pointer-events: all; */
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
    position: relative;
    transform: translate(-125px, -27px);
    width: 730px;
    height: 20px;
    text-align: center;
    margin: 0 auto;
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
    cursor: pointer;
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

export const MouseListener = styled.div`
    width: calc(100% - 254px);
    height: 100%;
`;