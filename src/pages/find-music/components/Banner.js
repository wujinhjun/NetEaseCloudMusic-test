import React, { Fragment, useEffect, useState } from "react";
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
import { changeClickChoose, lastPic, nextPic, getInfoBanner, changeAuto } from '../store';

const Banner = (props) => {
    const dispatch = useDispatch();

    useEffect(() => {
        console.log('banner mounted');
        dispatch(getInfoBanner());
    }, [])

    const valuePresent = useSelector((state) => state.findMusic.valuePresent);
    // const [timer, setTimer] = useState(0);
    // const [count, setCount] = useState(valuePresent);
    // const [showState, setShowState] = useState(true);

    const choosePoint = (index) => {
        // clearTimeout(timer);
        dispatch(changeClickChoose(index));
    };

    useEffect(() => {
        const id = setInterval(() => {
            if (valuePresent < 7) {
                // setCount(count => count + 1);
                dispatch(changeAuto(valuePresent + 1));
            } else {
                // setCount(count => count = 0);
                dispatch(changeAuto(0));
            }
            // setShowState(showState);
        }, 3000);

        return () => (
            clearInterval(id)
        );
    });

    const pictureData = useSelector(state => state.findMusic.pictureData);
    const list = Array.from(Array(8), (item, index) => index);
    let back;
    let image;
    if (pictureData[valuePresent]) {
        back = pictureData[valuePresent].backImg;
        image = pictureData[valuePresent].image;
    }
    // (pictureData[valuePresent]) && (const back = pictureData[valuePresent].backImg)
    return (
        (pictureData[valuePresent]) && (<Fragment>
            <BannerWrapper
                style={{
                    backgroundImage: `url(${back})`,
                }}>
                <BannerContainer>
                    {/* <SwitchTransition mode="out-in"> */}
                    {/* <CSSTransition
                        in={showState}
                        timeout={3000}
                        classNames='stage'
                    > */}
                    <BannerImg
                        style={{
                            backgroundImage: `url(${image})`,
                            // transition: "opacity 1s",
                            // opacity: 0.2
                        }} />
                    {/* </CSSTransition> */}
                    {/* </SwitchTransition> */}
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
                                        onClick={() => choosePoint(index)} />
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
        </Fragment >)
    )
};

export default Banner;