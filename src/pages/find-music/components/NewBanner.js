import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";


import { changeClickChoose, lastPic, nextPic, getInfoBanner, changeAuto } from '../store';

import Swiper from "./Swiper";
const NewBanner = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        console.log('banner mounted');
        dispatch(getInfoBanner());
    }, [])

    const pictureData = useSelector(state => state.findMusic.pictureData);
    return (
        <Fragment>
            <Swiper
                picList={pictureData}
                cycle="3000"
                ifDot={true}
                ifArrow="true"
            />

        </Fragment>
    )
}

export default NewBanner;