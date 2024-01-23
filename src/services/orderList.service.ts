const PER_PAGE = 5

const getOrderList = ({ pageNumber, sortType }) => {
  return fetch('https://dummyjson.com/carts')
    .then(res => res.json())
    .then(data => data.carts)
    // .then(data => {
    //   return data.slice((pageNumber - 1) * PER_PAGE, )
    // })
}

export default getOrderList
