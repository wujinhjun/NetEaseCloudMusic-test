import React, { Fragment } from "react";
import { useDispatch, connect } from "react-redux";
import { Link, Navigate } from "react-router-dom"
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
    const listLink = ['https://music.163.com/store/product'];
    const dispatch = useDispatch();
    const { active } = props;
    return (
        <HeaderLine>
            <HeaderWrapper>
                <Link to="/">
                    <LOGO />
                </Link>
                <Nav>
                    <>
                        {/* {
                            listName.map((item, index) => {
                                if (index === 5) {
                                    return (
                                        <Link to={'/' + listLink[0]} key={item}>
                                            <Fragment >
                                                <NavItem onClick={() => dispatch(changeChoose(item))} key={item}>
                                                    {item}
                                                    {(item === active) && (<IconBottom key="iconBottom" />)}
                                                </NavItem>
                                                <NavItem className="download"></NavItem>
                                            </Fragment>
                                        </Link>
                                    )
                                }
                                return (
                                    <Link to='https://music.163.com/store/product' key={item}>
                                        <NavItem onClick={() => dispatch(changeChoose(item))} className={item === active ? 'active' : ''}>
                                            {item}
                                            {(item === active) && (<IconBottom key="iconBottom" />)}
                                        </NavItem>
                                    </Link>
                                )
                            })
                        } */}
                    </>
                    <>
                        <NavItem onClick={() => dispatch(changeChoose('发现音乐'))} className={'发现音乐' === active ? 'active' : ''}>
                            发现音乐
                            {('发现音乐' === active) && (<IconBottom key="iconBottom" />)}
                        </NavItem>
                        <NavItem onClick={() => dispatch(changeChoose('我的音乐'))} className={'我的音乐' === active ? 'active' : ''}>
                            我的音乐
                            {('我的音乐' === active) && (<IconBottom key="iconBottom" />)}
                        </NavItem>
                        <NavItem onClick={() => dispatch(changeChoose('关注'))} className={'关注' === active ? 'active' : ''}>
                            关注
                            {('关注' === active) && (<IconBottom key="iconBottom" />)}
                        </NavItem>
                        <NavItem onClick={() => (window.open('about:blank').location.href = 'https://music.163.com/store/product')} className={'商城' === active ? 'active' : ''}>
                            商城
                            {('商城' === active) && (<IconBottom key="iconBottom" />)}
                        </NavItem>
                        <NavItem onClick={() => (window.open('about:blank').location.href = 'https://music.163.com/st/musician')} className={'音乐人' === active ? 'active' : ''}>
                            音乐人
                            {('音乐人' === active) && (<IconBottom key="iconBottom" />)}
                        </NavItem>
                        <NavItem onClick={() => dispatch(changeChoose('下载客户端'))} className={'下载客户端' === active ? 'active' : ''}>
                            下载客户端
                            {('下载客户端' === active) && (<IconBottom key="iconBottom" />)}
                        </NavItem>
                        <NavItem className="download"></NavItem>
                    </>
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