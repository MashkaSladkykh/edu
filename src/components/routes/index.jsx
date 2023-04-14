import { Route, Routes} from "react-router-dom";
import { Home } from "../pages/Home";
import { Courses } from "../pages/Courses";

export const Edu = ({width}) => {
  return (
    <Routes>
      <Route path="/" element={<Home width={width}/>}/>
      <Route path="/courses" element={<Courses width={width}/>}/> 
    </Routes>
  )
};