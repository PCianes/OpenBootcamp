import React, { useState, useEffect } from 'react'
//import ‘../../styles/clock.scss’;

const initialValues = {
  fecha: new Date(),
  edad: 0,
  nombre: 'Pablo',
  apellidos: 'Cianes'
}

const Clock = () => {
  const [state, setState] = useState(initialValues)
  const { nombre, apellidos, edad, fecha } = state

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);

    return () => {
      clearInterval(timerID);
    }
  }, []);

  return (
    <div>
      <h2>Hora Actual: {fecha.toLocaleTimeString()}</h2>
      <h3>{nombre} {apellidos}</h3>
      <h1>Edad: {edad}</h1>
    </div>
  )

  function tick() {
    setState(
      (prevState) => ({
        ...prevState,
        fecha: new Date(),
        edad: prevState.edad + 1
      })
    );
  }
}
export default Clock;

/*
class Clock extends Component {
  constructor(props) {
    super(props);
    // Estado privado del component
    this.state = {
      // Se genera una fecha como estado inicial del componente
      fecha: new Date(),
      edad: 0,
      nombre: 'Martín',
      apellidos: 'San José'
    };
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(), 1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  render() {
    return (
      <div>
        <h2>
          Hora Actual:
          {this.state.fecha.toLocaleTimeString()}
        </h2>
        <h3>{this.state.nombre} {this.state.apellidos}</h3>
        <h1>Edad: {this.state.edad}</h1>
      </div>
    )
  }
  tick() {
    this.setState((prevState) => {
      let edad = prevState.edad + 1;
      return {
        ...prevState,
        fecha: new Date(),
        edad
      }
    });
  }
}
export default Clock;
*/