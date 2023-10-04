let materiasPrimaria = [
    "Lengua y literatura",
    "Matemáticas",
    "Ciencias Sociales",
    "Ciencias Naturales",
    "Educación Artística",
    "Educación Física",
    "Educación Tecnológica",
    "Formación Ética y Ciudadana"
  ]

const generarNotas = (notas) => {
    const cantidadNotas = Math.floor(Math.random() * 3) + 3;
    const notasAleatorias = [];
  
    for (let i = 0; i < cantidadNotas; i++) {
      notasAleatorias.push(Math.floor(Math.random() * 10) + 1);
    }
  
    return notasAleatorias;
  };

const sumarNotas = (notas)=> {
    let suma = 0;

    for(let nota of notas){
    suma += nota;}
    return suma;
}

const generarTrimestres = (materias) => {
    const trimestres = {};
    
    // Obtener una cantidad aleatoria constante de materias
    const cantidadMaterias = Math.floor(Math.random() * (materias.length + 1));
    const materiasSeleccionadas = materias.slice(0, cantidadMaterias);
  
    for (let materia of materiasSeleccionadas) {
      const notas = generarNotas(materia);
      const promedio = parseInt(sumarNotas(notas) / notas.length);
  
      trimestres[materia] = {
        notas,
        promedio
      };
    }
  
    return trimestres;
  };
  

  const calcularPromedioFinal = (trimestres) => {
    let suma = 0;
    let cantidadMaterias = 0;
    if (!Array.isArray(trimestres)) {
      // Convertir trimestres a un arreglo
      trimestres = Object.values(trimestres);
    }
    for (const trimestre of trimestres) {
      suma += trimestre.promedio;
      cantidadMaterias++;
    }
  
    return parseInt(suma / cantidadMaterias);
  };



export const generarPri =  ()=>{
            let trimestre3 = generarTrimestres(materiasPrimaria)
            let materias =  {
                trimestre1: generarTrimestres(materiasPrimaria),
                trimestre2: generarTrimestres(materiasPrimaria),
                trimestre3: trimestre3,
                promedioFinal: calcularPromedioFinal(trimestre3)
            }
            return materias;
};