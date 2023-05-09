import aboutImg from '~/assets/images/about-image.png';

function About() {
  return (
    <div className="bg-white" id="About">
      <div className="p-24 grid grid-cols-2">
        <div className="">
          <h2 className="text-2xl font-medium">About Us</h2>
          <p className="pt-2 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            tempora suscipit voluptates blanditiis nesciunt dolore hic
            asperiores exercitationem minus consectetur dolorum a inventore
            incidunt, ex molestiae atque ullam cupiditate neque!
          </p>
        </div>
        <div className="flex items-center justify-center">
          <img
            src={aboutImg}
            alt="aboutImg"
            className="w-[400px] h-[400] object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
