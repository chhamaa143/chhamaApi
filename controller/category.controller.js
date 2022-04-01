const Category = require("../model/category.model")
const port = process.env.PORT || 3000;

exports.addCategory=(request,response)=>{
    Category.create({
        catname:request.body.catname,
        catImage:""+request.file.filename
    }).then(result=>{
        return response.status(200).json(result);
    }).catch(err=>{
        return response.status(500).json(err);
    })
}
