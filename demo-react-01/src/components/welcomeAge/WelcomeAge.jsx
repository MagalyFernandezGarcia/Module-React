import style from "./WelcomeAge.module.css"

/**
 * 
 * @param {{name:string, age:number}} props 
 * @returns rendu du composant
 */
const WelcomeAge = ({name,age = 18})=>{


return <>
<p className={style.nameParagraph}>Bienvenue {name} sur l'application React !</p>
<p className={style.ageParagraph}>Vous avez {age} ans !</p>


</>
}


export default WelcomeAge