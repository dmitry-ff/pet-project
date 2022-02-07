import styled from '@emotion/styled';

export const NavigationDiv = styled.div`
    display: flex;
    padding:0 10px;    
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    border-bottom:1px solid rgba(194, 194, 194,0.2);
    box-shadow:0px 0 10px rgba(194, 194, 194,0.4);;
`

export const Navbar = styled.nav`
    display:flex;
        & a{
        color: rgb(128, 122, 122);
        padding: 25px 20px;
        text-decoration: none;
        font-size: 1.5em;
            &:hover{
                background-color: rgba(238, 237, 237, 0.548);
    }
    }
`
export const Logo = styled.img`
    width:64px;
`
export const FakeElem = styled.div`
    background:transparent;
    padding:20px;
`
