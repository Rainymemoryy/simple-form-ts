import styled from '@emotion/styled'

export const OverFlowDiv = styled.div`
  overflow-y: scroll;

  .border-color-top {
    border-top-color: rgb(71 85 105);
  }

  .border-color-left {
    border-left-color: rgb(71 85 105);
  }
  ::-webkit-scrollbar-track {
    background-color: transparent;
  }
  ::-webkit-scrollbar {
    width: 4px;
    height: 4px;
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background-color: transparent;
    border-radius: 5px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background-color: transparent;
  }

  :hover {
    ::-webkit-scrollbar-track {
      background-color: transparent;
    }
    ::-webkit-scrollbar {
      width: 4px;
      height: 4px;
      background-color: transparent;
    }
    ::-webkit-scrollbar-thumb {
      background-color: #999999;
      border-radius: 4px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background-color: #7c7c7c;
    }
  }
`
