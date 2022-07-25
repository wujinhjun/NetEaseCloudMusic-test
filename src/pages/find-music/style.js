import styled, { keyframes } from "styled-components";
// import  from "styled-components";
import pic from '../../static/r-icon.png';


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
    transform: translateX(-12px);
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