import { Link } from "react-router-dom";
import Review from "../Components/Reviews";
import heroImg from "../Images/hero-image.png";
import finance1 from "../Images/1.png";
import finance2 from "../Images/2.png";
import finance3 from "../Images/3.png";

function Home(props) {
  return (
    <>
      <div className="flex flex-col bg-[#7F3DFF] items-center justify-between w-screen">
        <div className="container px-4 mt-10 flex h-3/4  justify-between rounded-md pt-10 pb-20">
          <div className="pt-10 pl-5 w-3/4">
            <h1 className="text-5xl lg:text-8xl text-white font-bold">
              Need help about savings?
            </h1>
            <h2 className="md:text-xl lg:text-4xl text-white my-8">
              Galleon here to help!
            </h2>
            <Link to="/signup">
              <button className="bg-white text-[#7F3DFF] font-[Poppins] text-xl font-semibold py-6 px-16 rounded md:ml-8 hover:bg-[#FCAC12] sm:text-md sm:py-3 sm:px-8">
                Let's get started!
                {props.children}
              </button>
            </Link>
          </div>
          <img
            className="items-center w-[600px] xs:hidden"
            src={heroImg}
            alt="Savings"
          />
        </div>
        <div className="h-screen flex mt-16">
          <div className="m-auto h-screen ">
            <div>
              <img className="w-60 h-60 rounded-xl m-auto z-10 " src={finance1} alt="finance pic" />
              <div className="w-80 bg-white h-96 rounded-xl  mx-4 p-10  flex flex-col place-content-end z-0">
                <h1 className="text-3xl lg:text-4xl text-black font-bold">It's easy to manage!</h1>
                <p className="text-lg lg:text-xl font-normal text-[#7F3DFF] my-4">Track your financial situation through a single application.</p>
              </div>
            </div>
          </div>
          <div className="m-auto h-screen">
            <div>
              <img className="w-60 h-60 rounded-xl m-auto" src={finance2} alt="finance pic" />
              <div className="w-80 bg-white h-96 rounded-xl  mx-4 p-10  flex flex-col  place-content-end">
                <h1 className="text-3xl lg:text-4xl text-black font-bold">It's easy to manage!</h1>
                <p className="text-lg lg:text-xl font-normal text-[#7F3DFF] my-4">Track your financial situation through a single application.</p>
              </div>
            </div>
          </div>
          <div className="m-auto h-screen">
            <div>
              <img className="w-60 h-60 rounded-xl m-auto" src={finance3} alt="finance pic" />
              <div className="w-80 bg-white h-96 rounded-xl  mx-4 p-10  flex flex-col  place-content-end">
                <h1 className="text-3xl lg:text-4xl text-black font-bold">It's easy to manage!</h1>
                <p className="text-lg lg:text-xl font-normal text-[#7F3DFF] my-4">Track your financial situation through a single application.</p>
              </div>
            </div>

          </div>
        </div>
        <Review />
      </div>
    </>
  );
}

export default Home;
