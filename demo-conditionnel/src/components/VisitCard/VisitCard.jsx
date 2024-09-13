import style from "./VistiCard.module.css"
import clsx from "clsx"
const VisitCard = ({
    firstname,
    lastname,
    jobTitle,
    jobExp = 5,
    gender = null,
    email,
})=>{

    const cardClassName = clsx(
        style["card"],
        gender==="F" && style["card-f"],
        gender==="H" && style["card-h"],
        gender==="X" && style["card-x"],
        jobExp > 15 && style["xp-sr"]
    )


    return(<div className={cardClassName}>
    <p>{firstname} <span className={style["name"]}>{lastname}</span></p>
    {/* <p>{jobTitle} {(jobExp <5)?<span className={style["xp-jr"]}>Junior</span> : ""}</p> fait la même chose que la ligne d'en dessous mais écrit différement */}
    <p>{jobTitle} {(jobExp <5)&&<span className={style["xp-jr"]}></span> }</p>
    <p className={style["email"]}>{email}</p>

    
    
    </div>)
}

export default VisitCard