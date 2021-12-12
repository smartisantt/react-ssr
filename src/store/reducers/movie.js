import { actionTypes } from '../actions/movie';

export default function (state = [], { type, payload }) {
  switch (type) {
    case actionTypes.setDatas:
      return payload;

    default:
      return state;
  }
}
