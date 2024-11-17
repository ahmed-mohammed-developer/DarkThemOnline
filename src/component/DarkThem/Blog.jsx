import React, {useContext} from 'react'
import Title from '../Title'
import Button from '../Button'
import { ThemContext } from './context/ThemContext'

export default function Blog() {
    const {them, changeThem} = useContext(ThemContext)

  return (
    <div className='container p-5'>
          <Title text={`My Blog with ${them} Them`}/>
          <span style={{
            position: "absolute",
            top: 10,
            right: 10,
          }}>
            <Button text={them === "dark" ? "light" : "dark"}
            btnClass={`${them === "dark" && "btn-light"}`}
             onClick={changeThem}/>
            </span>
            <p className='pt-5'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem eveniet fugiat commodi, accusamus asperiores a quasi facere nostrum? Iure, odit!
            </p>

    </div>
  )
}
