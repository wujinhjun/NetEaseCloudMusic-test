import React, { Fragment, useEffect } from "react";
import Banner from "../../components/Banner";
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
    console.log(recommendList);
    return (
        <Fragment>
            <Banner />
            <DiscoverWrapper>
                <DiscoverContentLeft>
                    <ContentContainer>
                        <DivideDiv className="recommend">
                            <Title name="热门推荐"
                                other={listMember} />
                            <ListForRecommend>
                                <ListItemForRecommend>
                                    <RecommendMember
                                        title="「轻音乐·安静」舒缓放松，缓解压力"
                                        photoUrl="https://raw.githubusercontent.com/wujinhjun/wujinhjun-pic/main/2.jpg"
                                        numViews="1016万"
                                        isRadio={false}
                                        listUrl="https://music.163.com/#/playlist?id=7550592680"
                                    />
                                </ListItemForRecommend>
                                <ListItemForRecommend>
                                    <RecommendMember
                                        title="「轻音乐·安静」舒缓放松，缓解压力"
                                        photoUrl="https://raw.githubusercontent.com/wujinhjun/wujinhjun-pic/main/2.jpg"
                                        numViews="1016万"
                                        isRadio={false}
                                        listUrl="https://music.163.com/#/playlist?id=7550592680"
                                    />
                                </ListItemForRecommend>
                                <ListItemForRecommend>
                                    <RecommendMember
                                        title="「轻音乐·安静」舒缓放松，缓解压力"
                                        photoUrl="https://raw.githubusercontent.com/wujinhjun/wujinhjun-pic/main/2.jpg"
                                        numViews="1016万"
                                        isRadio={false}
                                        listUrl="https://music.163.com/#/playlist?id=7550592680"
                                    />
                                </ListItemForRecommend>
                                <ListItemForRecommend>
                                    <RecommendMember
                                        title="「轻音乐·安静」舒缓放松，缓解压力"
                                        photoUrl="https://raw.githubusercontent.com/wujinhjun/wujinhjun-pic/main/2.jpg"
                                        numViews="1016万"
                                        isRadio={false}
                                        listUrl="https://music.163.com/#/playlist?id=7550592680"
                                    />
                                </ListItemForRecommend>
                                <ListItemForRecommend>
                                    <RecommendMember
                                        title="「轻音乐·安静」舒缓放松，缓解压力"
                                        photoUrl="https://raw.githubusercontent.com/wujinhjun/wujinhjun-pic/main/2.jpg"
                                        numViews="1016万"
                                        isRadio={false}
                                        listUrl="https://music.163.com/#/playlist?id=7550592680"
                                    />
                                </ListItemForRecommend>
                                <ListItemForRecommend>
                                    <RecommendMember
                                        title="「轻音乐·安静」舒缓放松，缓解压力"
                                        photoUrl="https://raw.githubusercontent.com/wujinhjun/wujinhjun-pic/main/2.jpg"
                                        numViews="1016万"
                                        isRadio={false}
                                        listUrl="https://music.163.com/#/playlist?id=7550592680"
                                    />
                                </ListItemForRecommend>
                                <ListItemForRecommend>
                                    <RecommendMember
                                        title="「轻音乐·安静」舒缓放松，缓解压力"
                                        photoUrl="https://raw.githubusercontent.com/wujinhjun/wujinhjun-pic/main/2.jpg"
                                        numViews="1016万"
                                        isRadio={false}
                                        listUrl="https://music.163.com/#/playlist?id=7550592680"
                                    />
                                </ListItemForRecommend>
                                <ListItemForRecommend>
                                    <RecommendMember
                                        title="「轻音乐·安静」舒缓放松，缓解压力"
                                        photoUrl="https://raw.githubusercontent.com/wujinhjun/wujinhjun-pic/main/2.jpg"
                                        numViews="1016万"
                                        isRadio={true}
                                        listUrl="https://music.163.com/#/playlist?id=7550592680"
                                    />
                                </ListItemForRecommend>
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