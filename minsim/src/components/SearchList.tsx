import { SearchListUl } from 'styles/searchStyles/SearchStyle';
import SearchChannelItem from "./SearchChannelItem";

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
    <SearchListUl>
      {datas?.map((data, index) => {
        return <SearchChannelItem key={index} {...data} />;
      })}
    </SearchListUl>
  );
}

export default SearchList;



