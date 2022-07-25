import styled from "styled-components";
import pic from '../static/topBar.png';

export const HeaderLine = styled.div`
    width: 100%;
    height: 70px;
    background-color: #242424;
    border-bottom: 1px solid #000;
    
`;

export const HeaderWrapper = styled.div`
    position: relative;
    width: 1100px;
    height: 70px;
    margin: 0 auto;
    /* transform: translateX(-12px); */
`;

export const LOGO = styled.div`
    width: 157px;
    height: 70px;
    background-image: url(${pic});
    padding-right: 20px;
    display: block;
    float: left;
`;

export const Nav = styled.div`
    position: absolute;
    transform: translateX(176px);
    /* width: 508px; */
    height: 70px;
    box-sizing: border-box;
    font-size: 14px;
    text-align: center;
`;

export const NavItem = styled.div`
    height: 70px;
    line-height: 70px;
    padding: 0 19px;
    float: left;
    text-align: center;
    box-sizing: border-box;
    font-size: 14px;
    color: #ccc;
    cursor: pointer;
    &.download {
        position: absolute;
        width: 28px;
        height: 19px;
        background-image: url(${pic});
        background-position: -180px 0;
        right: -20px;
        top: 21px;
        float: left;
        cursor: default;
    };
    &.active, :hover {
        background-color: #000;
        color: #fff;
    };
`;

export const IconBottom = styled.div`
    background-image: url(${pic});
    display: block;
    width: 12px;
    height: 7px;
    background-position: -226px 0;
    box-sizing: border-box;
    margin: 0 auto;
    transform: translateY(-6px);
`;

export const HotIcon = styled.div`
    position: absolute;
    width: 28px;
    height: 19px;
    background-image: url(${pic});
    background-position: -180px 0;
    right: -21px;
    top: 21px;
    float: left;
`;

export const NavSearchBar = styled.input`
    position: relative;
    background-color: #FFF;
    width: 128px;
    height: 32px;
    float: right;
    border-radius: 0 32px 32px 0px;
    font-size: 12px;
    color: #333;
    margin-top: 19px;
    border-width: 0px;
    padding: 0px;
    ::placeholder {
        transform: translate(0px, 1px);
        font-size: 12px;
        color: #9b9b9b;
    };

    :focus-visible {
        outline-width: 0px;
    }
    :focus::placeholder {
        opacity: 0;
    }
`;

export const SearchIcon = styled.div`
    float: right;
    height: 32px;
    width: 30px;
    background-color: #fff;
    margin-top: 19px;
    border-radius: 32px 0 0 32px;
    background-image: url(${pic});
    background-position: 0px -99px;
`;

export const CreatorCenter = styled.a`
    float: right;
    color: #ccc;
    margin-top: 19px;
    margin-left: 12px;
    line-height: 33px;
    width: 90px;
    height: 32px;
    border-radius: 32px;
    font-size: 12px;
    box-sizing: border-box;
    padding-left: 16px;
    border: 1px solid #4f4f4f;
    cursor: pointer;
    /* border-width: 0px; */
    :hover{
        border: 1px solid #ccc;
        color: #fff;
    };
`;

export const Login = styled.a`
    float: right;
    height: 45px;
    margin-left: 20px;
    margin-top: 27px;
    padding-right: 22px;
    display: block;
    width: 28px;
    line-height: 16px;
    color: #787878;
    font-size: 12px;
    cursor: pointer;
    :hover {
        color: #999;
        text-decoration: underline;
    }
`;