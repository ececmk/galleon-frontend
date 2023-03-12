
const ProgressBar = ({ progressPercentage }) => {
    let num = Number(progressPercentage.slice(0, progressPercentage.length - 1))


    return (

        <div className="mx-4  w-80  bg-gray-200 rounded-full  ">
        
        <div className= {num < 50 ? `py-4 bg-green-600 rounded-full w-80  ` : num < 75 ? `py-4 bg-yellow-600 rounded-full w-80 `: `py-4 bg-red-600 rounded-full w-80 `} style={{width:progressPercentage}}></div> 
            
    
        </div>
      
    );
};

export default ProgressBar;
