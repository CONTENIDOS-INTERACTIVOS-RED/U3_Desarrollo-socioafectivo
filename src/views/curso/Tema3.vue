<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Creación de pautas de apoyo, como herramienta pedagógica para el abordaje de la familia'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .row.mb-4.mx-0
      .col-12.col-xl-8.d-flex.align-items-center.bg-azul.p-4(data-aos="fade-right")
        p.mb-0(data-aos="fade-up") La creación de pautas de apoyo como herramienta pedagógica para el abordaje de la familia, constituye un enfoque clave en la promoción de relaciones saludables y en el fortalecimiento de los vínculos familiares. Las pautas de apoyo son un conjunto de estrategias, recomendaciones y recursos diseñados para orientar a las familias en la resolución de problemas, el manejo de conflictos y la construcción de una comunicación efectiva. Este enfoque es fundamental en contextos educativos y sociales, donde la colaboración entre la escuela, los profesionales y las familias es esencial para el desarrollo integral de los niños y adolescentes.
      .d-none.d-xl-block.col-4.px-0(data-aos="fade-left")
        img.h-100(src='@/assets/curso/unidad/img-61.png', alt='Texto que describa la imagen')

    p.mb-4(data-aos="fade-up") Las pautas de apoyo también son directrices o recomendaciones diseñadas para ayudar a las personas en diversas situaciones. Estas pautas pueden aplicarse en diferentes contextos, como la educación, la crianza, la salud mental, y más. 

    p.mb-4(data-aos="fade-up") Algunos ejemplos son:

    .row.mb-4
      .col-12.col-lg-5.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-62.png', alt='Texto que describa la imagen')
      .col-12.col-lg-7(data-aos="fade-left")
        AcordionA(tipo="b")
          .div(titulo="Pautas de crianza")
            p Estas guías ofrecen consejos y herramientas para padres y cuidadores sobre cómo criar a los niños de manera saludable y positiva (Bedoya y Herrera, 2022). Incluyen temas como el establecimiento de límites, la comunicación efectiva, y el desarrollo emocional de los niños.
          .div(titulo="Pautas de apoyo emocional")
            p Estas directrices están diseñadas para ayudar a las personas a manejar el estrés, la ansiedad y otras emociones difíciles (Unicef, s.f.). Pueden incluir técnicas de relajación, estrategias de afrontamiento y recursos para buscar ayuda profesional.
          .div(titulo="Pautas educativas")
            p En el ámbito educativo, las pautas de apoyo pueden incluir estrategias para mejorar el aprendizaje, métodos de enseñanza efectivos y formas de apoyar a los estudiantes con necesidades especiales, según el Colorado Early Learning & Development Guidelines (2016).
          .div(titulo="Pautas de salud")
            p Estas guías proporcionan recomendaciones sobre cómo mantener un estilo de vida saludable, incluyendo consejos sobre nutrición, ejercicio y prevención de enfermedades.
    
    p.mb-4 Las pautas de apoyo son herramientas esenciales para promover el bienestar emocional y social en el entorno familiar y educativo. 

    .row.bg-azul.bg-full-width.py-4.mb-5
      div.px-5.pb-md-3.py-4.d-flex
        .col-12.col-xl-7.d-flex.pe-4.pe-xl-5.align-items-center.flex-column(data-aos="fade-right")
          h2.mb-4.pb-2.me-auto Pautas de apoyo
          p.mb-5 En el PDF Pautas de apoyo, se analizan estrategias que facilitan la comunicación efectiva, el establecimiento de normas y la resolución de conflictos dentro de la familia. Además, se destaca la importancia de la colaboración entre familias y escuelas, así como el rol de los profesionales en el diseño de intervenciones personalizadas que refuercen los vínculos afectivos y fomenten un entorno seguro y positivo para el desarrollo integral de niños y adolescentes.
          a.d-flex.me-auto.w-fit.bg-white.box-shadow.cursor-pointer(data-aos="zoom-in" :href="obtenerLink('/downloads/Anexos_Pautas de apoyo.pdf')" target="_blank")
            img.h-100(style="width: 48px" src='@/assets/componentes/pdf-icon-square.svg', alt='Texto que describa la imagen')
            p.text-small.fs-14px.my-auto.px-2 <strong>Anexo.</strong> Pautas de apoyo.
        .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0(data-aos="fade-left")
          img.h-100(src='@/assets/curso/unidad/img-63.png', alt='Texto que describa la imagen')


    .bg-full-width.border-top-9-azul
      .px-5.px-md-5.pt-5.pb-0
        h2 Material complementario
        .row
          .col-12.col-md-6.col-lg-8
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank" href="https://dialnet.unirioja.es/servlet/articulo?codigo=8843581") Estrategias de Acompañamiento Educativo y Familiar en la Educación Inicial: una revisión teórica
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank" href="https://elibro.net/es/ereader/tecnologicadeloriente/16781?page=1") Función paterna, pautas de crianza y desarrollo psicológico en adolescentes: implicaciones psicoeducativas
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank" href="https://www.youtube.com/watch?v=HrS7457lg1o") [Vídeo] Píldora 19 AEIPI - Información para elegir las intervenciones recomendadas para mi hijo y familia
          .col-12.col-md-6.col-lg-3
            figure
              img(src='@/assets/componentes/material-complementario.svg' alt='Imagen de material complementario')




    .bg-full-width.border-top.actividad(style="background-color: #ebf1f5; border-top: 5px solid #f5c145 !important")
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>

</template>

<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema3',
  components: {
    BannerInterno,
  },
  data: () => ({
    cuestionario: {
      tema: 'Unidad 3: Pautas de apoyo en el contexto familiar',
      titulo: 'Ponte a prueba',
      introduccion:
        'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto:
            'Las pautas de apoyo pueden ayudar a las familias a fortalecer los vínculos afectivos con sus hijos.',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            'El desarrollo de pautas de apoyo no es relevante en el contexto familiar.',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            'Las pautas de apoyo pueden incluir estrategias para mejorar la comunicación y la resolución de conflictos en la familia.',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            'La inclusión de la escuela como agente de apoyo no tiene impacto en el desarrollo afectivo de los niños.',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            'Los profesionales de la educación pueden desempeñar un papel importante en el diseño de pautas de apoyo para las familias.',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.material-complementario
  padding-top: 3rem
  border-top: 9px solid $color-sistema-e
</style>
