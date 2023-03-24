import { IoMdFilm } from "react-icons/io"
import { useSelector } from "react-redux";
import Card from './card';

function List() {
        const { moviesList, paginationScreen } = useSelector((state) => {
                return {
                    moviesList: state.movies.moviesList,
                    paginationScreen: state.form.paginationScreen,
                }
        });
        return(
            <div className="flex flex-col items-center">
                {moviesList && moviesList.length > 0 ?
                    <div className="w-fit grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 py-10 px-2 overflow-y-scroll cardList">
                        {paginationScreen % 2 !== 0 ? moviesList.slice(0, 10).map(movie => 
                            <Card key={movie.id} movie={movie} />
                        ) : moviesList.slice(10, 20).map(movie => 
                            <Card key={movie.id} movie={movie} />
                        )}
                    </div>
                :
                moviesList && moviesList.length === 0 ? 
                <div className="flex flex-col items-center w-fit h-fit dark:text-white py-20 px-4">
                    <h2>No search results</h2>
                </div> 
                :
                <div className="flex flex-col items-center w-fit h-fit dark:text-white py-20">
                    <IoMdFilm size="60px" className="dark:text-blue" />
                    <h2 className="mb-8 text-xl font-medium leading-tight text-neutral-800 dark:text-white">Start Searching Now</h2>
                    <p className="mb-2 text-base text-neutral dark:text-white">Discover a vast collection of movies from different genres, countries, and eras.</p>
                    <p className="mb-2 text-base text-neutral dark:text-white">Whether you're a casual movie-goer or a film enthusiast, this is the perfect place to find your next movie adventure.</p>
                    <p className="mb-2 text-base text-neutral dark:text-white">Start exploring and discover your next favorite movie today!</p>
                </div>
                }
            </div>
        )
}

export default List;