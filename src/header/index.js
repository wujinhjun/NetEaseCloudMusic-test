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
                        <NavItem onClick={() => dispatch(changeChoose('????????????'))} className={'????????????' === active ? 'active' : ''}>
                            ????????????
                            {('????????????' === active) && (<IconBottom key="iconBottom" />)}
                        </NavItem>
                        <NavItem onClick={() => dispatch(changeChoose('????????????'))} className={'????????????' === active ? 'active' : ''}>
                            ????????????
                            {('????????????' === active) && (<IconBottom key="iconBottom" />)}
                        </NavItem>
                        <NavItem onClick={() => dispatch(changeChoose('??????'))} className={'??????' === active ? 'active' : ''}>
                            ??????
                            {('??????' === active) && (<IconBottom key="iconBottom" />)}
                        </NavItem>
                        <NavItem onClick={() => (window.open('about:blank').location.href = 'https://music.163.com/store/product')} className={'??????' === active ? 'active' : ''}>
                            ??????
                            {('??????' === active) && (<IconBottom key="iconBottom" />)}
                        </NavItem>
                        <NavItem onClick={() => (window.open('about:blank').location.href = 'https://music.163.com/st/musician')} className={'?????????' === active ? 'active' : ''}>
                            ?????????
                            {('?????????' === active) && (<IconBottom key="iconBottom" />)}
                        </NavItem>
                        <NavItem onClick={() => dispatch(changeChoose('???????????????'))} className={'???????????????' === active ? 'active' : ''}>
                            ???????????????
                            {('???????????????' === active) && (<IconBottom key="iconBottom" />)}
                        </NavItem>
                        <NavItem className="download"></NavItem>
                    </>
                </Nav>
                <Login>??????</Login>
                <CreatorCenter>???????????????</CreatorCenter>
                <NavSearchBar placeholder="??????/??????/??????/??????" />
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