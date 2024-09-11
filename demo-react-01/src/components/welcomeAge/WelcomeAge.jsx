import style from "./WelcomeAge.module.css"

const WelcomeAge = ({name,age})=>{


return <>
<p className={style.nameParagraph}>Bienvenue {name} sur l'application React !</p>
<p className={style.ageParagraph}>Vous avez {age} ans !</p>


</>
}


export default WelcomeAge