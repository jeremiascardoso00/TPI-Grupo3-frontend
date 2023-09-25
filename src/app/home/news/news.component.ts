import { Component } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent {

  news:any = [
    [
      {
        tittle: "Primera y segunda semana de marzo",
        message: "Reuniones de padres con motivo de la presentación de proyectos de sala anuales.",
        image: "../../../assets/reunion-27-03-9-1000x620.jpg"
      },
      {
        tittle: "Educacion",
        message: "Taller virtual para docentes sobre “Lecturas y escrituras, escenarios posibles”",
        image: "../../../assets/32b6d8645574bba8646d68c9d193129a_M.jpg"
      },
      
      {
        tittle: "Remodelación",
        message: "Se anuncia la remodelacion de las aulas de computación",
        image: "../../../assets/aula.png"
      }, 
    ],
    [
      {
        tittle: "Educación Ambiental",
        message: "Capacitación a docentes para orientar su tarea pedagógica desde la óptica del ecosistema",
        image: "../../../assets/capacitacion.jpg"
      },
      {
        tittle: "Reunión informativa nivel Pregrado",
        message: "Invitamos a los/as estudiantes de las carreras de nivel Pregrado, a participar de la reunión «Vida Estudiantil», el martes 16 de septiembre a las 18.30 hs en el Salón de Actos.",
        image: "../../../assets/students.jpg"
      },
      {
        tittle: "Mes de octubre",
        message: "Jornadas Anuales Institucionales Interservicio y celebración comunitaria del día de la familia.",
        image: "../../../assets/students2.jpg"
      }, 
    ]
   
  ]

  constructor() {

  }

}
