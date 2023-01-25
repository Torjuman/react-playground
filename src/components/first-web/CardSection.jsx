import Card from "./Card";

const CardSection = () => {
  return (
    <section className="contact bg-success ">
      <div className="container ">
        <h2 className="text-white">We love new friends!</h2>
        <div className="row">
          <Card cardTitle="First Card" btnText="Click Here" />
          <Card cardTitle="Second Card" btnText="Visit Here" />
          <Card cardTitle="Third Card" btnText="Log Here" />
        </div>
      </div>
    </section>
  );
};

export default CardSection;
