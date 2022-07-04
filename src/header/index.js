import React, { Fragment } from "react";
import { useDispatch, connect } from "react-redux";
import { Link } from "react-router-dom"
import { changeChoose } from './store';
import {
    HeaderWrapper,
    HeaderLine,
    LOGO,
    Nav,
    NavItem,
    IconBottom,
    NavSearchBar,
    SearchIcon,
    CreatorCenter,
    Login,
} from './style.js';

const Header = (props) => {
    const listName = ["发现音乐", "我的音乐", "关注", "商城", "音乐人", "下载客户端"];
    const dispatch = useDispatch();
    const { active } = props;
    return (
        <HeaderLine>
            <HeaderWrapper>
                <Link to="/">
                    <LOGO />
                </Link>
                <Nav>
                    {
                        listName.map((item, index) => {
                            if (index === 5) {
                                return (
                                    <Fragment key={item}>
                                        <NavItem onClick={() => dispatch(changeChoose(index))} key={item}>
                                            {item}
                                            {(index === active) && (<IconBottom key="iconBottom" />)}
                                        </NavItem>
                                        <NavItem className="download"></NavItem>
                                    </Fragment>
                                )
                            }
                            return (
                                <NavItem onClick={() => dispatch(changeChoose(index))} key={item} className={index === active ? 'active' : ''}>
                                    {item}
                                    {(index === active) && (<IconBottom key="iconBottom" />)}
                                </NavItem>
                            )
                        })
                    }
                </Nav>
                <Login>登录</Login>
                <CreatorCenter>创作者中心</CreatorCenter>
                <NavSearchBar placeholder="音乐/视频/电台/用户" />
                <SearchIcon />
            </HeaderWrapper>
        </HeaderLine >
    )
}

const mapStateToProps = (state) => {
    return {
        active: state.header.active
    }
}
export default connect(mapStateToProps, null)(Header);