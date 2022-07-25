import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";

import {
    DiscoverWrapper,
    DiscoverContentLeft,
    ContentContainer,
    DivideDiv,
    SortListContainer,
    SortListMember,
    LineDivide,
    ListForRecommend,
    ListItemForRecommend
} from "./style";

import NewBanner from "../../components/NewBanner";
import Title from "../../components/Title";
import RecommendMember from "../../components/RecommendMember";

import { getInfoRecommend } from "../../store";

const Discover = () => {

    const listMember = <SortListContainer>
        <SortListMember>华语</SortListMember>
        <LineDivide>|</LineDivide>
        <SortListMember>流行</SortListMember>
        <LineDivide>|</LineDivide>
        <SortListMember>摇滚</SortListMember>
        <LineDivide>|</LineDivide>
        <SortListMember>民谣</SortListMember>
        <LineDivide>|</LineDivide>
        <SortListMember>电子</SortListMember>
    </SortListContainer>
    const dispatch = useDispatch();

    useEffect(() => {
        console.log('discover recommend mounted');
        dispatch(getInfoRecommend());
    }, [])
    const recommendList = useSelector((state) => state.findMusic.recommendList)
    // console.log(recommendList);
    return (
        <Fragment>
            <NewBanner></NewBanner>
            {/* <Banner /> */}
            <DiscoverWrapper>
                <DiscoverContentLeft>
                    <ContentContainer>
                        <DivideDiv className="recommend">
                            <Title name="热门推荐"
                                other={listMember} />
                            <ListForRecommend>
                                {recommendList.map((item, index) => {
                                    return (
                                        <ListItemForRecommend key={item.id}>
                                            <RecommendMember
                                                title={item.title}
                                                photoUrl={item.photoUrl}
                                                numViews={item.numViews}
                                                isRadio={item.isRadio}
                                                listUrl={item.listUrl}
                                            />
                                        </ListItemForRecommend>
                                    )
                                })}
                            </ListForRecommend>

                        </DivideDiv>
                        <DivideDiv>
                            <Title name="新碟上架" />
                        </DivideDiv>
                    </ContentContainer>
                </DiscoverContentLeft>
            </DiscoverWrapper>
        </Fragment >
    )
}

export default Discover;