const People = () => {
  const people = ["developers", "corporate professionals", "bankers"];

  return (
    <section className="px-10">
      <h2>Who can benefit from this website?</h2>
      <ul>
        {people.map((person, index) => (
          <li key={index}>{person}</li>
        ))}
      </ul>
    </section>
  );
};

export default People;
