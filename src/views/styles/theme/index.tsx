import { useSelector } from "react-redux"
import { ThemeProvider } from "styled-components";
import { RootState } from "../../store"
import dark from "./dark";
import light from "./light";
import { Theme } from "../types";

const ThemeProviderWrapper = (props:any) => {
    const theme = useSelector((state:RootState)=>state.user.theme);

    return(
        <ThemeProvider theme={theme === Theme.Dark ? dark :light} {...props}/>
    );
};

export default ThemeProviderWrapper;