import classes from './Home.module.css';
import AlbumList from './AlbumList';
const dummy_Album = [
    {
        date : 'JUL16',
        name : 'DETROIT , MI',
        dis :  'DTE ENERGY MUSIC THEATRE',
    },

    {
        date : 'JUL19',
        name : 'TORONTO,ON',
        dis :  ' BUDWEISER STAGE',
    },

    {
        date : 'JUL 22',
        name : ' BRISTOW, VA',
        dis :  ' JIGGY LUBE LIVE',
    },

    {
        date : 'JUL 29',
        name : 'PHOENIX, AZ',
        dis :  ' AK-CHIN PAVILION',
    },

    {
        date : 'AUG 2',
        name : ' LAS VEGAS, NV',
        dis :  'T-MOBILE ARENA',
    },

    {
        date : 'AUG 7',
        name : ' CONCORD, CA',
        dis :  ' CONCORD PAVILION',
    }
];
const Home = () => {
    return (
        <div className={classes.maingen}>
            <div className={classes.generics}>
                <h1>The Generics</h1>
                <p>Get our Latest Album</p>
                <div></div>
            </div>
            <div className={classes.album}>
                <h2>TOURS</h2>
                {
                    dummy_Album.map((item) => (
                        <AlbumList key = {item.date} item = {item}/>
                    ))
                }
            </div>
            <div className={classes.gen}>
                <h2>The Generics </h2>
            </div>
        </div>
    )
}

export default Home