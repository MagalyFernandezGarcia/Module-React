import  style from "./welcome.module.css"
const Welcome = ({lastname,firstname})=>{


    return (
    <p className={style.demo}>Bienvenue {firstname} <span className={style.name}>{lastname}</span></p>
) 
}

export default Welcome