import "./header.scss";

const Hero = (props) => {
  return (
    <div
      id="Hero-image-container"
      style={{ height: props.height }}
      className="sm: w-auto"
    >
      <h1> {props.header}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, enim.
        Repellendus ipsa sequi amet repudiandae omnis ratione repellat, magnam
        voluptatem voluptate expedita. Molestias asperiores nisi deserunt
        assumenda impedit quas earum?
      </p>
      <button> {props.btnName} </button>
    </div>
  );
};

export default Hero;
