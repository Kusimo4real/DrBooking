import styled, {css} from 'styled-components';
import { devices } from '../../assets/breakpoint';
import img2 from "../../assets/team/Abdulsemiukusimo.png";


export const TeamContainer = styled.div`
    display: flex;
    gap: 30px;
    justify-content: center;
    text-align: center;
    margin-top: 20px;

    @media ${devices.mobileL}{
        flex-direction: column;
      }
`

export const Figure = styled.figure`
  width: 120px;
  height: 120px;
  overflow: hidden;
  border-radius: 100%;
  margin: 0 auto;

 

  ${(props) => props.team2 && css`
    background-image: url(${img2});
  `}
  
 
  background-position: center;
  background-size: cover;
`;
