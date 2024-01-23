import OrderCard from './OrderCard/OrderCard.component'
import { LoadMoreButton, OrderListWrapper } from './OrderList.styles'

const OrderList = ({ list, hasNextPage, isLoadingMore, handleLoadMore }) => {
  return (
    <OrderListWrapper>
      {list.map(card => {
        console.log(card)
        return (
          <div>
            <span>Order ID: {card.id}</span>
          </div>
        )
      })}
      {hasNextPage && <button disabled={isLoadingMore} onClick={handleLoadMore}>Load more</button>}
    </OrderListWrapper>
  )
}

export default OrderList
