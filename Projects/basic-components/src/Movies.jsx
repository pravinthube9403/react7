import Movie from "./Movie";
import App from "./App";
function Movies (props)
{
    const {title,url}=props
    return (
        <div className='movies'>
				<Movie title={title} link={url}/>			
			</div>
		)
}
export default Movies;