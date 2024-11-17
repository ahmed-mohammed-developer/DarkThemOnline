import React, { useContext } from 'react'; // استيراد React والهوك useContext
import Title from '../Title'; // استيراد مكون Title
import Button from '../Button'; // استيراد مكون Button
import { ThemContext } from './context/ThemContext'; // استيراد السياق

export default function Blog() {
    const { them, changeThem } = useContext(ThemContext); // استخدام السياق للحصول على them و changeThem

    return (
        <div className='container p-5'>
            <Title text={`My Blog with ${them} Them`} /> {/* عرض عنوان مع الثيم الحالي */}
            <span style={{
                position: "absolute",
                top: 10,
                right: 10,
            }}>
                <Button text={them === "dark" ? "light" : "dark"}
                btnClass={`${them === "dark" && "btn-light"}`}
                onClick={changeThem} /> {/* زر لتغيير الثيم */}
            </span>
            <p className='pt-5'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem eveniet fugiat commodi, accusamus asperiores a quasi facere nostrum? Iure, odit! {/* نص الفقرة */}
            </p>
        </div>
    )
}
