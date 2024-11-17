import './darkThem.css'; // استيراد ملفات CSS الخاصة بالتنسيق
import React, { useEffect, useState } from 'react'; // استيراد React والهوكس useEffect و useState
import Blog from './Blog'; // استيراد مكون Blog
import { ThemContext, thems } from './context/ThemContext'; // استيراد السياق والمواضيع

export default function DarkThem() {
    const [them, setThem] = useState(thems.light); // تعريف حالة them الافتراضية كـ light

    function changeThem() {
        them === thems.light ? setThem(thems.dark) : setThem(thems.light); // تغيير الثيم بناءً على الحالة الحالية
    }

    useEffect(() => {
        let docbody = document.body; // الحصول على عنصر body من الوثيقة

        switch (them) {
            case thems.light:
                docbody.classList.add("bg-light"); // إضافة الكلاس bg-light للوثيقة
                docbody.classList.add("text-dark"); // إضافة الكلاس text-dark للوثيقة
                docbody.classList.remove("bg-dark"); // إزالة الكلاس bg-dark من الوثيقة
                docbody.classList.remove("text-light"); // إزالة الكلاس text-light من الوثيقة
                break;
            case thems.dark:
                docbody.classList.add("bg-dark"); // إضافة الكلاس bg-dark للوثيقة
                docbody.classList.add("text-light"); // إضافة الكلاس text-light للوثيقة
                docbody.classList.remove("bg-light"); // إزالة الكلاس bg-light من الوثيقة
                docbody.classList.remove("text-dark"); // إزالة الكلاس text-dark من الوثيقة
                break;
            default:
                break;
        }
    }, [them]); // تنفيذ هذا التأثير عند تغيير حالة them

    return (
        <ThemContext.Provider value={{ them, changeThem }}>
            <Blog them={them} /> {/* تمرير them و changeThem عبر السياق إلى مكون Blog */}
        </ThemContext.Provider>
    );
}
