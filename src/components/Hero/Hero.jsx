const Hero = () => {
  return (
    <div className="flex justify-between gap-4 p-4">
      <div className=" bg-linear-to-r from-[#632EE3] to-[#9F62F2] w-125 h-62">
        <div className="flex flex-col justify-center items-center h-full text-white text-2xl">
          <performance> In Progress</performance>
          <p>0</p>
        </div>
      </div>
      <div className="bg-linear-to-r from-[#54CF68] to-[#00827A] w-125  h-62">
        <div className="flex flex-col justify-center items-center h-full text-white text-2xl">
          <performance> Resolved</performance>
          <p>0</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
