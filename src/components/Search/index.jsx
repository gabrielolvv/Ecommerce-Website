import styled from 'styled-components';
import icon from '../../assets/Search.png'
import icon2 from '../../assets/list.png'
const ContainerSearch = styled.div`
  width: 507px;
  padding: 16px;
  border: none;
  background-color: #F3F9FB;
  border-radius: 10px;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
  margin-right: 30px;
`;
const IconeSearch = styled.img`
  width: 14px;
  height: 14px;
  margin-right: 10px;
`;
const IconeList = styled.img`
  width: 24px;
  height: 24px;
`;
const Input = styled.input`
  width: 90%;
  border: none;
  outline: none;
  background-color: transparent;
`;
export default function Search(){
    return(
        <ContainerSearch>
            <div style={{width:'90%',display:'flex',flexDirection:'row',alignItems:'center'}}>
                <IconeSearch src={icon}/>
                <Input type="text" placeholder='Search essentials, groceries and more...' />
            </div>
            <IconeList src={icon2}/>
        </ContainerSearch>
    )
}