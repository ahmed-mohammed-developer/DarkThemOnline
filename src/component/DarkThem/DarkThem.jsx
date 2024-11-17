import './darkThem.css';
import React, { useEffect, useState } from 'react';
import Blog from './Blog';
import { ThemContext, thems } from './context/ThemContext';

export default function DarkThem() {
    const [them, setThem] = useState(thems.light);

    function changeThem() {
        them === thems.light ? setThem(thems.dark) : setThem(thems.light);
    }

    useEffect(() => {
        let docbody = document.body;

        switch (them) {
            case thems.light:
                docbody.classList.add("bg-light");
                docbody.classList.add("text-dark");
                docbody.classList.remove("bg-dark");
                docbody.classList.remove("text-light");
                break;
            case thems.dark:
                docbody.classList.add("bg-dark");
                docbody.classList.add("text-light");
                docbody.classList.remove("bg-light");
                docbody.classList.remove("text-dark");
                break;
            default:
                break;
        }
    }, [them]); // التبعيات هي `them` فقط

    return (
        <ThemContext.Provider value={{ them, changeThem }}>
            <Blog them={them} />
        </ThemContext.Provider>
    );
}
