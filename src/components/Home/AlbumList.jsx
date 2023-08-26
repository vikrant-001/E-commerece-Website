import classes from './AlbumList.module.css'
const AlbumList = (props) => {
    return (
        <div>
            <div className={classes.template}>
                <p>{props.item.date}</p>
                <p>{props.item.name}</p>
                <p>{props.item.dis}</p>
                <button>Buy Ticket </button>
            </div>
        </div>
    )
}
export default AlbumList;