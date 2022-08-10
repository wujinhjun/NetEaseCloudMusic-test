import {
  ListItemAlbum,
  DiscWrapper,
  ImgBack,
  CoverAlbum,
  NameAndAuthor,
  NameLink,
  AuthorLink,
} from "./style";

const NewDisc = (props) => {
  const {
    picLink = "https://p3.music.126.net/cPNb0yaIY0XgvtmKFN7Eow==/109951167704255473.jpg?param=100y100",
    name = "被动的观众",
    author = "戴佩妮",
  } = props;
  return (
    <ListItemAlbum>
      <DiscWrapper>
        <ImgBack src={picLink} />
        <CoverAlbum />
      </DiscWrapper>
      <NameAndAuthor>
        <NameLink>{name}</NameLink>
      </NameAndAuthor>
      <NameAndAuthor>
        <AuthorLink>{author}</AuthorLink>
      </NameAndAuthor>
    </ListItemAlbum>
  );
};

export default NewDisc;
