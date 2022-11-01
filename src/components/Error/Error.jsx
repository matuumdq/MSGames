import './Error.css'

const Error = ({children}) => {
      return (
            <div className='error-cart'>
                  <p>{children}</p>
            </div>   
      )
    }
    
    export default Error