import { CITY_TO_COORDS } from '../actions/city_to_coords';

export default function(state = [], action) {
  switch (action.type) {
    case CITY_TO_COORDS:
    return [ action.payload.data, ...state ];

    default:
      return state;
  }
}
