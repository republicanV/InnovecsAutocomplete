const movies = [
  {
    id: 1,
    image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BODE1MDczNTUxOV5BMl5BanBnXkFtZTcwMTA0NDQyNA@@._V1_UX182_CR0,0,182,268_AL_.jpg',
    title: 'The Terminator',
    director: 'James Cameron',
  },
  {
    id: 2,
    image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BZWIxNzM5YzQtY2FmMS00Yjc3LWI1ZjUtNGVjMjMzZTIxZTIxXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg',
    title: 'Groundhog Day',
    director: 'Harold Ramis',
  },
  {
    id: 3,
    image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMmVmODY1MzEtYTMwZC00MzNhLWFkNDMtZjAwM2EwODUxZTA5XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UX182_CR0,0,182,268_AL_.jpg',
    title: 'Jaws',
    director: 'Steven Spielberg',
  },
  {
    id: 4,
    image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTY1NTI0ODUyOF5BMl5BanBnXkFtZTgwNTEyNjQ0MDE@._V1_UX182_CR0,0,182,268_AL_.jpg',
    title: 'Monsters, Inc.',
    director: 'Pete Docter, David Silverman',
  },
  {
    id: 5,
    image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTY5MzYzNjc5NV5BMl5BanBnXkFtZTYwNTUyNTc2._V1_UX182_CR0,0,182,268_AL_.jpg',
    title: 'Catch Me If You Can',
    director: 'Steven Spielberg',
  },
  {
    id: 6,
    image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BYTY2MTlhMTItZGFiOS00ZGM5LTlhYjUtZWU4NmZmOWJmNzc0XkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_UX182_CR0,0,182,268_AL_.jpg',
    title: 'Mad Max: Fury Road',
    director: 'George Miller',
  },
  {
    id: 7,
    image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMzM5NjUxOTEyMl5BMl5BanBnXkFtZTgwNjEyMDM0MDE@._V1_UX182_CR0,0,182,268_AL_.jpg',
    title: 'The Grand Budapest Hotel',
    director: 'Wes Anderson',
  },
  {
    id: 8,
    image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BY2NkNTcxNjAtODhjMS00Mjg2LWI1OGItMjRhMGJlODBkZTVlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNzAxMjE1NDg@._V1_UX182_CR0,0,182,268_AL_.jpg',
    title: 'Shutter Island',
    director: 'Martin Scorsese',
  },
  {
    id: 9,
    image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BYjgwY2E1N2QtNDJkMi00YzE4LThiYTItYWI5YmE4NWMzMGFhXkEyXkFqcGdeQXVyMjU3OTA4NzQ@._V1_UX182_CR0,0,182,268_AL_.jpg',
    title: 'Gone Girl',
    director: 'David Fincher',
  },
  {
    id: 10,
    image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BYTczMGFiOWItMjA3Mi00YTU5LWIwMDgtYTEzNjRkNDkwMTE2XkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_UX182_CR0,0,182,268_AL_.jpg',
    title: 'Kill Bill: Vol. 1',
    director: 'Quentin Tarantino',
  },
  {
    id: 11,
    image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BNDJiZDgyZjctYmRjMS00ZjdkLTkwMTEtNGU1NDg3NDQ0Yzk1XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg',
    title: 'Fargo',
    director: 'Joel Coen, Ethan Coen',
  },
  {
    id: 12,
    image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMWM4NTFhYjctNzUyNi00NGMwLTk3NTYtMDIyNTZmMzRlYmQyXkEyXkFqcGdeQXVyMTAwMzUyOTc@._V1_UX182_CR0,0,182,268_AL_.jpg',
    title: 'The Sixth Sense',
    director: 'M. Night Shyamalan',
  },
  {
    id: 13,
    image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_UX182_CR0,0,182,268_AL_.jpg',
    title: 'The Wolf of Wall Street',
    director: 'Martin Scorsese',
  },
  {
    id: 14,
    image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMzcwYWFkYzktZjAzNC00OGY1LWI4YTgtNzc5MzVjMDVmNjY0XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg',
    title: 'A Beautiful Mind',
    director: 'Ron Howard',
  },
  {
    id: 15,
    image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg',
    title: 'Inception',
    director: 'Christopher Nolan',
  },
];

function findMatchesHelper(query) {
  return function(obj) {
    return obj.title.toLowerCase().includes(query.toLowerCase()) || 
          obj.director.toLowerCase().includes(query.toLowerCase()) || !query;
  }
}

highlightMatchesHelper = (text, query) => {
    let matches = text.split(new RegExp(`(${query})`, 'gi'));
    return <span> { matches.map((match, i) => 
        <span key={i} className={match.toLowerCase() === query.toLowerCase() ? `innovecs-autocomplete__highlight` : {} } >
            { match }
        </span>)
    } </span>;
};

function SearchForm(props) {
  const {searchHandler, query} = props;
  return(
    <form>
      <div className="innovecs-autocomplete__input-wrap">
        <input 
          type="text" 
          onChange={searchHandler} 
          value={query} 
          className="innovecs-autocomplete__input"
          placeholder="Start searching..."
         />
        <i className="fas fa-search icon-search"></i>
       </div>
    </form>
  );
}

function MovieList(props) {
  const {movies, query} = props;
  
  return(
    <ul className="innovecs-autocomplete__list">
      {
        movies.filter(findMatchesHelper(query)).map(movie => {
          return (
            <li key={movie.id} className="innovecs-autocomplete__list-item">
              <img src={movie.image} className="innovecs-autocomplete__img" />
              <div className="innovecs-autocomplete__info">
                <p className="innovecs-autocomplete__title">{ this.highlightMatchesHelper(movie.title, query) }</p>
                <p className="innovecs-autocomplete__director">
                  Director: { this.highlightMatchesHelper(movie.director, query) }
                </p>
              </div>
            </li> 
          )
        })
      }
    </ul>
  );
}

class InnovecsAutocomplete extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      movies: movies,
      query: ''
    }
  }
  
  _handleSearch = (event) => {
    this.setState({ query: event.target.value })
  };
  
  render() {
    const {query, movies} = this.state;
    return(
     <div className="innovecs-autocomplete">
        <SearchForm searchHandler={this._handleSearch} query={query} />
        <MovieList query={query} movies={movies} />
      </div>
    );
  }
}

ReactDOM.render(<InnovecsAutocomplete/>, document.getElementById('root'));