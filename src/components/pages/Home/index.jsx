import { Benefits } from "./Benefits";
import { Contact } from "./Contact";
import { Header } from "../Header";
import { Intro } from "./Intro";
import { Footer } from "../Footer";

export const Home = ({width}) => {


    return (
        <>
            <Header width={width}/>
            <Intro width={width}/>
            <Benefits/>
            <Contact width={width}/>
            <Footer/>
        </>
    )
}