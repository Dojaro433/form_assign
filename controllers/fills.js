const user = require("../models/fills");
const UserModel = require("../models/fills");





exports.getPost = async(req, res) =>{

    try{
      const savedData = await UserModel(req.body).save();
      res.json(savedData);
    
    } catch(err){
    
      res.json({err});
    }
    
    }


    exports.getAllusers = async (req, res) =>{

        try{
           const users = await UserModel.find();
      
           res.json(users)
        }
        catch(err){
          res.json({err});    
      
        }

    }

    exports.getUsers = async (req, res) =>{

        try{
           const viwe = await UserModel.find({_id : req.params.fillsId});
      
           res.json(viwe)
        }
        catch(err){
          res.json({err});    
      
        }
      
      
      
      
      }


      exports.deleteUser = async (req, res) =>{

  
        UserModel.findOneAndDelete({_id : req.params.fillsId},(err, data)=>{
                            
          if(err){
            
            res.json({err})
          }else{
  
              res.json(data);
          }
  
  
        });
  
      }
  
      exports.UpdateUser = async (req, res) =>{


        UserModel.findOneAndUpdate({_id : req.params.fillsId}, req.body,{new:true},
          (err, data)=>{
                            
          if(err){
            
            res.json({err})
          }else{
  
              res.json(data);
          }
  
  
        });
  
      }
  
  
  
  
