import styled from 'styled-components';
import icon from '../../assets/menu.png'
import icon2 from '../../assets/logo.png'
import icon3 from '../../assets/user.png'
import icon4 from '../../assets/cart.png'
import Search from '../Search';
const HeaderC = styled.header`
    width: 100%;
    padding: 21px 160px;
    border-bottom: 1px solid #EDEDED;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;
const Menu = styled.div`
    width: 48px;
    height: 48px;
    border-radius: 10px;
    background-color: #F3F9FB;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const IconeMenu = styled.img`
    width: 26px;
    height: 18px;
`;
const ContainerLogo = styled.div`   
    margin-left: 16px;
    width: 138px;
    height: 28px;
`;
const IconeLogo = styled.img`
    width: 100%;
    height: 100%;
`;
const ContainerLogin = styled.div`
    width: 251px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 20px;
  

  p{
    color: #666666;
    font-family: 'HK Grotesk';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 18px;
    margin-left: 6px;
  }
`;

const IconeUser = styled.img`
    width: 24px;
    height: 24px;
`;
export default function Header(){
    return(
        <HeaderC>
            <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                <Menu><IconeMenu src={icon}/></Menu>
                <ContainerLogo><IconeLogo src={icon2}/></ContainerLogo>
            </div>
            <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                <Search/>
                <ContainerLogin>
                    <div style={{display:'flex',flexDirection:'row',alignItems:'center',borderRight:'1px solid #ccc',paddingRight:'20px'}}>
                        <IconeUser src={icon3}/>
                        <p>Sign Up/Sign In</p>
                    </div>
                    <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                        <IconeUser src={icon4}/>
                        <p>Cart</p>
                    </div>
                </ContainerLogin>
            </div>
        </HeaderC>
    )
}