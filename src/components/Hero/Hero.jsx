import vector1 from "../../assets/vector1.png";

const Hero = ({ track, complete }) => {
  return (
    <div className="grid grid-cols-12 justify-between gap-4 p-4 ">
      <div
        className=" col-span-6 h-62 "
        style={{
          backgroundImage: `url(${vector1}),linear-gradient(to right, #632EE3, #9F62F2)`,
        }}
      >
        <div className="flex flex-col justify-center items-center h-full text-white text-2xl">
          <p> In Progress</p>
          <p>{track.length}</p>
        </div>
      </div>
      <div
        className=" col-span-6  h-62"
        style={{
          backgroundImage: `url(${vector1}), linear-gradient(to right, #54CF68, #00827A)`,
        }}
      >
        <div className="flex flex-col justify-center items-center h-full text-white text-2xl">
          <p> Resolved</p>
          <p>{complete.length}</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
