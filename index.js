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

function searchingFor(term) {
  return function(x) {
    return x.title.toLowerCase().includes(term.toLowerCase()) || !term;
  }
}

class InnovecsAutocomplete extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      movies: movies,
      term: '',
    }
  }
  
  handleSearch = (event) => {
    this.setState({ term: event.target.value })
  };
  
  render() {
    const {term, movie} = this.state;
    return(
      <div>
        <form>
          <input type="text" onChange={this.handleSearch} value={term} />
        </form>
        <ul>
        {
          movies.filter(searchingFor(term)).map(movie => (
            <li key={movie.id}>
              <img src={`${movie.image}`} />
              <p>{movie.title}</p>
              <p>Director: {movie.director}</p>
            </li> 
          ))
        }
        </ul>
      </div>
    );
  }
}

ReactDOM.render(<InnovecsAutocomplete/>, document.getElementById('root'));