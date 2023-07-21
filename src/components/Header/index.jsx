export default function Header(props) {
  return (
    <div>
      <h3>Header</h3>
      <h4>{props.nombre}</h4>
      <h4>{props.apellido}</h4>
      <h4>{props.dni}</h4>
    </div>
  );
}
