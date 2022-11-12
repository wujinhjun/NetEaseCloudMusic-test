import React, { Fragment } from "react";
import { useDispatch, connect } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { changeChoose } from "../store/headerStore";
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
} from "../styles/HeaderStyle.jsx";

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
          <Link to="/">
            <NavItem
              onClick={() => dispatch(changeChoose("发现音乐"))}
              className={"发现音乐" === active ? "active" : ""}
            >
              发现音乐
              {"发现音乐" === active && <IconBottom key="iconBottom" />}
            </NavItem>
          </Link>
          <Link to="/my/">
            <NavItem
              onClick={() => dispatch(changeChoose("我的音乐"))}
              className={"我的音乐" === active ? "active" : ""}
            >
              我的音乐
              {"我的音乐" === active && <IconBottom key="iconBottom" />}
            </NavItem>
          </Link>
          <Link to="/friend/">
            <NavItem
              onClick={() => dispatch(changeChoose("关注"))}
              className={"关注" === active ? "active" : ""}
            >
              关注
              {"关注" === active && <IconBottom key="iconBottom" />}
            </NavItem>
          </Link>
          <NavItem
            onClick={() =>
              (window.open("about:blank").location.href =
                "https://music.163.com/store/product")
            }
            className={"商城" === active ? "active" : ""}
          >
            商城
            {"商城" === active && <IconBottom key="iconBottom" />}
          </NavItem>
          <NavItem
            onClick={() =>
              (window.open("about:blank").location.href =
                "https://music.163.com/st/musician")
            }
            className={"音乐人" === active ? "active" : ""}
          >
            音乐人
            {"音乐人" === active && <IconBottom key="iconBottom" />}
          </NavItem>
          <Link to="/download">
            <NavItem
              onClick={() => dispatch(changeChoose("下载客户端"))}
              className={"下载客户端" === active ? "active" : ""}
            >
              下载客户端
              {"下载客户端" === active && <IconBottom key="iconBottom" />}
            </NavItem>
          </Link>
          <NavItem className="download"></NavItem>
        </Nav>
        <Login>登录</Login>
        <CreatorCenter>创作者中心</CreatorCenter>
        <NavSearchBar placeholder="音乐/视频/电台/用户" />
        <SearchIcon />
      </HeaderWrapper>
    </HeaderLine>
  );
};

const mapStateToProps = (state) => {
  return {
    active: state.header.active,
  };
};
export default connect(mapStateToProps, null)(Header);
