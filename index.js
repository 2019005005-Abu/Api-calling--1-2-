//Event=>onload,onerror,
//property=>response,responseText,responseType,responseURL,
//status,statusText
//function=>open(),send(),setRequestHeader()
console.clear();
const makeRequest1=(method,url)=>{
    return new Promise((resolve,reject)=>{
        const xhr=new  XMLHttpRequest();
        xhr.open(method,url);
        xhr.onload=()=>{
           let data=xhr.response;
           console.log(JSON.parse(data));
        }
    
        xhr.onerror=()=>{
          console.log('Error is here')   
        }
        xhr.send(); 
    })
    
}

const getData=()=>{
makeRequest1('GET','https://jsonplaceholder.typicode.com/posts')
.then((response)=>{
   console.log(response);
})
}
getData();

const makeRequest2=(method,url,dataRecieve)=>{
    const xhr=new XMLHttpRequest();
    xhr.open(method,url);
    xhr.setRequestHeader('Content-Type','application/json');
    xhr.onload=()=>{
        let data=xhr.response;
        console.log(JSON.parse(data));
    }
    xhr.onerror=()=>{
        console.log('error is here');
    }
    xhr.send(JSON.stringify(dataRecieve));
}

const sendData=()=>{
    makeRequest2('POST','https://jsonplaceholder.typicode.com/posts',{
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          }
    });
}

sendData();
//update
const MakeRequest3=(method,url,data)=>{
 const xhr=new XMLHttpRequest();
 xhr.open(method,url);
 xhr.setRequestHeader('Content-Type','application/json');
 xhr.onload=()=>{
    let data=xhr.response;
    console.log(data.parse(data));
 }
 xhr.onerror=()=>{
    console.log('Hare is a Erroe')
 }
 xhr.send(JSON.stringify(data));
}

const UpdateData=()=>{
    MakeRequest3("PUT","https://jsonplaceholder.typicode.com/posts/2",{
        body: JSON.stringify({
            title: 'Abu Al Shahriar Rifat',
            body: 'Software Enginner',
            userId: 2019005005,
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          }
    });
}
UpdateData();

const MakingRequrstFunction1=(method,url,dataRe)=>{
    const xhr=new XMLHttpRequest();
    xhr.open(method,url);
    xhr.setRequestHeader('Content-Type','application/json');
    xhr.onload=()=>{
        const data=xhr.response;
        console.log(JSON.parse(data));
    }
    xhr.onerror=()=>{
        console.log('Hare is a error');

    }
    xhr.send(JSON.stringify(dataRe));

}
const SingleUpdate=()=>{
    MakingRequrstFunction1("PATCH","https://jsonplaceholder.typicode.com/posts/2",{
        body:JSON.stringify({
            body: 'Software Enginner',
           
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
          }
    })
   

}
SingleUpdate();

//delete
const  MakingRequsestforDeleteFunction=(method,url,dataRecieve)=>{
    const xhr=XMLHttpRequest();
    xhr.open(method,url);
    xhr.setRequestHeader('Content-Type','application/json');
    xhr.onload=()=>{
        let data=xhr.response;
        console.log(JSON.parse(dara));
    }
    xhr.onerror=()=>{
        console.log('Error');
    }
    xhr.send(JSON.stringify(dataRecieve))
}
const  DeletinData=()=>{
  MakingRequsestforDeleteFunction('DELETE','https://jsonplaceholder.typicode.com/posts/2')}

  DeletinData();

  //Api Calling using fetch
  fetch('https://jsonplaceholder.typicode.com/posts',{
    method:"POST",
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    body:JSON.stringify({
        title:"foo",
        body:"bar",
        uesrId:1,
    })
  })
  .then((response)=>{
     if(!response.ok){
        const message=`Error ${response.status}`
        throw new Error (message)
     }else{
        return response.json()
     }
    })
    .then((response)=>{console.log(response)})
    .catch((err)=>{
        console.log(err.message);
        })

  

//using async and await
const makeRequest11=async (url)=>{
    const res=await fetch(url);
    if(!res.ok){
        const message=`Error :${res.status}`;
        throw new Error(message);
    }else{
      const data=await res.json();
      return data;
    }
    const data=await res.json();
    return data;
}
const getDataa=()=>{
    makeRequest1('https://jsonplaceholder.typicode.com/posts').then((response)=>{console.log(response)})
    .catch((err)=>{
        console.log(err)
    })
}
const sendDataa=()=>{
    makeRequest1('https://jsonplaceholder.typicode.com/posts',{
        method:"POST",
        body:JSON.stringify({
            title:"foo",
            body:"bar",
            userId:1,
        }),
        headers:{
            "Content-Type":"application/json; charset=UTF-8" 
        }
    })
    .then((response)=>{console.log(response)})
    .catch((err)=>{console.log(err)})
}
const UpdateData12=()=>{
  makeRequest1('https://jsonplaceholder.typicode.com/posts/2',{
   method:"PUT",
   body:JSON.stringify({
     title:"foo1",
     name:"Abu Al Shahriar Rifat",
     body:"bar",
     userId:2
   }),
   headers:{
    "Content-Type":"application/json; charset=UTF-8",
   }
  })
}
const SingleDataaa=()=>{
  makeRequest1('https://jsonplaceholder.typicode.com/posts/2',{
    method:"PATCH",
    body:JSON.stringify({
        title:"Software Enginner",
    }),
    headers:{
        "Content-Type":"application/json ;charset=UTF-8"
    },
  })
}
const DeteteData=()=>{
  makeRequest1('https://jsonplaceholder.typicode.com/posts/2',{
    method:"DELETE"
  })
}
getDataa();
sendDataa();
UpdateData();
SingleDataaa();
DeletinData();