import React, { Fragment } from "react";

import {
    SwiperWrapper,
    BannerWrapper,
    BannerImg,
    BannerContainer,
    LeftArrow,
    RightArrow,
    DotsContainer,
    DotItem,
    SwiperCardContainer,
    CardDownloadContainer,
    CardPicLink,
    CardShadowRight,
    CardShadowLeft,
    CardTip,
} from "./style";

// picList, cycle, dot?, arrow?

const Swiper = (props) => {
    const {
        picList,
        cycle,
        ifArrow,
        ifDot,
    } = props
    const list = Array.from(Array(picList.length), (item, index) => index);
    return (
        <Fragment>
            <SwiperWrapper>
                {picList.map((item, index) => {
                    return (
                        <BannerWrapper style={{ backgroundImage: `url(${item.backImg})` }} key={index}>
                            <BannerContainer>
                                <BannerImg style={{ backgroundImage: `url(${item.image})` }} />
                            </BannerContainer>
                        </BannerWrapper>
                    )
                })}
                <SwiperCardContainer>
                    {(ifArrow) && (
                        <Fragment>
                            <LeftArrow />
                            <RightArrow />
                        </Fragment>
                    )}
                    <CardDownloadContainer>
                        <CardPicLink></CardPicLink>
                        <CardTip>PC 安卓 iPhone WP iPad Mac 六大客户端</CardTip>
                        <CardShadowLeft />
                        <CardShadowRight />
                    </CardDownloadContainer>
                </SwiperCardContainer>
                {(ifDot) && (
                    <DotsContainer>
                        {
                            list.map((item, index) => {
                                return (
                                    <DotItem key={index}></DotItem>
                                )
                            })
                        }
                    </DotsContainer>)}
            </SwiperWrapper>
        </Fragment >
    )
}

export default Swiper;