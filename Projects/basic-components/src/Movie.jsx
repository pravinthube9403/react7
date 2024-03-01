function Movie (props)
{
 const {title,link}=props
    return (
			<div className="movie">
				<img src={link} alt='movies' />
				<h2>{title}</h2>
			</div>
		)
}
export default Movie;