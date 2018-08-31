import axios from 'axios'
let request = {};

['get', 'post', 'put', 'patch', 'del'].forEach(method=>{
    request[method] = (path, { params, data, files } = {}) => {

        var formData = new FormData();
        if(files && files.length>0){
            for(let i = 0; i < files.length; i++){
                formData.append("file"+(i+1), files[i]);
            }
        }

        const carrier = axios.create({
            method: method,
            baseURL: path,
            headers: {
                'Content-Type': files ? "multipart/form-data" : "application/json; charset=UTF-8"
            },
            data: files && files.length>0 ? formData : data,
            params
        });

        return carrier().catch(
            err => console.log(err)
        )
    }; 
}); 

export default request