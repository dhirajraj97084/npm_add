const home=async(req,res)=>{
    try {
        res.send("welcome dhiraj bhai mere home page pe controller");
    } catch (error) {
        console.log(error);
    }
}

const signup=async(req,res)=>{
    try {
        res.json(req.body);
    } catch (error) {
        console.log(error);
    }
}

const login=async(req,res)=>{
    try {
        res.send("welcome dhiraj bhai mere login page pe controller");
    } catch (error) {
        console.log(error);
    }
}

module.exports={home,login,signup};