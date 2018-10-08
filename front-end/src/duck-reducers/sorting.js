export const UPDATE = 'UPDATE'
export const SORT = 'SORT'
export const RESET = 'RESET'
export const FILTER = 'FILTER'

const initialState = {
  searchTerm: '',
  sortBy: 'name',
  ascending: false,
  filter: 'S',
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
    case FILTER:
      return {
        ...state,
        filter: action.inputFilter,
      }
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
export const newFilter = inputFilter => (
  {
    type: FILTER,
    inputFilter,
  }
)
