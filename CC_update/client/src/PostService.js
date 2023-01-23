import axios from 'axios';

const url = 'http://localhost:8081';

//get post
class PostService {
    // get getPost
    static getPosts(){
        return axios.get(url+'/')
    }
    // static getPosts(){
    //     return new Promise( (resolve, reject) =>{
    //         try {
    //             const res =  axios.get(url+'/');
    //             const data = res.data;
    //             resolve(
    //                 data.map(post => ({
    //                     ...post,
    //                     createdAt: new Date(post.createdAt)                  
    //                 }))
    //             );
    //         } catch (err) {
    //              reject(err);
    //         }
    //     });
    // }


    // created post
    static insertPost(text){
        return axios.post(url+'/api/post',{
            text
        });
    }

}

export default PostService;