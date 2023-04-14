import { useState, useEffect } from "react";
import { useSearchParams, useLocation} from 'react-router-dom';
import { data } from "../data";
import './style.css';
import { Course } from "../Course";

export const Search = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchValue, setSearchValue] = useState('');
    const [dataset, setDataset] = useState(data);
    const location = useLocation();
    const levels = Array.from(new Set(data.map(el=> el.level)));
    const names = Array.from(new Set(data.map(el=> el.name)));
    const [level, setLevel] = useState('');
    const [name, setName] = useState('');

    levels.unshift('');
    names.unshift('');

    useEffect(()=>{
        let timeout;
        const search = {
            course: searchValue,
        };
        console.log(level, name, dataset)
        
        if(level) {
            setDataset(()=>data.filter(el=> el.level.startsWith(level)));
            console.log('level')
        };

        if(name) {
            setDataset(()=>data.filter(el=> el.name.startsWith(name)))
        };

        if(searchValue){
            timeout = setTimeout(()=>{
                setSearchParams(search, {replace: true});
                setDataset(dataset=>dataset.filter(el=> el.name.toLowerCase().includes(searchValue.toLowerCase())))
              }, 300);
        };

        if(level === '' && name === '' && location.search === ''){
            setDataset(data);
        };
        if(searchValue === '' && level === '' && name === '') {
            setDataset(data);
            setSearchParams('');
        };

        return () => clearTimeout(timeout);
    },[searchValue, level, name]);
          
    const handleChange = e => {
        setSearchValue(e.target.value);
    };
    const handleChooseLevel = e => {
        setLevel(e.target.value);
    };
    const handleChooseName = e => {
        setName(e.target.value);
    };
        
        return (
            <>
            <form action="" className="search">
                <input 
                    className="search__field" 
                    type="text" 
                    placeholder="Search"  
                    onChange={handleChange}
                    value={searchValue}
                />  
                <div className="selects"> 
                    <select name="" id="" onChange={handleChooseLevel}>
                        {levels.map(lvl=>{
                            if(lvl === '') {
                                return <option value={lvl} key={lvl}>Set Level</option>
                            } else {
                                return <option value={lvl} key={lvl}>{lvl}</option>
                            }
                        })}
                    </select>  
                    <select name="" id="" onChange={handleChooseName}>
                        {names.map(name => {
                            if(name === '') {
                                return <option value={name} key={name}>Set Subject</option>
                            } else {
                                return <option value={name} key={name}>{name}</option>
                            }
                        })}
                    </select>    
                </div>   
            </form>
            <ul className="courses container">
                {dataset.map((course)=>  <Course course={course} key={course.id}/>)}
            </ul>
            </>

        );
    
};