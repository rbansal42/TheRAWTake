const About = () => {
  return (
    <div id="app__about">
      <div className="flex cursor-default flex-col items-center gap-4 bg-grey py-10 align-middle">
        <div className="font-Raleway font-semibold text-4xl text-slateGrey tracking-wide">
          Motto:
        </div>
        <div className="flex flex-col items-center gap-1 self-center align-middle">
          <span className="font-Raleway text-brandRed font-bold text-xl tracking-wide">
            India Builds with Grit and Passion, We Build with Them!
          </span>
          <p className="w-[50%] text-center font-Raleway font-extralight text-sm leading-relaxed tracking-wide">
            Here you'll find stories of innovation, goof-ups, and the brains
            behind the Great Indian Startups. In parallel, we also do our best
            to enable the startup ecosystem with everything they need to amplify
            its reach and impact through strategic communications.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
