import React, { Fragment } from "react";
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
import { useDispatch, connect } from "react-redux";
import { changeClickChoose, lastPic, nextPic } from '../store';

const Banner = (props) => {
    const dispatch = useDispatch();
    const list = Array.from(Array(8), (item, index) => index);
    const { valuePresent } = props;
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
                                if (index === valuePresent) {
                                    return (
                                        <DotItem className="active" key={item} onClick={() => dispatch(changeClickChoose(index))}></DotItem>
                                    )
                                } else {
                                    return (
                                        <DotItem key={item} onClick={() => dispatch(changeClickChoose(index))}></DotItem>
                                    )
                                }

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



const mapState = (state) => {
    return {
        valuePresent: state.findMusic.valuePresent
    }
}

export default connect(mapState, null)(Banner);