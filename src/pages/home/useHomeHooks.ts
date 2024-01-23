import { useEffect, useState } from 'react'
import getOrderDetails from '../../services/orderDetails.service'
import getOrderList from '../../services/orderList.service'

const useHomeHooks = () => {
  const [sortType, setSortType] = useState('Newest')
  const [orderList, setOrderList] = useState([])
  const [currentOrderId, setCurrentOrderId] = useState()
  const [orderDetails, setOrderDetails] = useState()
  const [currentPageNumber, setCurrentPageNumber] = useState(1)
  const [isLoadingMore, setIsLoadingMore] = useState(false)

  useEffect(() => {
    if (!currentOrderId) return

    getOrderDetails({ orderId: currentOrderId })
      .then(details => {
        setOrderDetails(details)
      })
  }, [currentOrderId])

  useEffect(() => {
    getOrderList({ pageNumber: currentPageNumber, sortType })
      .catch(error => {
        // Show error
      })
  }, [currentPageNumber, sortType])

  const handleSortTypeChange = (type) => {
    setSortType(type)
  }
  
  const handleLoadMore = () => {
    setIsLoadingMore(true)
    const nextPage = currentPageNumber + 1
    setCurrentPageNumber(nextPage)
    getOrderList({ pageNumber: nextPage })
      .then(list => {
        setOrderList(prev => {
          return [...prev, ...list]
        })
      })
      .finally(() => {
        setIsLoadingMore(false)
      })
  }

  return {
    orderList,
    currentOrderId,
    handleLoadMore,
    isLoadingMore,
  }
}

export default useHomeHooks
