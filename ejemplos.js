<textarea
    onChange={(event) => {
      setMensaje(event.target.value);
    }}
  >
    {mensaje}
  </textarea>
  <h1>El mensaje es "{mensaje}"</h1>




<select
    onChange={(event) => {
      console.log(event.target.value);

      let index = event.target.selectedIndex;
      let label = event.target[index].text;
      console.log(label);
    }}
  >
    <option value="lista1">Lista 1</option>
    <option value="lista2" selected>
      Lista 2
    </option>
    <option value="lista3">Lista 3</option>
  </select>






<input
    type="checkbox"
    value="si"
    onChange={(e) => {
      if (e.target.checked) {
        console.log(e.target.value);
      }
    }}
  />
  Click













function App() {
  const Input = (props) => {
    return (
      <Fragment>
        <input
          type={props.type || "radio"}
          name={props.name || "genero"}
          value={props.value}
          onChange={(e) => {
            if (e.target.checked) {
              console.log(e.target.value);
            }
          }}
        />
        {props.label}
      </Fragment>
    );
  };

  return (
    <div>
      <Input value="femenino" label="Femenino" />
      <Input value="masculino" label="Masculino" />
      <Input type="password" label="Password" />
    </div>
  );
}








const Texto = (props) => {
  return (
    <div>
      Mensaje:
      <br />
      {props.children}
    </div>
  );
};










const [cargando, setCargando] = useState(true);
  const [variable, setVariable] = useState("");

  function cargar() {
    console.log("Cargando...");
    setTimeout(() => {
      setCargando(false);
    }, 1000);
  }

  useEffect(() => {
    cargar();
    setTimeout(() => {
      setVariable("asd");
    }, 1000);
  }, []);

  return <div>{cargando ? <div>Cargando...</div> : <div>¡Listo!</div>}</div>;