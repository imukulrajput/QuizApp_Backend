const routeNotFound = (req,res) =>{
     res.staus(404).json({message: "Page Not Found"})
}

module.exports = routeNotFound;