import React, { PureComponent } from "react";
import { Link } from "react-router-dom"
import {
    HeaderWrapper,
    HeaderLine,
    LOGO,
    Nav,
    NavItem,
    NavSearchBar,
    SearchIcon,
    CreatorCenter,
    Login
} from './style.js';

class Header extends PureComponent {
    render() {
        return (
            <HeaderLine>
                <HeaderWrapper>
                    <Link to="/">
                        <LOGO />
                    </Link>
                    <Nav>
                        <NavItem>发现音乐</NavItem>
                        <NavItem>我的音乐</NavItem>
                        <NavItem>关注</NavItem>
                        <NavItem>商城</NavItem>
                        <NavItem>音乐人</NavItem>
                        <NavItem>下载客户端</NavItem>
                        <NavItem className="download"></NavItem>
                        {/* <HotIcon></HotIcon> */}

                    </Nav>
                    <Login>登录</Login>
                    <CreatorCenter>创作者中心</CreatorCenter>
                    <NavSearchBar placeholder="音乐/视频/电台/用户" />
                    <SearchIcon />
                    {/* </SearchIcon> */}
                    {/* </NavSearchBar> */}

                </HeaderWrapper>
            </HeaderLine>
        )
    };
}

export default Header;