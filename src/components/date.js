function convertirFechaALDia(fecha) {
    const diasSemana = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
    const partesFecha = fecha.split('-');
    const fechaDate = new Date(partesFecha[0], partesFecha[1] - 1, partesFecha[2]);
    const diaSemana = diasSemana[fechaDate.getDay()];
    return diaSemana;
  }

  export default convertirFechaALDia;