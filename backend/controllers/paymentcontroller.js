const stripe=require("stripe")("sk_test_51OeFXmSAs5OPs1h9jlzwkPa1UxdE91EuKX05Is3VcyQ4hJTfWwMcnxO9j46mHpZhwB1GxrZRFPAENv3KLWqU9JWN00v94HJeBW");

exports.addPayment=async(req,res)=>{
    const myPayment=await stripe.paymentIntent.create({
        amount:req.body.amount,
        currency:"inr"
    })
    res.status(200).json({
        data:myPayment.client_secret,
        sucess:true
    })
} 

exports.sendStripeKey=(req,res,next)=>{
    res.status(200).json({
        stripekey:"pk_test_51OeFXmSAs5OPs1h9h0AZNPygslJyDKgm8BEes2ANI4t8hTSYt1NW4h97HGFKW95myY9lv69c5wSvs0nvgoCdhzgq00VnZFhXGZ"
    })
}