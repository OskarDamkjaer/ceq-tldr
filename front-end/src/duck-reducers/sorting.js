export const UPDATE = 'UPDATE'
export const SORT = 'SORT'
export const RESET = 'RESET'

const initialState = {
  searchTerm: '',
  sortBy: 'name',
  ascending: false,
}
export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE:
      return {
        ...state,
        searchTerm: action.inputValue,
      }

    case SORT:
      return {
        ...state,
        sortBy: action.sortTag,
        ascending: !state.ascending,
      }

    case RESET:
      return initialState
    default:
      return state
  }
}

export const updateSearchTerm = inputValue => (
  {
    type: UPDATE,
    inputValue,
  }
)

export const sortBy = sortTag => (
  {
    type: SORT,
    sortTag,
  }
)

export const resetState = () => (
  {
    type: RESET,
  }
)
