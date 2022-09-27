import styled from "@emotion/styled";
import SearchChannelItem from "./SearchChannelItem";

const SearchListStyle = styled.div`
  display: flex;
  flex-direction: column;
`;
const UlName = styled.ul`
  text-align: center;
`;

interface ISearchItem {
  id: string;
  banner: string;
  name: string;
  description: string;
  subscriber: number;
  video: number;
  thumbnail: string;
  time: string;
  view: number;
}

interface Iprops {
  datas: ISearchItem[];
}

function SearchList({ datas }: Iprops) {
  return (
    <UlName>
      {datas.map((data, index) => {
        return <SearchChannelItem key={index} {...data} />;
      })}
    </UlName>
  );
}

export default SearchList;



