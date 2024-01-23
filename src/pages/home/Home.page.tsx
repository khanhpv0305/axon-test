import { useEffect, useState } from 'react'
import { HomeWrapper, OrderDetailsWrapper, OrderListWrapper } from './Home.styles'
import getOrderList from '../../services/orderList.service'
import OrderList from '../../components/OrderList/OrderList.component'
import getOrderDetails from '../../services/orderDetails.service'
import useHomeHooks from './useHomeHooks'

const HomePage: React.FC = () => {
  const {
    orderList,
    currentOrderId,
    handleLoadMore,
    isLoadingMore,
  } = useHomeHooks()

  return (
    <HomeWrapper>
      <OrderList
        list={orderList}
        currentOrderId={currentOrderId}
        handleLoadMore={handleLoadMore}
        isLoadingMore={isLoadingMore}
      />

      {/* Order details */}
      <div>

      </div>
    </HomeWrapper>
  )
}

export default HomePage
