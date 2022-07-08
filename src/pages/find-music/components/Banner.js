import React, { Fragment, useEffect } from "react";
import {
    BannerWrapper,
    BannerImg,
    BannerContainer,
    LeftArrow,
    RightArrow,
    CardDownloadContainer,
    CardPicLink,
    CardShadowRight,
    CardShadowLeft,
    CardTip,
    DotsContainer,
    DotItem
} from "../style";
import { useDispatch, useSelector } from "react-redux";
import { changeClickChoose, lastPic, nextPic, getInfoBanner } from '../store';

const Banner = (props) => {
    const dispatch = useDispatch();

    useEffect(() => {
        console.log('mounted');
        dispatch(getInfoBanner());
    }, [])

    const valuePresent = useSelector((state) => state.findMusic.valuePresent);
    const list = Array.from(Array(8), (item, index) => index);
    // const { valuePresent } = props;
    // setTimeout(dispatch(nextPic()), 1000);
    return (
        <Fragment>
            <BannerWrapper
                style={{
                    backgroundImage: `url(https://raw.githubusercontent.com/wujinhjun/wujinhjun-pic/main/041.jpg)`,
                }}>
                <BannerContainer>
                    <BannerImg
                        style={{
                            backgroundImage: `url(https://raw.githubusercontent.com/wujinhjun/wujinhjun-pic/main/04.jpg)`,
                        }} />
                    <LeftArrow onClick={() => dispatch(lastPic())} />
                    <RightArrow onClick={() => dispatch(nextPic())} />

                    <DotsContainer>
                        {
                            list.map((item, index) => {
                                // console.log(valuePresent);
                                return (
                                    <DotItem
                                        className={item === valuePresent ? "active" : ""}
                                        key={item}
                                        onClick={() => dispatch(changeClickChoose(index))} />
                                )
                            })
                        }
                    </DotsContainer>
                    <CardDownloadContainer>
                        <CardPicLink></CardPicLink>
                        <CardTip>PC 安卓 iPhone WP iPad Mac 六大客户端</CardTip>
                        <CardShadowLeft />
                        <CardShadowRight />
                    </CardDownloadContainer>
                </BannerContainer>
            </BannerWrapper>
        </Fragment >
    )
};

export default Banner;