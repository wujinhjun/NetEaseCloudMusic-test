import React, { Fragment } from "react";
import { TheTopContainer, TheTopItem, TheTopWrapper, RIcon } from './style';
import Banner from "./components/Banner";

const FindMusic = () => {
    return (
        <Fragment>
            <TheTopContainer>
                <TheTopWrapper>
                    <TheTopItem className="active">推荐</TheTopItem>
                    <TheTopItem>排行榜</TheTopItem>
                    <TheTopItem className="icon">歌单<RIcon /></TheTopItem>
                    <TheTopItem>主播电台</TheTopItem>
                    <TheTopItem>歌手</TheTopItem>
                    <TheTopItem>新碟上架</TheTopItem>
                </TheTopWrapper>
            </TheTopContainer>
            <Banner />
        </Fragment>
    )
};

export default FindMusic;