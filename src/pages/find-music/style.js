import styled from "styled-components";
import pic from '../../static/r-icon.png';
import arrowPic from '../../static/arrow.png';
import downloadPic from '../../static/download.png';

export const TheTopContainer = styled.div`
    display: block;
    /* position: absolute; */
    box-sizing: border-box;
    /* bottom: -1px; */
    transform: translateY(-1px);
    width: 100%;
    height: 35px;
    background-color: #c20c0c;
    border-bottom: 1px solid #a40011;
    /* z-index: 1; */
`;

export const TheTopWrapper = styled.div`
    display: block;
    /* position: absolute; */
    box-sizing: border-box;
    width: 1100px;
    height: 34px;
    margin: 0 auto;
    padding-left: 180px;
    /* background-color: green; */
`;

export const TheTopItem = styled.div`
    display: block;
    position: relative;
    float: left;
    height: 20px;
    /* text-align: center; */
    line-height: 21px;
    /* background-color: #9B0909; */
    box-sizing: border-box;
    padding: 0 13px;
    margin: 7px 17px 0;
    font-size: 12px;
    color: #fff;
    border-radius: 20px;
    cursor: pointer;
    &.active, :hover {
        background-color: #9B0909;
    };
    &.icon {
        padding: 0 15px 0 11px;
    }
`;

export const RIcon = styled.div`
    background-image: url(${pic});
    background-size: cover;
    display: inline-block;
    width: 8px;
    height: 8px;
    position: absolute;
    top: 2px;
`;

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

export const BannerImg = styled.div`
    width: 730px;
    height: 283.75px;
    background-size: cover;
    display: block;
    overflow: hidden;
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

export const DotsContainer = styled.div`
    position: absolute;
    top: 259px;
    left: 0;
    width: 730px;
    height: 20px;
    text-align: center;
    /* background-color: red; */
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
    /* transform: translateX(2px); */
    margin: 0 1.7px;
    /* background-color: red; */
`;