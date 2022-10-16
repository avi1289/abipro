import Router, { useRouter } from "next/router"
import baseUrl from "../../helpers/baseUrl"
import { useRef,useEffect} from "react"
const Product=({product})=>{
    const rounter = useRouter()
    const modalRef= useRef(null)
    useEffect(()=>{
      M.Modal.init(modalRef.current)
    },[])
    
    if(rounter.isFallback)
    {
        return(
            <h3>Loading...</h3>
        )
    }
    const getModal=()=>{
      return(
        <div id="modal1" className="modal" ref={modalRef}>
    <div className="modal-content">
      <h4>{product.name}</h4>
      <p>Are you sure you want to delete</p>
    </div>
    <div className="modal-footer">
    <button className="btn waves-effect waves-light #9575cd deep-purple lighten-2" >Cancel
    </button>
    <button className="btn waves-effect waves-light #e53935 red darken-1" >Yes
    </button>
    </div>
  </div>
      )
    }

    return(
        <div className="container center-align">
            <h3>{product.name}</h3>
            <img src={product.mediaUrl} style={{width:'50%'}}/>
            <h5><b>$ {product.price}</b></h5>
            <input type="number"
            style={{width:'400px',margin:'10px'}} 
            min="1"
            placeholder="Qunatity"/>
            <button className="btn waves-effect waves-light #e53935 red darken-1 " >Add
    <i className="material-icons right">add</i>
  </button>

            <p className="left-align">
              {product.description}
            </p>
            <button data-target="modal1" className="btn modal-trigger waves-effect waves-light #e53935 red darken-1" >Delete
    <i className="material-icons left">delete</i>
    </button>

    {getModal()}
        </div>
    )
}


// export async function getServerSideProps({params:{id}}) {
//     const res= await fetch(`http://localhost:3000/api/product/${id}`)
//     const data= await res.json()
//     return {
//       props: {product:data} // will be passed to the page component as props
//     }
//   }

  export async function getStaticProps({params:{id}}) {
    const res= await fetch(`${baseUrl}/api/product/${id}`)
    const data = await res.json()
    return {
      props: {product:data} // will be passed to the page component as props
    }
  }

  export async function getStaticPaths() {
    return {
      paths: [{ params: {id:"634b9cc4c204e4534b427263"}}
    ],
      fallback: true, // can also be true or 'blocking'
    };
  }

  export default Product