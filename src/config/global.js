export default {
  global: {
    componenteFormativo:
      'Componente Formativo con un nombre extremadamente largo y extenso',
    descripcionCurso:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis vestibulum quam bibendum varius.<br/><br/>Quisque pretium at nulla sit amet placerat. Vestibulum consequat suscipit accumsan. Proin pharetra congue enim et tempus. Sed sodales dui volutpat, placerat tellus accumsan, semper est. Phasellus nec lorem elementum, mattis quam eget, vestibulum nibh. Sed.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/banner-principal-decorativo-2.svg'),
      },
    ],
    numeroUnidad: '3',
    tituloUnidad:
      'Inteligencia emocional para el desarrollo afectivo de relaciones tempranas y vínculo',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo:
          'Los conflictos dentro del desarrollo emocional: concepto, mecanismos de solución y mediación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Concepto de conflicto',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Concepto de conflicto emocional',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Mediación en la resolución de conflictos',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo:
          'Herramientas metodológicas para fortalecer el desarrollo afectivo, vínculo y apego',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Educación emocional',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Juego como herramienta pedagógica',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo:
              'Técnicas de comunicación asertiva y acompañamiento y orientación psicológica',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo:
          'Creación de pautas de apoyo, como herramienta pedagógica para el abordaje de la familia',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Arboleda López, A. P. (2017). Conciliación, mediación y emociones: Una mirada para la solución de los conflictos de familia. Civilizar Ciencias Sociales y Humanas, 17(33), 81-96.',
      link: 'http://dx.doi.org/10.22518/16578953.900',
    },
    {
      referencia:
        'Carrisoza, A. M (9 de junio 2015) LA IMPORTANCIA DEL VÍNCULO AFECTIVO EN EL DESARROLLO DEL NIÑO. Red Familia Colombia.',
      link:
        'https://www.redfamiliacolombia.org/actualidad/la-importancia-del-vinculo-afectivo-en-el-desarrollo-del-nino/',
    },
    {
      referencia: 'Coser, L. A. (1956). Las funciones sociales del conflicto.',
      link:
        'https://archive.org/details/functionsofsocia0000cose/page/n7/mode/2up',
    },
    {
      referencia: 'Freud, S. (1930). El malestar en la cultura. Viena.',
      link:
        'https://archive.org/details/1930-freud-sigmund-el-malestar-en-la-cultura-2012',
    },
    {
      referencia:
        'García-Herrera, A. (2017). Los sentimientos y las emociones en el proceso de mediación. IM Revista de Mediación, 10(1).',
      link:
        'https://www.imotiva.es/revista-de-mediacion/articulos/los-sentimientos-las-emociones-proceso-mediacion/',
    },
    {
      referencia:
        'García, P.S (2018) La importancia del juego y sus beneficios en las áreas de desarrollo infantil.',
      link: 'https://dialnet.unirioja.es/descarga/articulo/7017228.pdf',
    },
    {
      referencia:
        'Goleman, D. (1995). Inteligencia emocional. Editorial Kairós.',
      link: null,
    },
    {
      referencia:
        'Marx, K., & Engels, F. (1848). El manifiesto comunista. Londres.',
      link: null,
    },
    {
      referencia:
        'Muñoz, E. D. L. Á. O., & Ortuño, (2015) LA MEDIACIÓN ESCOLAR.',
      link: null,
    },
    {
      referencia:
        'López Vázquez, R., Tobón Tobón, S., Veytia Bucheli, M. G., & Juárez Hernández, L. G. (2021). Mediación didáctica e inclusión educativa en la educación básica desde el enfoque socioformativo. Revista de Investigación Educativa, 39(2), 527–552.',
      link: 'https://doi.org/10.6018/rie.443301',
    },
    {
      referencia:
        'Panesso Giraldo, K., & Arango Holguín, M. J. (2017). LA AUTOESTIMA, PROCESO HUMANO. Revista Electrónica Psyconex, 9(14), 1–9.',
      link:
        'https://revistas.udea.edu.co/index.php/Psyconex/article/view/328507',
    },
    {
      referencia:
        'Weber, M. (1905). La ética protestante y el espíritu del capitalismo. Londres: Unwin Hyman.',
      link:
        'https://drive.google.com/file/d/10_s-bw6wRhhP9GNmZd7IRHe8Lu_VRasp/view',
    },
    {
      referencia:
        'Alonso Arija, N. (2021). El juego como recurso educativo: Teorías y autores de renovación pedagógica. Universidad de Valladolid.',
      link:
        'https://uvadoc.uva.es/bitstream/handle/10324/51451/TFG-L3005.pdf?sequence=1',
    },
    {
      referencia:
        'Bisquerra, A. R. Chao, R. (2020). Educación emocional y bienestar.',
      link: 'https://rieeb.ibero.mx/index.php/rieeb/article/view/4/3',
    },
    {
      referencia:
        'Epstein, J. L. (2001). School, family, and community partnerships: Preparing educators and improving schools. Routledge.',
      link:
        'https://www.taylorfrancis.com/books/mono/10.4324/9780429494673/school-family-community-partnerships-joyce-epstein',
    },
    {
      referencia:
        'González-Grandón, X., Chao Rebolledo, C., & Patiño Domínguez, H. (2021). El juego en la educación: una vía para el desarrollo del bienestar socioemocional en contextos de violencia. Revista Latinoamericana de Estudios Educativos.',
      link: 'https://doi.org/10.48102/rlee.2021.51.2.375',
    },
    {
      referencia:
        'López, A., & Martínez, J. (2022). La música como herramienta para la educación emocional en el aula. Psicología y Educación.',
      link: 'https://www.psicologiayeducacion.com/musica-educacion-emocional',
    },
    {
      referencia:
        'Pérez, R., & García, S. (2023). Educación artística y desarrollo emocional: Un enfoque integral. Educación Artística y Desarrollo Emocional.',
      link: 'https://www.educacionartistica.com/desarrollo-emocional',
    },
    {
      referencia:
        'Psicologiamatia.com (5 de abril de 2022) Inteligencia emocional en la vida cotidiana.',
      link:
        'https://psicologiamatia.com/inteligencia-emocional-vida-cotidiana/',
    },
    {
      referencia:
        'Palomero Fernández, P., & Valero Errazu, D. (2016). Mindfulness y educación: posibilidades y límites. Revista Interuniversitaria de Formación del Profesorado, 30(3).',
      link: 'https://www.redalyc.org/journal/274/27449361001/html/',
    },
    {
      referencia:
        'Bedoya, C. L Herrera, L. M, (2022). Técnicas y estrategias implementadas en la intervención con familias en temas de crianza. Divers.: Perspect. Psicol. vol.18, n.1, pp.160-182.',
      link: 'https://doi.org/10.15332/22563067.7878',
    },
    {
      referencia:
        'Bronfenbrenner, U. (1987). La ecología del desarrollo humano. Paidós.',
      link:
        'https://archive.org/details/bronfenbrenner-u.-la-ecologia-del-desarrollo-humano',
    },
    {
      referencia:
        'Palacios, J., & Moreno, M. C. (2013). Familia y desarrollo humano.',
      link: 'https://dialnet.unirioja.es/servlet/articulo?codigo=7383751',
    },
    {
      referencia:
        'Rodrigo, M. J., & Palacios, J. (1998). Familias y desarrollo psicológico. Ediciones Pirámide.',
      link: 'https://dialnet.unirioja.es/servlet/articulo?codigo=7383751',
    },
    {
      referencia: 'Satir, V. (2000). Terapia familiar en acción. Paidós.',
      link:
        'https://upam.mx/pluginfile.php/495/mod_folder/content/0/La%20terapia%20Familiar%20ye%20l%20enfoque%20de%20Virginia%20Satir.pdf',
    },
    {
      referencia:
        'Smith, J., & Jones, H. (2020). Evaluación de necesidades en el diseño de pautas de apoyo. Educational Assessment Journal, 8(4), 112-130.',
      link: 'https://revistas.um.es/educatio/article/download/325381/227231/',
    },
    {
      referencia:
        'La utilidad de las Pautas. (2014, abril 16). Colorado Early Learning & Development Guidelines.',
      link:
        'https://earlylearningco.org/padres-y-otros-proveedores/la-utilidad-de-las-pautas/',
    },
  ],
  glosario: [
    {
      termino: 'Acuerdo',
      significado:
        'Decisión tomada entre dos o más personas, asociaciones o entidades, como resultado de un proceso de negociación y deliberación sobre un asunto concreto.',
    },
    {
      termino: 'Afrontamiento',
      significado:
        'Se refiere al proceso de adaptación a nuevas situaciones de vida y a la gestión de circunstancias difíciles. Incluye estrategias y esfuerzos para resolver problemas y minimizar el estrés o el conflicto, ayudando a las personas a manejar mejor las adversidades.',
    },
    {
      termino: 'Autonomía',
      significado:
        'Capacidad de una persona o entidad para tomar decisiones y actuar por sí misma, sin depender de factores externos.',
    },
    {
      termino: 'Comunicación',
      significado:
        'Proceso de transmisión de información entre dos o más individuos, que puede ser verbal o no verbal.',
    },
    {
      termino: 'Conciliación',
      significado:
        'Acto de alcanzar un acuerdo entre dos partes que tenían posiciones opuestas, con el objetivo de resolver un conflicto o disputa.',
    },
    {
      termino: 'Conflicto',
      significado:
        'Pelea, disputa o discrepancia que se da cuando dos o más personas tienen intereses u opiniones que no pueden desarrollarse al mismo tiempo.',
    },
    {
      termino: 'Empatía',
      significado:
        'Capacidad de comprender los sentimientos y emociones de otra persona, e intentar experimentar de forma objetiva y racional lo que está sintiendo.',
    },
    {
      termino: 'Mediación',
      significado:
        'Intervención de un tercero imparcial para facilitar un acuerdo entre dos partes en conflicto.',
    },
    {
      termino: 'Negociación',
      significado:
        'Proceso de intercambio de información y compromisos entre dos o más partes con intereses comunes y divergentes, con el objetivo de llegar a un acuerdo.',
    },
    {
      termino: 'Resolución',
      significado:
        'Acción y efecto de resolver o resolverse, o la decisión tomada para solucionar una dificultad.',
    },
  ],
  complementario: [
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Maria Camila Garcia Santamaria',
          cargo: 'Líder del equipo',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor metodológico y pedagógico',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Francisco José Lizcano Reyes',
          cargo: 'Responsable del equipo',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Leyson Fabian Castaño Perez',
          cargo: 'Soporte organizacional',
          centro: 'Centro de Comercio y Servicios Regional Tolima',
        },
        {
          nombre: ['Nombre 1', 'Nombre 2'],
          cargo: 'Diseño web',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Desarrollo Front-End',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Validación de diseño y contenido',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
      ],
    },
    {
      titulo: 'GESTORES DE REPOSITORIO',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Centro de Comercio y Servicios Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
