function Button({step, increment}) {
    return ( 
    <button onClick={() => {
        increment(step)

    }}>
        +{step}
    
    </button>  

)
  }
  
  export default Button