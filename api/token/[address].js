import worker from '../../dist/server/index.js';
export default async function handler(req,res){
 const address=Array.isArray(req.query.address)?req.query.address[0]:req.query.address;
 const request=new Request('https://vibescope.local/api/token/'+encodeURIComponent(address||''),{method:req.method});
 const response=await worker.fetch(request);
 res.statusCode=response.status;
 for(const [key,value] of response.headers)res.setHeader(key,value);
 res.end(await response.text());
}
