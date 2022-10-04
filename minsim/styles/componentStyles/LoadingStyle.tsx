import styled from '@emotion/styled';
import media, { getBreakPoints } from 'css-in-js-media'
getBreakPoints();

export const SearchLoadingDiv = styled.div`
  margin: 0px 64px 32px 64px;

  ${media(">desktop")} {
    margin: 0px 64px 16px 64px;
  }
  ${media("<=desktop", ">tablet")} {
    margin-left: 32px;
    margin-right: 32px;
  }
  ${media("<=tablet", ">phone")} {
    margin-left: 16px;
    margin-right: 16px;
  }
`

export const ChannelBannerLoadingDiv = styled.div`
  width: 100vw;
  height: 15vw;
`
export const ChannelLoadingDiv = styled.div`
  margin: 0px 64px 24px 64px;
  height: 192px;

  ${media(">desktop")} {
    margin: 0px 64px 16px 64px;
    
  }
  ${media("<=desktop", ">tablet")} {
    margin-left: 32px;
    margin-right: 32px;
  }
  ${media("<=tablet", ">phone")} {
    margin-left: 16px;
    margin-right: 16px;
    height: 260px;
  }
`
export const ChannelMainTextLoadingDiv = styled.div`
  margin: 96px 0px 32px 64px;
  width: 10vw;
  ${media(">desktop")} {
    margin-left: 64px;
    height: 28.4px;
  }
  ${media("<=desktop", ">tablet")} {
    margin-left: 32px;
    height: 24.7px;
  }
  ${media("<=tablet", ">phone")} {
    margin-left: 16px;
    height: 21.2px;
  };
`
export const ChannelSubTextLoadingDiv = styled.div`
  margin: 16px 0px 16px 64px;
  width: 30vw;
  ${media(">desktop")} {
    height: 50.5px;
    margin-left: 64px;
  }
  ${media("<=desktop", ">tablet")} {
    height: 43.8px;
    margin-left: 32px;
  }
  ${media("<=tablet", ">phone")} {
    height: 37.5px;
    margin-left: 16px;
  };
`