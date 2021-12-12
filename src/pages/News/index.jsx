import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchMovies } from '../../store/actions/movies';

function News({ movies, loadMovies }) {
  useEffect(() => {
    loadMovies && loadMovies();
  }, []);

  return (
    <div>
      <h1>电影列表</h1>
      <ul>
        {movies.map((it) => {
          <li key={it.id}>{it.name}</li>;
        })}
      </ul>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    movies: state.movies,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadMovies() {
      dispatch(fetchMovies());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(News);
