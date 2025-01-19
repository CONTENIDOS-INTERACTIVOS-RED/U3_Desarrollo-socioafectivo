<template lang="pug">
.curso-main-container.introduccion
  BannerInterno(subTitulo="Introducción")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .row.mb-4
      .col-12.col-xl-7.d-flex.flex-column
        .d-flex.mb-4.align-items-start.bg-verde.p-4(data-aos="fade-up")
          img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-1.svg', alt='Texto que describa la imagen')
          .d-flex.flex-column
            p.pe-xl-3.mb-0 Esta tercera unidad se centra en los conflictos del desarrollo emocional, su concepto, mecanismos de solución y mediación; también abordaremos las herramientas metodológicas para fortalecer el desarrollo afectivo, vínculo y apego, y finalmente abordaremos la creación de pautas de apoyo como herramienta pedagógica para el abordaje de la familia.
        span A lo largo de la unidad, se proporcionarán a los estudiantes, las herramientas necesarias para comprender y aplicar conceptos de inteligencia emocional en su vida diaria y en su entorno educativo, a través de diversas actividades diseñadas para involucrarse activamente en el proceso de aprendizaje. Tendremos videos educativos, documentos de apoyo y lecturas recomendadas, que complementarán los temas tratados. Además, se realizan actividades prácticas y discusiones en grupo, para fomentar la participación y el intercambio de ideas.
      .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-2.png', alt='Texto que describa la imagen')
      
    .row.bg-amarillo.bg-full-width.py-4.mb-4
      div.px-5.pb-md-3

        .row
          .col-5.d-none.d-xl-block(data-aos="fade-right")
            img(src='@/assets/curso/unidad/img-3.png', alt='Texto que describa la imagen')
          .col-12.col-xl-7.d-flex.flex-column.justify-content-center
            p.mb-4(data-aos="fade-up") Al finalizar esta unidad, los estudiantes habrán desarrollado su pensamiento lógico, crítico y creativo, lo que les permitirá conceptualizar la inteligencia emocional. Este conocimiento les ayudará a aprender a ser felices, conocer sus emociones y compartir con los demás, de manera efectiva.
            span(data-aos="fade-up") Se espera que los estudiantes participen activamente en todas las actividades, reflexionen sobre los conceptos aprendidos y los apliquen en su vida diaria. Es fundamental su participación activa en todas las actividades propuestas para esta unidad, manteniendo el excelente ritmo de trabajo que ha demostrado desde el inicio del curso.


</template>

<script>
import BannerInterno from '../components/plantilla/BannerInterno'
import Muestras from '../components/muestras/Muestras.vue'

export default {
  name: 'Introduccion',
  components: {
    BannerInterno,
    Muestras,
  },
  data: () => ({
    globalData: global,
  }),
}
</script>

<style lang="sass"></style>
