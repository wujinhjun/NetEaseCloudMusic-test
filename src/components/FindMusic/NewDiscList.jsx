import NewDisc from "./NewDisc";

import { ListAlbum } from "../../styles/FindMusicComponentsStyle";

const NewDiscList = (props) => {
  const { location } = props;
  console.log(location);
  return (
    <ListAlbum location={location} indexZ={location === 0 ? 100 : -1}>
      <NewDisc />
      <NewDisc />
      <NewDisc />
      <NewDisc />
      <NewDisc />
    </ListAlbum>
  );
};

export default NewDiscList;
