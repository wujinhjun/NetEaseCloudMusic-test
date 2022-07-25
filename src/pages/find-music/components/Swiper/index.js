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
    // let index = initialIndex;
    const numPic = picList.length;
    // console.log(picList.length);
    // console.log(`len: ${len}`);

    const [indexPic, setIndexPic] = useState(0);
    // console.log(`init: ${indexPic}`);


    // const [idTimer, setIdTimer] = useState(0);
    const idTimer = useRef(0);
    const [play, setPlay] = useState(true);

    const nextImage = () => {
        clearInterval(idTimer.current);
        setIndexPic(indexPic => (indexPic + 1) % parseInt(numPic));
        console.log("next");
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
        // nextImage();
        // setIdTimer(id);
        console.log("start: timer");
    };

    const stopSwiper = () => {
        clearInterval(idTimer.current);
        // setPlay(false);
        console.log("stop: clear timer");
        console.log(`stop: ${idTimer.current}`);
    };

    useEffect(() => {
        idTimer.current = setInterval(() => {
            if (numPic > 0) {
                nextImage();
            }
            console.log(`effect work`);
        }, cycle);
        // console.log(`effect: ${idTimer.current}`);
        // setIdTimer(id);
        // startSwiper();
        // console.log(`indexPic: ${indexPic}`);
        // console.log(idTimer);
        return () => {
            clearInterval(idTimer.current);
            // console.log("clear timer");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [indexPic, numPic, play]);

    // console.log(indexPic);

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