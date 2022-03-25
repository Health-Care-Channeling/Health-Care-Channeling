const express =require('express');
const Posts =require('../models/posts');
const Leave =require('../models/leave');
const { findById } = require('../models/posts');



const router =express.Router();

//save posts

router.post('/post/save',(req,res)=>{
    let newPost =new Posts(req.body);

    newPost.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Posts saved successfully"
        });
    });
});

router.post('/leave/save',(req,res)=>{
    let newPost =new Leave(req.body);

    newPost.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Posts saved successfully"
        });
    });
});


//get posts
router.get('/posts',(req,res)=>{
    Posts.find().exec((err,post)=>{
       if (err){
           return res.status(400).json({
               error:err
           });
       } 
       return res.status(200).json({
           success:true,
           existingPosts:post
       });
    });
});

//get posts
router.get('/Leave',(req,res)=>{
    Leave.find().exec((err,post)=>{
       if (err){
           return res.status(400).json({
               error:err
           });
       } 
       return res.status(200).json({
           success:true,
           existingPosts:post
       });
    });
});

//get a specific post
router.get("/post/:id",(req,res)=>{
    let postId =req.params.id;
    Posts.findById(postId,(err,post)=>{
        if(err){
            return res.status(400).json({success:false,err});
        }
        return res.status(200).json({
            success:true,
            post
        });
    });
});

router.get("/Leave/:id",(req,res)=>{
    let postId =req.params.id;
    Leave.findById(postId,(err,post)=>{
        if(err){
            return res.status(400).json({success:false,err});
        }
        return res.status(200).json({
            success:true,
            post
        });
    });
});



//update posts
router.put('/post/update/:id',(req,res)=>{
    Posts.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,post)=>{
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:"Updated Successfully"
            });
        }
        
    );
});


    
router.put('/Leave/update/:id',(req,res)=>{
    Leave.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,post)=>{
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:"Updated Successfully"
            });
        }
        
    );
});

//login

router.post('/post/adminlogin',(req,res)=>{
    const {emailadd, password} = req.body;
    Posts.findOne({emailadd:emailadd ,password:password},(err, post) =>
   {
        if(post) {
            if(password=== post.password) {
         
                res.send({message: "login successfull"})
              
              
            }else {
                res.send({message: "Invalid credentials"})
            }
        }
    })
})





//delete posts

router.delete('/post/delete/:id',(req,res)=>{
    Posts.findByIdAndRemove(req.params.id).exec((err,deletepost)=>{
        if (err)return res.status(400).json({
            massage:"Delete Unsuccessfull",err
        });
        return res.json({
            massage:"Delete Successfull",deletepost
        });
    });
});

router.delete('/Leave/delete/:id',(req,res)=>{
    Leave.findByIdAndRemove(req.params.id).exec((err,deletepost)=>{
        if (err)return res.status(400).json({
            massage:"Delete Unsuccessfull",err
        });
        return res.json({
            massage:"Delete Successfull",deletepost
        });
    });
});
module.exports = router;