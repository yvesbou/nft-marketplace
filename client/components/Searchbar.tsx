import { FC } from "react"
import styled from "styled-components";

const Searchbar: FC = () => {

    return (
        <SearchCard>
          <InnerSearchCard>
            Search the most wanted NFTs 🚀
            <Container>
              <IconBox></IconBox>
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