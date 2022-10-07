//import s from './Music.module.css'
const Music = (props) =>{

    const changeText = (e) =>{
        let text = e.target.value
        props.textChange(text)
    }

    return(
        <div>
            <textarea  onChange={changeText}  value={props.musicText}></textarea>
            <button>Click</button>
        </div>
    )
}
export default Music;