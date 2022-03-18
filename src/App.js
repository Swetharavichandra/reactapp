import "./App.css";

export default function App() {
  
return (
    <div className="App">
       
       <Pricecard />
      

      
       </div>
      

  );
}

function Pricecard(){
  return(
    
    <div className="container">
      <div className='carditems'>
           <h5 className="cardtitle">Free</h5>
            <h6 className="cardprice"><strong>$0</strong><span class="period">/month</span></h6>
            <hr></hr>
            <ul>
              <li>Single User </li>
              <li>5GB Storage</li>
              <li>Unlimited Public Projects</li>
              <li>Community Access</li>
              <li className='cardbenefit'>Unlimited Private Projects</li>
              <li className='cardbenefit'> Dedicated Phone Support</li>
              <li className='cardbenefit'>Free Subdomain</li>
              <li className='cardbenefit'>Monthly Status Reports</li>
              

            </ul>

            <button className="btn">Button</button>
            
     </div> 

     <div className='carditems'>
     <h5 className="cardtitle">Plus</h5>
   <h6 className="cardprice"><strong>$9</strong><span class="period">/month</span></h6>
   <hr></hr>
   <ul>
     <li><strong>5 User</strong> </li>
     <li>50GB Storage</li>
     <li>Unlimited Public Projects</li>
     <li>Community Access</li>
     <li>Unlimited Private Projects</li>
     <li> Dedicated Phone Support</li>
     <li>Free Subdomain</li>
     <li className='cardbenefit'>Monthly Status Reports</li>
   </ul>
   <button className="btn">Button</button>
     </div>

     <div className='carditems'>
     <h5 className="cardtitle">Pro</h5>
     <h6 className="cardprice"><strong>$49</strong><span class="period">/month</span></h6>
<hr></hr>


     <ul>
       <li><strong>Unlimited User </strong></li>
       <li>150GB Storage</li>
       <li>Unlimited Public Projects</li>
       <li>Community Access</li>
       <li>Unlimited Private Projects</li>
       <li> Dedicated Phone Support</li>
       <li><strong>Unlimited</strong> Free Subdomain</li>
       <li>Monthly Status Reports</li>
     </ul>
     <button className="btn">Button</button>
     </div>

         
     </div>      
);

}