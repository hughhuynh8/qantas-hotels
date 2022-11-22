// sorting methods
const sortAscending = (a, b) => a - b
const sortDescending = (a, b) => b - a
const sortAscendingCallback = (a, b) => sortAscending(a, b)
const sortDescendingCallback = (a, b) => sortDescending(a, b)

const sortingUtil = {
  sortAscendingCallback,
  sortDescendingCallback
} 
export default sortingUtil