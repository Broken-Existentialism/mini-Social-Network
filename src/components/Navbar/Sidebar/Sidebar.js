import s from "./Sidebar.module.css"

const Sidebar = (props) => {
    return (
        <div className={s.Sidebar}>
            <div className={s.blockSidebar}>
                <div className={s.imgSidebar}>
                    <img src='https://sun9-34.userapi.com/impg/1izCsa1wlugk7IivQUmTg1-QSq37-d75MdDdOQ/J0P4pDHpwj0.jpg?size=1218x1163&quality=95&sign=e1675dcab0b94e54e3f84dc4b3f506d7&type=album'></img>
                </div>
                <div className={s.infoSidebar}>
                    <div>Name: {props.name}</div>
                    <div>City: {props.city}</div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;