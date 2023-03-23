import { useSelector } from "react-redux";
import Card from './card';

function List() {
    const { moviesList, paginationScreen, searchTerm } = useSelector((state) => {
        return {
          moviesList: state.movies.moviesList,
          searchTerm: state.movies.searchTerm,
          paginationScreen: state.form.paginationScreen,
        }
      });
      console.log('paginationScreen', paginationScreen)
    return(
      <div className="flex flex-col items-center">
        {moviesList && moviesList.length > 0 ?
          <div className="w-fit grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 py-10 px-2 overflow-y-scroll" style={{ maxHeight: '68vh'}}>
            {paginationScreen % 2 !== 0 ? moviesList.slice(0, 10).map(movie => 
              <Card key={movie.id} movie={movie} />
            ) : moviesList.slice(10, 20).map(movie => 
              <Card key={movie.id} movie={movie} />
            )}
          </div>
        :
        moviesList && moviesList.length === 0 ? 
        <div className="flex flex-col items-center w-fit h-fit dark:text-white py-20">
          <h2>No search results</h2>
        </div> 
        :
        <div className="flex flex-col items-center w-fit h-fit dark:text-white py-20">
          <h2 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-white">Start Searching Now</h2>
          <p className="mb-4 text-base text-neutral dark:text-white">Discover a vast collection of movies from different genres, countries, and eras.</p>
        </div>
        }
      </div>
    )
}

export default List;