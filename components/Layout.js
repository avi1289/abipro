import NavBar from "./Navbar"
import Head from "next/head"
const layout=({children})=>{
    return(
        <>
        <Head>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"/>
        <link rel="stylesheet" href="/style.css" />
        </Head>
        <NavBar/>
        {children}
        

            <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
           
            <div class="bottom-container">
              <p className="fot">Sign Up Today and get <br/>200 Rupee off</p>
              
              <div class="container">
              <div class="row">
      <div class="col s1">Collection</div>
      <div class="col s2" >Company</div>
      <div class="col s3">Need Help</div>
      <div class="col s4">Exclusive Service</div>      
    </div>
    <div class="row">
      <div class="col s1">Clothing</div>
      <div class="col s2" >Career At top</div>
      <div class="col s3">Order status</div>
      <div class="col s4">Call us +9203009</div>      
    </div>
            </div>

            </div>
            
        </>
    )
}

export  default layout