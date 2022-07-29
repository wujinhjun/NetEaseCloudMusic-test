import React, { Fragment } from "react";

import {
    TitleWrapper,
    TitleName,
    MoreIconContainer,
    MoreContent,
    MoreIcon
} from "./style"

const Title = (props) => {
    const { name, other } = props
    if (!other) {
        return (
            <Fragment>
                <TitleWrapper>
                    <TitleName>{name}</TitleName>
                    <MoreIconContainer>
                        <MoreContent>更多</MoreContent>
                        <MoreIcon></MoreIcon>
                    </MoreIconContainer>
                </TitleWrapper>
            </Fragment>
        )
    } else {
        return (
            <Fragment>
                <TitleWrapper>
                    <TitleName>{name}</TitleName>
                    {other}
                    <MoreIconContainer>
                        <MoreContent>更多</MoreContent>
                        <MoreIcon></MoreIcon>
                    </MoreIconContainer>
                </TitleWrapper>
            </Fragment>
        )
    }
}

export default Title;