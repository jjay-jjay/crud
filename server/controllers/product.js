const prisma = require('../prisma/prisma')


exports.list = async (req, res) =>{
    try{
      const listProduct = await prisma.product.findMany()
        res.send(listProduct)
    } catch(err){
        console.log(err)
        res.state(500).send('Server Error 500')
    }
}


exports.create = async (req, res) =>{
    try{
        const { name, price } = req.body
        const newProduct = await prisma.product.create({
            data:{
                name : name,
                price : price,
            },
        });
        
        res.send(newProduct)
    } catch(err){
        console.log(err)
        res.send('Server Error').state(500);
    }
}


exports.read = async (req, res) =>{
    try {
        const { productId } = req.params
        const product = await prisma.product.findUnique({
            where: {
                id : Number (productId),
            }
        })
        res.json(product)

    } catch(err) {
        console.log(err)
    }
}

exports.update = async (req, res) => {
    try{
        const {productId} = req.params
        const { name , price } = req.body

        const newProduct = await prisma.product.update({
            where : { 
                id : Number(productId)
            },
            data : {
                name : name,
                price : price
            }
        })

        res.json(newProduct)
    } catch(err){
        console.log(err)
        res.send('Server Error').state(500);
    }
}

exports.remove = async (req, res) => {
    try {
        const {productId} = req.params
        const removeProduct = await prisma.product.delete({
            where : {
                id : Number(productId)
            }
        })

        res.json(removeProduct)
    } catch (error) {
        console.log(err)
        res.status(500).json({ massage : "Server Error "})
    }
}




