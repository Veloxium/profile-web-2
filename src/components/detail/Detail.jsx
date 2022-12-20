import Water from "../../assets/droplet-half.svg";
import Code from "../../assets/code-square.svg";
import Android from "../../assets/android.svg";

function Detail() {
  return (
    <div className="bg p-5">
      <div className="bg2 rounded-lg flex flex-col justify-center text-center p-5 lg:mx-[50px]">
          <h1 className="primary text-2xl font-semibold">What I am Great At</h1>
          <p className="text-white">
            Berikut beberapa skill untuk membantu Bisnis Anda
          </p>
        <div className="sm:flex sm:flex-row sm:justify-center">
          <div className="sm:flex-col sm:m-5">
            <div className="justify-center flex flex-col m-5 br-sq p-10 sm:m-2 sm:p-6">
              <img src={Water} alt="dropwater" className="m-5 mt-2" />
              <h3 className="primary-h font-semibold text-xl">UI/UX Design</h3>
              <h3 className="text-white font-semibold text-base mb-2 sm:text-sm sm:mt-2 md:text-base">
                5 Project
              </h3>
            </div>
            <div class=" bg-gray-200 h-2 mx-5 rounded-lg my-5 md:mx-3">
              <div class="bg-primary h-2 w-[40%] rounded-lg"></div>
            </div>
          </div>
          <div className="sm:flex-col sm:m-5">
            <div className="justify-center flex flex-col m-5 br-sq p-10 sm:m-2 sm:p-6">
              <img src={Code} alt="dropwater" className="m-5 mt-2" />
              <h3 className="primary-h font-semibold text-xl">Front End Web</h3>
              <h3 className="text-white font-semibold text-base mb-2 sm:text-sm sm:mt-2 md:text-base">
                7 Project
              </h3>
            </div>
            <div class=" bg-gray-200 h-2 mx-5 rounded-lg my-5 md:mx-3">
              <div class="bg-primary h-2 w-[50%] rounded-lg"></div>
            </div>
          </div>
          <div className="sm:flex-col sm:m-5">
            <div className="justify-center flex flex-col m-5 br-sq p-10 sm:m-2 sm:p-6">
              <img src={Android} alt="dropwater" className="m-5 mt-2" />
              <h3 className="primary-h font-semibold text-xl">Android App</h3>
              <h3 className="text-white font-semibold text-base mb-2 sm:text-sm sm:mt-2 md:text-base">
                1 Project
              </h3>
            </div>
            <div class=" bg-gray-200 h-2 mx-5 rounded-lg my-5 md:mx-3">
              <div class="bg-primary h-2 w-[20%] rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
