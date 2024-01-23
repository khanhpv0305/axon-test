const getOrderDetails = ({ orderId }) => {
  return fetch(`https://dummyjson.com/carts/${orderId}`)
    .then(res => res.json())
}

export default getOrderDetails
