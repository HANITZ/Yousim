import styled from "@emotion/styled";
import { useRouter } from "next/router";
import SearchChannelItem from "./SearchChannelItem";

const SearchListStyle = styled.div`
  display: flex;
  flex-direction: column;
`;
const UlName = styled.ul`
  text-align: center;
`;

interface Iprops {
    datas: object[]
  
}

function SearchList({datas}: Iprops) {
  const router = useRouter();



  const searchData = [
    {
      id: 1,
      name: "아이유",
      description: "좋은 아침입니다.",
      subscriber: 123,
      video: 2134,
      thumbnail:
        "https://w.namu.la/s/59bbf73b123d0f9f693be3c3de9506b24a1f2a3067b4ffd0207a3a08eee32d750ebf1ca3e33084aa3bbcd6916bd0a8a187cc4556b87fa269c25f1a7ff3ea279f1e372d23aa0a6eee8d5932c70d5dac0ef353e26595028b764a212eb2823e385cb1e725396ecde616d411518b6b003447",
    },
    {
      id: 2,
      name: "IU",
      description: "좋은 새벽입니다.",
      subscriber: 321,
      video: 4213,
      thumbnail:
        "https://dimg.donga.com/ugc/CDB/WOMAN/Article/62/aa/bd/43/62aabd4312a1d2738250.jpg",
    },
  ];

  return (
    <UlName>
      {datas.map((data, index) => {
        return <SearchChannelItem key={index} {...data} />;
      })}
    </UlName>
  );
}

export default SearchList;




