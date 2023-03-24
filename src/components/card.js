import { IoIosStar, IoIosAddCircleOutline, IoMdFilm } from "react-icons/io"
import {useDispatch, useSelector} from "react-redux";
import { setOwnedList } from '../store';

function Card({movie}) {
  const dispatch = useDispatch();
  const { ownedList } = useSelector((state) => {
    return {
      ownedList: state.movies.ownedList,
    }
  });

  const handleOwnedAddition = (id) => {
    let newList = [...ownedList];
    if (newList.includes(id)) {
      newList.splice(
          newList.findIndex((ownedId) => ownedId === id),
          1
      );
  } else {
      newList.push(id);
  }
    dispatch(setOwnedList(newList)); 
  }
  return(
    <div className="relative block max-w-sm rounded-lg bg-white shadow-md dark:bg-neutral overflow-hidden transform transition duration-500 hover:scale-105">
        <img 
            className="rounded-t-lg min-w-full" 
            alt="Movie Background"
            src={movie.poster_path ? `http://image.tmdb.org/t/p/w500/${movie.poster_path}` : 'https://critics.io/img/movies/poster-placeholder.png?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'} />
        <div className={`absolute top-2 right-2 bg-neutral text-white rounded-full px-2 py-1 text-sm flex items-center gap-1`}>
            <span>{movie.vote_average ? movie.vote_average.toFixed(1) : "7.0"}</span>
            <IoIosStar className="text-lg" />
        </div>
        <div  type="button" onClick={() => handleOwnedAddition(movie.id)} className={` cursor-pointer absolute top-12 right-2 bg-neutral text-white rounded-full px-2 py-1 text-sm flex items-center gap-1`}>
            <IoIosAddCircleOutline title="Add to owned" className="text-lg" />
        </div>


        <div onClick={() => handleOwnedAddition(movie.id)} className="absolute left-0 top-0 h-16 w-16 cursor-pointer">
            <div
            className={`absolute transform -rotate-45 ${ownedList && ownedList.includes(movie.id) ? `bg-blue` : `bg-red`} text-center text-white font-semibold py-1 left-[-38px] top-[28px] w-[170px]`}>
            {ownedList && ownedList.includes(movie.id) ? 'Owned' : 'Wishlist'}
            </div>
        </div>
        <div className="p-4">
            <h5 title={movie.title} className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-white">{movie.title.length > 40 ? `${movie.title.substr(0, 40)}...` : movie.title}</h5>
            <p className="mb-4 text-base text-neutral dark:text-light_gray">{movie.release_date.split('-')[0]}</p>
            <p title={movie.overview} className="mb-4 text-base text-neutral dark:text-white text-xs">{movie.overview.length > 100 ? `${movie.overview.substr(0, 100)}...` : movie.overview}</p>
        </div>
    </div>  
  )
}

export default Card;