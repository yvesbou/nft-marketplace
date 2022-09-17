import { FC } from "react"
import styled from "styled-components";

const Searchbar: FC = () => {

    return (
        <SearchCard>
          <InnerSearchCard>
            Search the most wanted NFTs 🚀
            <Container>
              <IconBox><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" className="feather feather-search"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg></IconBox>
              <SearchInputContainer></SearchInputContainer>
            </Container>
          </InnerSearchCard>
        </SearchCard>
    )
}

const SearchCard = styled.div`
  margin-top: 16px;
  margin-bottom: 16px;
  display: flex;
	flex-direction: row;
  padding: 1px;
  border-radius: 15px;
  box-shadow: rgba(100, 100, 111, 0.3) 0px 7px 29px 0px;
  background: linear-gradient(124deg, #ff2400, #e81d1d, #e8b71d, #e3e81d, #1de840, #1ddde8, #2b1de8, #dd00f3, #dd00f3);
  background-size: 1800% 1800%;

  -webkit-animation: rainbow 18s ease infinite;
  -z-animation: rainbow 18s ease infinite;
  -o-animation: rainbow 18s ease infinite;
    animation: rainbow 18s ease infinite;}

  @-webkit-keyframes rainbow {
      0%{background-position:0% 82%}
      50%{background-position:100% 19%}
      100%{background-position:0% 82%}
  }
  @-moz-keyframes rainbow {
      0%{background-position:0% 82%}
      50%{background-position:100% 19%}
      100%{background-position:0% 82%}
  }
  @-o-keyframes rainbow {
      0%{background-position:0% 82%}
      50%{background-position:100% 19%}
      100%{background-position:0% 82%}
  }
  @keyframes rainbow { 
      0%{background-position:0% 82%}
      50%{background-position:100% 19%}
      100%{background-position:0% 82%}
  }

  :focus {
    outline: none;
    color: #FFF;
    background-color: lighten(#e3edf7, 3%);
  }

`

const InnerSearchCard = styled.div`
  font-family: 'Orbitron', sans-serif;
  font-weight: 600;
  border-radius: 15px;
  padding: 16px;
  width: 100%
`

const Container = styled.div`
  display: flex;
`

const IconBox = styled.div`
  min-width: 46px;
  min-height: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--border-radius);
  margin-right: 12px;
  box-shadow: 
    -2px -2px 6px rgba(#fff, .6),
    2px 2px 12px #c8d8e7;
    
  svg {
    transform: translate(-1px, -1px);    
  }
`

const SearchInputContainer = styled.input`
  background-color: #e3edf7;
  margin-top: 16px;
  margin-bottom: 8px;
  padding: 16px 32px;
  border-radius: 16px;
  
  display: block;
  font-family: 'Orbitron', sans-serif;
  font-weight: 600;
  -webkit-appearance: none;
  transition: all 240ms ease-out;
  width: 100%;
  -webkit-box-shadow:inset 0 0 3px #111;
  -moz-box-shadow:inset 0 0 3px #111;
  box-shadow:inset 0 0 3px #111;
  border: none;
  background: transparent;

  &:focus {
    outline: none;
    color: #000;
    background-color: lighten(#e3edf7, 3%);
  }

`

export default Searchbar;