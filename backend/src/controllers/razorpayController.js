import { asyncHandler } from "../utils/asyncHandler.util.js"
import { apiError } from "../utils/apiError.util.js"
import { apiResponse } from "../utils/apiResponse.util.js"
import razorpay from '../config/razorpay.js';


export const createOrder = asyncHandler(async (req, res) => {
  const { amount, currency = 'INR', receipt = 'receipt#1' } = req.body;

  if (!amount) {
    throw new apiError(400, 'Amount is required to create Razorpay order');
  }

  const options = {
    amount: amount * 100, 
    currency,
    receipt,
  };

  const order = await razorpay.orders.create(options);

  if (!order) {
    throw new apiError(500, 'Failed to create Razorpay order');
  }

  return res
    .status(200)
    .json(new apiResponse(200, { 
        orderId: order.id, 
        amount: order.amount, 
        currency: order.currency }, 'Order created successfully'));
});


export {createOrder}