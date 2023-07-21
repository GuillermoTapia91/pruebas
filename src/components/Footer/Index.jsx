export default function Footer(props) {
  const { cell, direccion } = props;
  return (
    <div>
      <h3>Footer</h3>
      <h2>{cell}</h2>
      <h2>{direccion}</h2>
    </div>
  );
}
