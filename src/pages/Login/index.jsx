import { styled } from "styled-components";
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { useState } from "react";

const LoginContainer = styled.section``;

const Login = () => {

    const [visible, setVisible] = useState(false)
    return ( 
        <LoginContainer className="h-screen flex p-3 justify-content-center align-items-center surface-200">
            <form className="w-12 md:w-4 surface-0 p-3 border-round-md">
                <h3>Seja bem-vindo</h3>
                <InputText 
                    className="w-full mb-3" 
                    placeholder="Email@email.com"
                    type="email"
                />
                <IconField iconPosition="right" className=" mb-4">
                    <InputIcon 
                        onClick={() => setVisible(!visible)}
                        className={`pi ${visible ? 'pi-eye' : 'pi-eye-slash'} text-xl cursor-pointer`}
                    />
                    <InputText 
                        type={visible ? 'password' : 'text'}
                        className="w-full" 
                        placeholder="Password"
                    />
                </IconField>
                <Button
                    type="submit"
                    label="Entrar"
                    className="w-full"
                />
            </form>
        </LoginContainer>
     );
}
 
export default Login;