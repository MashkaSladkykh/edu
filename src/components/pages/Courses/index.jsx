import { Footer } from "../Footer";
import { Header } from "../Header";
import { Search } from "./Search";
import './style.css';

export const Courses = ({width}) => {

    return (
        <>
            <Header width={width}/>
            <Search/>
            <Footer/>
        </>
    )
}