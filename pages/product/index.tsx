import React from "react"
import { useAppDispatch, useAppSelector } from "../../src/redux/hook"
import { decrement, increment } from "../../src/redux/features/product/productDetailSlice"

const Product: React.FC = () => {
    const count = useAppSelector(state => state.productDetail.value)
    const dispatch = useAppDispatch()
    console.log(count)

    return (
        <>
            <p>{count}</p>
            <button onClick={() => dispatch(decrement())}>kurang</button>
            <button onClick={() => dispatch(increment())}>tombol</button>
        </>
    )
}

export default Product