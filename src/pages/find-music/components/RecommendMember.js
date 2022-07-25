import React, { Fragment } from "react";

import {
    Pic,
    Cover,
    Mask,
    BottomIcon,
    HeadsetIcon,
    NumberAudience,
    PlayIcon,
    TitleForRecommend,
    RadioIcon
} from "./style";

/*
every recommendation bar will have a photo,
a number of views,
a title
and a label for whether it is a radio show
*/
const RecommendMember = (props) => {
    const {
        title,
        photoUrl,
        numViews,
        isRadio,
        listUrl
    } = props
    console.log(props);
    return (
        <Fragment>
            <Cover>
                <Pic style={{ backgroundImage: `url(${photoUrl})`, }}></Pic>
                <Mask href={listUrl}></Mask>
                <BottomIcon>
                    <HeadsetIcon></HeadsetIcon>
                    <NumberAudience>{numViews}</NumberAudience>
                    <PlayIcon></PlayIcon>
                </BottomIcon>
            </Cover>
            <TitleForRecommend>
                {isRadio && (<RadioIcon />)}
                {title}
            </TitleForRecommend>

        </Fragment>
    )
}

export default RecommendMember;