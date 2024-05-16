import { styled } from "styled-components";
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { InputText } from "primereact/inputtext";

const HeaderContainer = styled.section``

const Header = () => {
    return(
        <HeaderContainer className="flex gap-3  bg-primary md:px-6 px-6 py-3 align-items-center">
            <div className="logo">LOGO</div>
        <IconField Iconposition="right" className="w-full md:w-4">
            <InputIcon  className="pi pi-search"/>
            <InputText 
                placeholder="Buscar"
                className="w-full"
            />
        </IconField>
        </HeaderContainer>
    );
}

export default Header;