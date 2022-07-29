import React, { Fragment, useEffect, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";

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
    MouseListener
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
    const numPic = picList.length;

    const [indexPic, setIndexPic] = useState(0);
    const idTimer = useRef(0);
    const [play, setPlay] = useState(true);

    const nextImage = () => {
        clearInterval(idTimer.current);
        setIndexPic(indexPic => (indexPic + 1) % parseInt(numPic));
    };

    const lastImage = () => {
        clearInterval(idTimer.current);
        setIndexPic(indexPic => (indexPic + numPic - 1) % parseInt(numPic));
    };

    const pickPoint = (index) => {
        clearInterval(idTimer.current);
        setIndexPic(index);
    };

    const startSwiper = () => {
        stopSwiper();
        idTimer.current = setInterval(() => setPlay(!play), cycle);
    };

    const stopSwiper = () => {
        clearInterval(idTimer.current);
    };

    useEffect(() => {
        idTimer.current = setInterval(() => {
            if (numPic > 0) {
                nextImage();
            }
        }, cycle);
        return () => {
            clearInterval(idTimer.current);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [indexPic, numPic, play]);

    return (
        <Fragment>
            <SwiperWrapper>
                {picList.map((item, index) => {
                    return (
                        <BannerWrapper
                            className={(indexPic === index) ? "" : "others"}
                            style={{ backgroundImage: `url(${item.backImg})` }}
                            key={index}
                        >
                            <BannerContainer >
                                <CSSTransition
                                    in={indexPic === index}
                                    timeout={1000}
                                    classNames="bannerImg"
                                >
                                    <BannerImg
                                        className={(indexPic === index) ? "active" : "others"}
                                        style={{ backgroundImage: `url(${item.image})` }}
                                    />
                                </CSSTransition>
                            </BannerContainer>
                        </BannerWrapper>
                    )
                })}
                <SwiperCardContainer  >
                    <MouseListener
                        onMouseOver={() => stopSwiper()}
                        onMouseOut={() => startSwiper()}
                    />
                    {(ifArrow) && (
                        <Fragment>
                            <LeftArrow onClick={() => lastImage()} />
                            <RightArrow onClick={() => nextImage()} />
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
                                    <DotItem onClick={() => pickPoint(index)} className={(indexPic === index) ? "active" : ""} key={index}></DotItem>
                                )
                            })
                        }
                    </DotsContainer>)}
            </SwiperWrapper>
        </Fragment >
    )
}

export default Swiper;