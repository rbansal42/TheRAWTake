const Subscribe = () => {
  return (
    <div
      id="app__subscribe"
      className="flex items-center justify-center bg-bg-pattern align-middle"
    >
      <div className="flex w-[50%] cursor-default flex-col items-center justify-center gap-4 py-14 align-middle">
        <div className="font-Raleway font-semibold text-4xl text-slateGrey tracking-wide">
          Join The Tribe!
        </div>
        <div className="text-l flex flex-col items-center gap-1 self-center align-middle tracking-wide">
          <span className="text-center font-Raleway text-gray-600">
            Subscribe to our bi-monthly newsletter to read ethereal stories
            filled with grit, passion and innovation which are struggling to
            find ground in the Indian skies.
          </span>
        </div>
        <div className="flex w-full flex-row flex-nowrap gap-0">
          <input
            type="text"
            placeholder="Enter your email here"
            className="flex-1 border-2 border-solid border-brandRed px-4 py-1.5 outline-none focus:border-[1px] transition-all duration-300 font-Raleway tracking-wider"
          />
          <button
            type="submit"
            formTarget="_blank"
            className="border-y-2 
            border-e-2 
            border-solid border-brandRed bg-brandRed px-16 py-2 font-extralight text-white outline-none cursor-pointer transition-all hover:bg-white hover:text-brandRed duration-300"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
