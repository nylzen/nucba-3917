export const Arrays = () => {
  const names = ["Lucho", "Lean", "Nel", "Fran", "Tomas", "Pablo"];

  return (
    <ul>
      {names.map((name) => (
        <div key={name}>
          <li>{name}</li>
        </div>
      ))}
    </ul>
  );
};
