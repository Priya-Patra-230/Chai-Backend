const asyncHandler = (requsetHandler) =>{
     (req,res,next) => {
        Promise.resolve(requsetHandler(req,res,next)).
           catch((err) => next(err)) 
     }
}     //in place of requestHandler we can give any name as a function.


export {asyncHandler}



// const asyncHandler = () => {}
// const asyncHandler = (func) => () => {}
// const asyncHandler = (func) => async () => {}


// const asyncHandler = (fn) =>async (req,res,next) => {
//     try{
//     await fn(req,res,next)
//     }
//     catch(error){
//        res.status(err.code || 500).json({
//         success: false,
//         message: err.message
//        })
//     }
// }