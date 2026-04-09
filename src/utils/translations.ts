export type Language = 'es' | 'en' | 'fr';

export interface Translations {
  nav: {
    inicio: string;
    quienesSomos: string;
    productos: string;
    contactenos: string;
    languageLabel: string;
    themeLabel: string;
    themeClaroLabel: string;
    themeOscuroLabel: string;
    contactTitle: string;
    phoneLabel: string;
    emailLabel: string;
  };
  home: {
    description: string;
  };
  aboutUs: {
    seoTitle: string;
    seoDescription: string;
    heroTitle: string;
    heroSubtitle: string;
    intro: string;
    lead: string;
    sectionSignageTitle: string;
    sectionSignageIntro: string;
    bulletEffexport: string;
    bulletTrafficDevices: string;
    bulletWritesys: string;
    sectionLegalTitle: string;
    sectionLegalIntro: string;
    legalAgro: string;
    legalCivil: string;
    legalAgrarian: string;
    sectionRegulatoryTitle: string;
    sectionRegulatoryIntro: string;
    regulatoryLinks: Array<{ label: string; href: string }>;
  };
  legalPage: {
    seoTitle: string;
    seoDescription: string;
    heroEyebrow: string;
    heroTitle: string;
    heroSubtitle: string;
    contactIntro: string;
    contactName: string;
    contactRole: string;
    ctaWhatsapp: string;
    sectionAgroTitle: string;
    agroLead: string;
    inraTitle: string;
    inraBullets: string[];
    tribunalTitle: string;
    tribunalBullets: string[];
    consultoriaTitle: string;
    consultoriaBullets: string[];
    regulatoryTitle: string;
    regulatoryIntro: string;
    regulatoryLinks: Array<{ label: string; href: string }>;
    sectionCivilTitle: string;
    civilLead: string;
    civilTitle: string;
    civilBullets: string[];
    empresarialTitle: string;
    empresarialBullets: string[];
    empresarialClosing: string;
    arbitrajeTitle: string;
    arbitrajeBullets: string[];
  };
  products: {
    requestProduct: string;
    category: string;
    summary: string;
    technicalDetails: string;
    allCategories: string;
    searchPlaceholder: string;
    filterByCategory: string;
    search: string;
    noResults: string;
    items: Array<{
      id: number;
      name: string;
      category: string;
      summary: string;
      technicalDetails: string;
    }>;
  };
  footer: {
    contactenos: string;
    director: string;
    address: string;
    phone: string;
    email: string;
    location: string;
  };
  contact: {
    enterCode: string;
  };
}

export const translations: Record<Language, Translations> = {
  es: {
    nav: {
      inicio: 'Inicio',
      quienesSomos: 'Información',
      productos: 'Productos',
      contactenos: 'Abogados',
      languageLabel: 'Idioma',
      themeLabel: 'Tema',
      themeClaroLabel: '☀️',
      themeOscuroLabel: '🌙',
      contactTitle: 'Contacto principal',
      phoneLabel: 'Teléfono',
      emailLabel: 'Correo',
    },
    home: {
      description: `Somos una empresa que está dedicada a soluciones y servicios en diferentes áreas como ser: productos de señalización, seguridad vial, Comercialización o ventas de Lamparas Led (Asia), equipos de oficina y maquinaria pesada. Exportación y Comercialización de Minerales certificado de registro fitosanitario; importación de productos de origen vegetal (granos), es emitido por el senasag; SAX cuenta con nexos comerciales en todo el territorio boliviano.  Es por esto que se trabaja en diferentes tipos de proyectos así como en licitaciones públicas y privadas a nivel nacional e internacional.

Contamos con el privilegio de ser el distribuidor exclusivo de ADATILE (USA) y de EFEXPORT ZF (Colombia) en materia de este mobiliario y equipamiento vial, para las diversas empresas de carácter local, nacional e internacional.`,
    },
    aboutUs: {
      seoTitle: 'Información - SAX Soluciones & Servicios',
      seoDescription:
        'Señalización vial integral, alianzas internacionales y consultoría legal especializada. Cumplimiento normativo boliviano: tránsito, NB, INRA y leyes agrarias.',
      heroTitle: 'SAX Soluciones & Servicios',
      heroSubtitle: 'Señalización vial integral y respaldo jurídico especializado',
      intro:
        'En SAX Soluciones & Servicios integramos la mejor tecnología internacional de Colombia, Estados Unidos y Brasil con el conocimiento normativo boliviano. Instalamos señalización vial vertical y horizontal, dispositivos de seguridad y soluciones inteligentes de movilidad, cumpliendo con la Ley de Tránsito, las Normas Técnicas Bolivianas y las leyes agrarias (1715 y 3545).\n\nAdemás, brindamos consultoría legal agroambiental, civil y empresarial, con experiencia en procesos de saneamiento de tierras ante el INRA y en licitaciones públicas y privadas.\n\nCon SAX, su proyecto cuenta con tecnología de clase mundial, instalación integral y respaldo jurídico especializado, garantizando seguridad, modernidad y sostenibilidad en todo el país.',
      lead:
        'SAX Soluciones & Servicios es una empresa boliviana líder en señalización vial integral y consultoría legal especializada, comprometida con el desarrollo seguro y sostenible del país.',
      sectionSignageTitle: 'Señalización vial e instalación completa',
      sectionSignageIntro:
        'Ofrecemos soluciones de señalización vertical (letreros reglamentarios, preventivos, informativos y turísticos) y señalización horizontal (demarcación de calzadas, pasos peatonales, carriles exclusivos, símbolos de tránsito).',
      bulletEffexport:
        'Productos de Effexport (Colombia): reductores de velocidad, hitos flexibles (balizas), topes de estacionamiento, tachones, estoperoles, tachas reflectivas (“ojos de gato”), canalizadores Jaguar, barreras tipo New Jersey, vallas retráctiles, delineadores tubulares y pinturas termoplásticas de alta durabilidad.',
      bulletTrafficDevices:
        'Traffic Devices (Estados Unidos): dispositivos de tráfico bajo el estándar MUTCD, incluyendo semáforos, paneles de mensajería variable, sistemas de control de tráfico y soluciones de seguridad vial.',
      bulletWritesys:
        'Writesys (Brasil): sistemas inteligentes de movilidad ITS, control y auditoría de peajes, gestión digital de tráfico y soluciones tecnológicas para movilidad urbana.',
      sectionLegalTitle: 'Consultoría legal especializada',
      sectionLegalIntro: 'Nuestro equipo jurídico brinda asesoría integral en:',
      legalAgro:
        'Agroambiental: cumplimiento normativo y gestión sostenible de proyectos rurales.',
      legalCivil:
        'Civil y empresarial: soporte legal para empresas y proyectos de infraestructura.',
      legalAgrarian:
        'Normativa agraria e INRA: procesos de saneamiento y regulación de tierras, con conocimiento de la Ley N.º 1715 de Servicio Nacional de Reforma Agraria, la Ley N.º 3545 de Reconducción Comunitaria de la Reforma Agraria y normativa complementaria.',
      sectionRegulatoryTitle: 'Marco normativo boliviano',
      sectionRegulatoryIntro: 'Todos nuestros proyectos se alinean con el marco legal aplicable. Referencias institucionales para consulta:',
      regulatoryLinks: [
        {
          label: 'Ministerio de Obras Públicas, Servicios y Vivienda — transporte y tránsito',
          href: 'https://www.oopp.gob.bo',
        },
        { label: 'IBNORCA — Normas Técnicas Bolivianas', href: 'https://www.ibnorca.org.bo' },
        { label: 'INRA — Instituto Nacional de Reforma Agraria', href: 'https://www.inra.gob.bo' },
        {
          label: 'Gaceta Oficial del Estado Plurinacional de Bolivia',
          href: 'https://www.gacetaoficialdebolivia.gob.bo',
        },
        {
          label: 'Consulta de leyes (compilación Lexivox: Ley 259, 1715, 3545, entre otras)',
          href: 'https://www.lexivox.org/norms/BO-L-259.html',
        },
      ],
    },
    legalPage: {
      seoTitle: 'Asesoría legal — SAX Soluciones & Servicios',
      seoDescription:
        'Derecho agroambiental, agrario e INRA; tribunal agroambiental; consultoría ambiental; derecho civil y empresarial; conciliación y arbitraje. Bolivia.',
      heroEyebrow: 'LEGAL SAX',
      heroTitle: 'SAX Soluciones & Servicios',
      heroSubtitle:
        'Equipo especializado en derecho agroambiental y agrario, civil y empresarial, con acompañamiento en INRA, proyectos de infraestructura y solución de controversias.',
      contactIntro: 'Contacto directo con asesoría',
      contactName: 'Ingeniero JOHN CHRISTIAN SANDOVAL FARAFAN',
      contactRole: 'Asesoría legal y consultoría',
      ctaWhatsapp: 'Escríbenos por WhatsApp',
      sectionAgroTitle: 'Derecho agroambiental y agrario',
      agroLead:
        'Contamos con experiencia en trámite y defensa vinculados al sector rural, recursos naturales y normativa boliviana aplicable.',
      inraTitle: 'INRA (Instituto Nacional de Reforma Agraria)',
      inraBullets: [
        'Procesos de saneamiento de tierras.',
        'Regularización de la propiedad agraria.',
        'Asesoría en trámites administrativos y cumplimiento de normativa agraria.',
      ],
      tribunalTitle: 'Tribunal Agroambiental',
      tribunalBullets: [
        'Defensa y representación en procesos judiciales vinculados a tierras, recursos naturales y conflictos agrarios.',
        'Aplicación de la Ley N.º 1715 de Servicio Nacional de Reforma Agraria y la Ley N.º 3545 de Reconducción Comunitaria de la Reforma Agraria.',
        'Resolución de controversias sobre uso de suelos, derechos de propiedad y aprovechamiento sostenible.',
      ],
      consultoriaTitle: 'Consultoría agroambiental',
      consultoriaBullets: [
        'Cumplimiento de normativa ambiental en proyectos rurales y urbanos.',
        'Evaluación de impacto ambiental y asesoría en licencias.',
        'Integración de criterios de sostenibilidad en proyectos de infraestructura y señalización.',
      ],
      regulatoryTitle: 'Marco normativo boliviano relevante',
      regulatoryIntro:
        'Referencias legales e institucionales; en proyectos locales aplican también reglamentos municipales y departamentales según jurisdicción.',
      regulatoryLinks: [
        {
          label: 'Ley N.º 1715 (1996) — Servicio Nacional de Reforma Agraria',
          href: 'https://www.lexivox.org/norms/BO-L-1715.html',
        },
        {
          label: 'Ley N.º 3545 (2006) — Reconducción Comunitaria de la Reforma Agraria',
          href: 'https://www.lexivox.org/norms/BO-L-3545.html',
        },
        {
          label: 'Ley de tránsito y seguridad vial — referencia compilada (Lexivox)',
          href: 'https://www.lexivox.org/norms/BO-L-259.html',
        },
        {
          label: 'Normas Técnicas Bolivianas — IBNORCA',
          href: 'https://www.ibnorca.org.bo',
        },
        {
          label: 'INRA — Instituto Nacional de Reforma Agraria',
          href: 'https://www.inra.gob.bo',
        },
        {
          label: 'Gaceta Oficial del Estado Plurinacional de Bolivia',
          href: 'https://www.gacetaoficialdebolivia.gob.bo',
        },
        {
          label: 'Ley N.º 708 (2015) — Conciliación y arbitraje',
          href: 'https://www.lexivox.org/norms/BO-L-708.html',
        },
      ],
      sectionCivilTitle: 'Enfoque legal civil y empresarial',
      civilLead: 'Brindamos asesoría especializada en los siguientes ámbitos:',
      civilTitle: 'Derecho civil',
      civilBullets: [
        'Contratos de obra, arrendamiento y servicios.',
        'Responsabilidad civil en proyectos de infraestructura.',
        'Resolución de conflictos entre particulares y comunidades.',
      ],
      empresarialTitle: 'Derecho empresarial',
      empresarialBullets: [
        'Constitución y asesoría de sociedades comerciales.',
        'Cumplimiento normativo en licitaciones públicas y privadas.',
        'Asesoría en fusiones, adquisiciones y alianzas estratégicas.',
      ],
      empresarialClosing:
        'Defensa y representación en procesos administrativos y judiciales vinculados a la actividad empresarial.',
      arbitrajeTitle: 'Conciliación y arbitraje',
      arbitrajeBullets: [
        'Resolución de conflictos mediante mecanismos alternativos, rápidos y eficientes.',
        'Asesoría en procesos de conciliación privada y arbitraje institucional.',
        'Enfoque en la prevención de litigios y en soluciones prácticas para empresas y comunidades.',
        'Aplicación de la Ley N.º 708 de Conciliación y Arbitraje (2015), que regula estos mecanismos en Bolivia.',
      ],
    },
    products: {
      requestProduct: 'Solicitar Producto',
      category: 'Categoría',
      summary: 'Descripción Resumida',
      technicalDetails: 'Detalles Técnicos',
      allCategories: 'Todas las Categorías',
      searchPlaceholder: 'Buscar producto...',
      filterByCategory: 'Filtrar por Categoría',
      search: 'Buscar',
      noResults: 'No se encontraron productos',
      items: [
        {
          id: 1,
          name: 'Barrera o maletín plástico',
          category: 'Señalización Vial Temporal',
          summary: 'Canalizador Vehícular y Peatonal.',
          technicalDetails: 'Las barreras o maletines plásticos son un sistema modular muy fácil de armar con unidades acoplables entre si que permiten construir cerramientos seguros de acuerdo a sus necesidades, livianos y fáciles de transportar, esenciales para obras, separadores de carril, desvíos, carriles alternativos. Especialmente indicadas para trabajos con excavaciones profundas y/o trabajos en altura (Puentes).',
        },
        {
          id: 2,
          name: 'Caneca vial',
          category: 'Señalización Vial Temporal',
          summary: 'Canalizador Vehícular y Peatonal.',
          technicalDetails: 'Son dispositivos utilizados para la canalización y separación del tránsito, livianos y fáciles de transportar, esenciales para obras, separadores de carril, desvíos, carriles alternativos. Son de forma cilíndrica con dimensiones mínimas de 80cm de altura y 40cm de diámetro, su color anaranjado y deberán contener como mínimo dos franjas de lámina reflectiva Tipo III de 15cm de ancho.',
        },
        {
          id: 3,
          name: 'Conos de tráfico',
          category: 'Señalización Vial Temporal',
          summary: 'Canalizador Vehícular y Peatonal.',
          technicalDetails: 'Conos en PVC resistente, de color naranja, base cuadrada que le da gran estabilidad al producto, Filtro UV que permite mayor durabilidad y consistencia, con tramos de lámina retroreflectiva categoría III Alta intensidad que permiten una alta visibilidad tanto de día como de noche. Son conos de plástico usados en carreteras para avisar a los conductores de zonas en obras o accidentes. Los conos de tráfico (también llamados conos de carretera o conos de seguridad) son conos de plástico de colores brillantes usados en carreteras para avisar a los conductores de zonas en obras o accidentes. Los conos también se usan en espacios públicos interiores para marcar zonas que se encuentran cerradas a los peatones, como baños fuera de servicio; o para destacar una situación de peligro, como un suelo resbaladizo. También pueden usarse en zonas de juego en colegios para delimitar áreas del campo. Los conos de tráfico son de muchos colores, naranja, amarillos y rojos, siendo estos colores usados por su brillo.',
        },
        {
          id: 4,
          name: 'Hito flexible',
          category: 'Señalización Vial Temporal',
          summary: 'HITO DELINEADOR VIAL FLEXIBLE',
          technicalDetails:
            'HITO DELINEADOR VIAL FLEXIBLE\n\nHito delineador vial flexible para señalización que se utiliza para delimitar o guiar el tránsito. Compuesto por dos piezas es de forma tubular y retráctil, hecho de polietileno. Posee 3 cintas reflectivas tipo panal de alta intensidad que aseguran su visibilidad, sobre todo en períodos de luminosidad reducida como la noche o bajo neblina. Estos elementos deberán cumplir con las exigencias que se indican a continuación.',
        },
        {
          id: 5,
          name: 'Estoperol o Botón Vial',
          category: 'Reductor de Velocidad',
          summary: 'Estoperol con espigo y Estoperol sin espigo.',
          technicalDetails: 'Dispositivo de señalización vial fabricado en plástico rígido inyectado, su forma es de semiesfera. Con espigo que reduce los desprendimientos, sin espigo inyectado en plástico de alta resistencia, colores amarillo y blanco disponibles.',
        },
        {
          id: 6,
          name: 'Resalto Vial 2 piezas',
          category: 'Reductor de Velocidad',
          summary: 'Resalto plástico de alta resistencia.',
          technicalDetails: '-Dispositivo para disuadir al conductor a reducir la velocidad de su vehículo ya que el efecto que recibe mismo es menor al sobrepasar despacio dicho resalto.\n-El material es polipropileno de alto impacto con buen balance impacto/rigidez.\n-Adhesivo 3M grado diamante.',
        },
        {
          id: 7,
          name: 'Resalto Vial 3 piezas',
          category: 'Reductor de Velocidad',
          summary: 'Banda Alertadora - Plástico Rumble Rayas',
          technicalDetails: 'Dispositivo elaborado en plástico inyectado, su función es alertar los conductores de la aproximación a zonas de reducción de velocidad produciendo un sonido al ser sobrepasado por el vehículo.',
        },
        {
          id: 8,
          name: 'Tachón o Segregador Vial',
          category: 'Canalización Vial',
          summary: 'Tachón Plástico con Reflectivo',
          technicalDetails: 'Dispositivo de canalización de flujo vehicular, utilizado en carriles exclusivo o delineación de salidas de autopistas, con reflectivos microprismáticos 3M no autoadhesivos de alta durabilidad. También conocido como Bordillo Traspasable.',
        },
        {
          id: 9,
          name: 'Topes de Estacionamiento',
          category: 'Topellantas',
          summary: 'Tope de Estacionamiento Mini',
          technicalDetails: 'Tope MINI o "Topellanta" fabricado en plástico de alta resistencia al impacto, permanencia de color mejorada con estabilizante UV, cintas reflectivas que aumentan su visibilidad en sotanos. medidas 50cm x 10cm x 17cms.',
        },
      ],
    },
    footer: {
      contactenos: 'CONTACTENOS',
      director: 'JOHN CHRISTIAN SANDOVAL FARAFAN',
      address:
        'C.S. DE SOLABARRIETA N°3035 AV. MUTUALISTA ENTRE 3ER Y 4TO ANILLO LA CALLE AL FRENTE DE SURTIDOR GENEX',
      phone: '+59178646205',
      email: 'csandoval@sax.com.bo',
      location: 'SANTA CRUZ - BOLIVIA',
    },
    contact: {
      enterCode: 'Introduce el código mostrado',
    },
  },
  en: {
    nav: {
      inicio: 'Home',
      quienesSomos: 'Information',
      productos: 'Products',
      contactenos: 'Lawyers',
      languageLabel: 'Language',
      themeLabel: 'Theme',
      themeClaroLabel: '☀️',
      themeOscuroLabel: '🌙',
      contactTitle: 'Main Contact',
      phoneLabel: 'Phone',
      emailLabel: 'Email',
    },
    home: {
      description: `We are a company dedicated to solutions and services in different areas such as: signaling products, road safety, Commercialization or sales of Led Lamps (Asia), office equipment and heavy machinery. Export and Commercialization of Minerals with phytosanitary registration certificate; import of products of vegetable origin (grains), is issued by senasag; SAX has commercial links throughout the Bolivian territory. This is why we work on different types of projects as well as public and private tenders at the national and international level.

We have the privilege of being the exclusive distributor of ADATILE (USA) and EFEXPORT ZF (Colombia) in terms of this furniture and road equipment, for various companies of local, national and international character.`,
    },
    aboutUs: {
      seoTitle: 'Information - SAX Soluciones & Servicios',
      seoDescription:
        'Comprehensive road signage, international partnerships and specialized legal consulting. Compliance with Bolivian regulations: traffic, NB standards, INRA and agrarian laws.',
      heroTitle: 'SAX Soluciones & Servicios',
      heroSubtitle: 'Comprehensive road signage and specialized legal support',
      intro:
        'At SAX Soluciones & Servicios we integrate the best international technology from Colombia, the United States and Brazil with Bolivian regulatory expertise. We install vertical and horizontal road signage, safety devices and intelligent mobility solutions, complying with the Traffic Law, Bolivian Technical Standards and agrarian laws (1715 and 3545).\n\nWe also provide agro-environmental, civil and business legal consulting, with experience in land regularization before INRA and in public and private procurement.\n\nWith SAX, your project benefits from world-class technology, end-to-end installation and specialized legal backing, ensuring safety, modernity and sustainability across the country.',
      lead:
        'SAX Soluciones & Servicios is a leading Bolivian company in comprehensive road signage and specialized legal consulting, committed to safe and sustainable national development.',
      sectionSignageTitle: 'Road signage and full installation',
      sectionSignageIntro:
        'We deliver vertical signage (regulatory, warning, informative and tourist) and horizontal signage (carriageway marking, pedestrian crossings, exclusive lanes and traffic symbols).',
      bulletEffexport:
        'Effexport (Colombia) portfolio: speed reducers, flexible waymarkers, parking stops, lane separators, road studs, reflective pavement markers (“cat eyes”), Jaguar channelizers, New Jersey-type barriers, retractable barriers, tubular delineators and high-durability thermoplastic markings.',
      bulletTrafficDevices:
        'Traffic Devices (United States): traffic control devices under MUTCD principles, including traffic signals, variable message signs, traffic control systems and road safety solutions.',
      bulletWritesys:
        'Writesys (Brazil): intelligent ITS mobility, toll control and auditing, digital traffic management and technology solutions for urban mobility.',
      sectionLegalTitle: 'Specialized legal consulting',
      sectionLegalIntro: 'Our legal team provides comprehensive advice in:',
      legalAgro:
        'Agro-environmental: regulatory compliance and sustainable management of rural projects.',
      legalCivil:
        'Civil and business: legal support for companies and infrastructure projects.',
      legalAgrarian:
        'Agrarian law and INRA: land regularization and regulation processes, with knowledge of Law No. 1715 on the National Agrarian Reform Service, Law No. 3545 on the community-based redirection of agrarian reform and complementary regulations.',
      sectionRegulatoryTitle: 'Bolivian regulatory framework',
      sectionRegulatoryIntro:
        'All projects align with applicable law. Institutional references for consultation:',
      regulatoryLinks: [
        {
          label: 'Ministry of Public Works, Services and Housing — transport and traffic',
          href: 'https://www.oopp.gob.bo',
        },
        { label: 'IBNORCA — Bolivian Technical Standards', href: 'https://www.ibnorca.org.bo' },
        { label: 'INRA — National Agrarian Reform Institute', href: 'https://www.inra.gob.bo' },
        {
          label: 'Official Gazette of the Plurinational State of Bolivia',
          href: 'https://www.gacetaoficialdebolivia.gob.bo',
        },
        {
          label: 'Law lookup (Lexivox compilation: Laws 259, 1715, 3545, among others)',
          href: 'https://www.lexivox.org/norms/BO-L-259.html',
        },
      ],
    },
    legalPage: {
      seoTitle: 'Legal counsel — SAX Soluciones & Servicios',
      seoDescription:
        'Agro-environmental and agrarian law, INRA, agri-environmental courts, environmental consulting, civil and business law, conciliation and arbitration. Bolivia.',
      heroEyebrow: 'LEGAL SAX',
      heroTitle: 'SAX Soluciones & Servicios',
      heroSubtitle:
        'Specialized team in agro-environmental and agrarian law, civil and business matters, supporting INRA processes, infrastructure projects and dispute resolution.',
      contactIntro: 'Direct contact for counsel',
      contactName: 'Engineer JOHN CHRISTIAN SANDOVAL FARAFAN',
      contactRole: 'Legal and consulting advisory',
      ctaWhatsapp: 'Message us on WhatsApp',
      sectionAgroTitle: 'Agro-environmental and agrarian law',
      agroLead:
        'We have experience in proceedings and representation related to the rural sector, natural resources and applicable Bolivian regulations.',
      inraTitle: 'INRA (National Institute for Agrarian Reform)',
      inraBullets: [
        'Land regularization and clearance processes.',
        'Regularization of agrarian property.',
        'Administrative procedures and compliance with agrarian regulations.',
      ],
      tribunalTitle: 'Agri-environmental justice',
      tribunalBullets: [
        'Defense and representation in proceedings involving land, natural resources and agrarian conflicts.',
        'Application of Law No. 1715 on the National Agrarian Reform Service and Law No. 3545 on the community-based redirection of agrarian reform.',
        'Disputes on land use, ownership and sustainable use.',
      ],
      consultoriaTitle: 'Agro-environmental consulting',
      consultoriaBullets: [
        'Environmental compliance in rural and urban projects.',
        'Environmental impact assessment and permitting support.',
        'Sustainability criteria in infrastructure and signage projects.',
      ],
      regulatoryTitle: 'Relevant Bolivian legal framework',
      regulatoryIntro: 'Legal and institutional references:',
      regulatoryLinks: [
        {
          label: 'Law No. 1715 (1996) — National Agrarian Reform Service',
          href: 'https://www.lexivox.org/norms/BO-L-1715.html',
        },
        {
          label: 'Law No. 3545 (2006) — Community-based redirection of agrarian reform',
          href: 'https://www.lexivox.org/norms/BO-L-3545.html',
        },
        {
          label: 'Traffic and road safety law — Lexivox reference',
          href: 'https://www.lexivox.org/norms/BO-L-259.html',
        },
        { label: 'Bolivian Technical Standards — IBNORCA', href: 'https://www.ibnorca.org.bo' },
        {
          label: 'INRA — National Institute for Agrarian Reform',
          href: 'https://www.inra.gob.bo',
        },
        {
          label: 'Official Gazette of the Plurinational State of Bolivia',
          href: 'https://www.gacetaoficialdebolivia.gob.bo',
        },
        {
          label: 'Law No. 708 (2015) — Conciliation and arbitration',
          href: 'https://www.lexivox.org/norms/BO-L-708.html',
        },
      ],
      sectionCivilTitle: 'Civil and business legal practice',
      civilLead: 'We provide specialized counsel in:',
      civilTitle: 'Civil law',
      civilBullets: [
        'Construction, lease and service contracts.',
        'Civil liability in infrastructure projects.',
        'Disputes between individuals and communities.',
      ],
      empresarialTitle: 'Business law',
      empresarialBullets: [
        'Incorporation and ongoing advice to companies.',
        'Regulatory compliance in public and private procurement.',
        'M&A and strategic alliances.',
      ],
      empresarialClosing:
        'Defense and representation in administrative and judicial proceedings linked to business activity.',
      arbitrajeTitle: 'Conciliation and arbitration',
      arbitrajeBullets: [
        'Alternative, fast and efficient dispute resolution.',
        'Private conciliation and institutional arbitration.',
        'Focus on litigation prevention and practical outcomes for companies and communities.',
        'Application of Law No. 708 on Conciliation and Arbitration (2015), governing these mechanisms in Bolivia.',
      ],
    },
    products: {
      requestProduct: 'Request Product',
      category: 'Category',
      summary: 'Summary Description',
      technicalDetails: 'Technical Details',
      allCategories: 'All Categories',
      searchPlaceholder: 'Search product...',
      filterByCategory: 'Filter by Category',
      search: 'Search',
      noResults: 'No products found',
      items: [
        {
          id: 1,
          name: 'Plastic Barrier or Case',
          category: 'Temporary Road Signaling',
          summary: 'Vehicle and Pedestrian Channelizer.',
          technicalDetails: 'Plastic barriers or cases are a modular system very easy to assemble with units that can be coupled together, allowing you to build secure enclosures according to your needs, lightweight and easy to transport, essential for works, lane separators, detours, alternative lanes. Especially indicated for work with deep excavations and/or work at height (Bridges).',
        },
        {
          id: 2,
          name: 'Road Drum',
          category: 'Temporary Road Signaling',
          summary: 'Vehicle and Pedestrian Channelizer.',
          technicalDetails: 'Devices used for channeling and separating traffic, lightweight and easy to transport, essential for works, lane separators, detours, alternative lanes. They are cylindrical in shape with minimum dimensions of 80cm in height and 40cm in diameter, orange in color and must contain at least two Type III reflective strip bands 15cm wide.',
        },
        {
          id: 3,
          name: 'Traffic Cones',
          category: 'Temporary Road Signaling',
          summary: 'Vehicle and Pedestrian Channelizer.',
          technicalDetails: 'Cones in resistant PVC, orange in color, square base that gives great stability to the product, UV filter that allows greater durability and consistency, with retroreflective strip sections category III High intensity that allow high visibility both day and night. They are plastic cones used on roads to warn drivers of work zones or accidents. Traffic cones (also called road cones or safety cones) are brightly colored plastic cones used on roads to warn drivers of work zones or accidents. Cones are also used in indoor public spaces to mark areas closed to pedestrians, such as out-of-service bathrooms; or to highlight a dangerous situation, such as a slippery floor. They can also be used in school playgrounds to delimit field areas. Traffic cones come in many colors, orange, yellow and red, these colors being used for their brightness.',
        },
        {
          id: 4,
          name: 'Hito flexible',
          category: 'Temporary Road Signaling',
          summary: 'FLEXIBLE ROAD WAYMARKER (HITO)',
          technicalDetails:
            'FLEXIBLE ROAD WAYMARKER (HITO)\n\nFlexible road waymarker for signaling used to delimit or guide traffic. It consists of two pieces, is tubular and retractable, and is made of polyethylene. It has three honeycomb-type high-intensity reflective tapes that ensure visibility, especially in low-light conditions such as at night or in fog. These elements must comply with the requirements indicated below.',
        },
        {
          id: 5,
          name: 'Road Button or Stud',
          category: 'Speed Reducer',
          summary: 'Stud with pin and Stud without pin.',
          technicalDetails: 'Road signaling device manufactured in injected rigid plastic, its shape is hemispherical. With pin that reduces detachments, without pin injected in high resistance plastic, yellow and white colors available.',
        },
        {
          id: 6,
          name: 'Road Speed Bump 2 pieces',
          category: 'Speed Reducer',
          summary: 'High resistance plastic speed bump.',
          technicalDetails: '-Device to dissuade the driver to reduce the speed of his vehicle since the effect he receives is less when slowly passing over said speed bump.\n-The material is high impact polypropylene with good impact/rigidity balance.\n-3M diamond grade adhesive.',
        },
        {
          id: 7,
          name: 'Road Speed Bump 3 pieces',
          category: 'Speed Reducer',
          summary: 'Alert Band - Plastic Rumble Stripes',
          technicalDetails: 'Device made of injected plastic, its function is to alert drivers of the approach to speed reduction zones producing a sound when passed over by the vehicle.',
        },
        {
          id: 8,
          name: 'Road Stud or Separator',
          category: 'Road Channeling',
          summary: 'Plastic Stud with Reflective',
          technicalDetails: 'Vehicle flow channeling device, used in exclusive lanes or highway exit delineation, with non-self-adhesive 3M microprismatic reflectives of high durability. Also known as Transversable Curb.',
        },
        {
          id: 9,
          name: 'Parking Stops',
          category: 'Parking Stops',
          summary: 'Mini Parking Stop',
          technicalDetails: 'MINI Stop or "Tire Stop" manufactured in high impact resistance plastic, improved color permanence with UV stabilizer, reflective tapes that increase its visibility in basements. measurements 50cm x 10cm x 17cm.',
        },
      ],
    },
    footer: {
      contactenos: 'CONTACT US',
      director: 'JOHN CHRISTIAN SANDOVAL FARAFAN',
      address:
        'C.S. DE SOLABARRIETA N°3035 AV. MUTUALISTA ENTRE 3ER Y 4TO ANILLO LA CALLE AL FRENTE DE SURTIDOR GENEX',
      phone: '+59178646205',
      email: 'csandoval@sax.com.bo',
      location: 'SANTA CRUZ - BOLIVIA',
    },
    contact: {
      enterCode: 'Enter the code shown',
    },
  },
  fr: {
    nav: {
      inicio: 'Accueil',
      quienesSomos: 'Informations',
      productos: 'Produits',
      contactenos: 'Avocats',
      languageLabel: 'Langue',
      themeLabel: 'Thème',
      themeClaroLabel: '☀️',
      themeOscuroLabel: '🌙',
      contactTitle: 'Contact principal',
      phoneLabel: 'Téléphone',
      emailLabel: 'E-mail',
    },
    home: {
      description: `Nous sommes une entreprise dédiée aux solutions et services dans différents domaines tels que: produits de signalisation, sécurité routière, Commercialisation ou vente de Lampes Led (Asie), équipements de bureau et machinerie lourde. Exportation et Commercialisation de Minéraux avec certificat d'enregistrement phytosanitaire; importation de produits d'origine végétale (grains), est émis par le senasag; SAX a des liens commerciaux sur tout le territoire bolivien. C'est pourquoi nous travaillons sur différents types de projets ainsi que sur des appels d'offres publics et privés au niveau national et international.

Nous avons le privilège d'être le distributeur exclusif d'ADATILE (USA) et d'EFEXPORT ZF (Colombie) en matière de mobilier et d'équipement routier, pour diverses entreprises de caractère local, national et international.`,
    },
    aboutUs: {
      seoTitle: 'Informations - SAX Soluciones & Servicios',
      seoDescription:
        'Signalisation routière intégrale, partenariats internationaux et conseil juridique spécialisé. Conformité au droit bolivien : circulation, normes NB, INRA et lois agraires.',
      heroTitle: 'SAX Soluciones & Servicios',
      heroSubtitle: 'Signalisation routière intégrale et appui juridique spécialisé',
      intro:
        'Chez SAX Soluciones & Servicios, nous intégrons les meilleures technologies internationales de Colombie, des États-Unis et du Brésil avec le cadre normatif bolivien. Nous installons une signalisation verticale et horizontale, des dispositifs de sécurité et des solutions ITS, en respectant la loi sur la circulation, les Normes Techniques Boliviennes et les lois agraires (1715 et 3545).\n\nNous assurons également un conseil juridique agro-environnemental, civil et des affaires, avec une expérience des procédures de régularisation foncière auprès de l\'INRA et des appels d\'offres publics et privés.\n\nAvec SAX, votre projet bénéficie de technologies de référence, d\'une installation complète et d\'un accompagnement juridique spécialisé, pour la sécurité, la modernité et la durabilité sur tout le territoire.',
      lead:
        'SAX Soluciones & Servicios est une entreprise bolivienne de référence en signalisation routière intégrale et en conseil juridique spécialisé, engagée pour un développement sûr et durable du pays.',
      sectionSignageTitle: 'Signalisation routière et installation complète',
      sectionSignageIntro:
        'Nous proposons des solutions de signalisation verticale (panneaux réglementaires, d\'avertissement, d\'information et touristiques) et horizontale (marquage des chaussées, passages piétons, voies réservées et symboles).',
      bulletEffexport:
        'Gamme Effexport (Colombie) : ralentisseurs, balises flexibles, butées de stationnement, séparateurs, clous routiers, réflecteurs (« yeux de chat »), canaliseurs Jaguar, barrières type New Jersey, barrières rétractables, délinéateurs tubulaires et peintures thermoplastiques haute durabilité.',
      bulletTrafficDevices:
        'Traffic Devices (États-Unis) : dispositifs de circulation conformes aux principes MUTCD, feux, panneaux à message variable, systèmes de régulation et sécurité routière.',
      bulletWritesys:
        'Writesys (Brésil) : mobilité ITS intelligente, contrôle et audit de péage, gestion numérique du trafic et solutions technologiques pour la mobilité urbaine.',
      sectionLegalTitle: 'Conseil juridique spécialisé',
      sectionLegalIntro: 'Notre équipe juridique offre un accompagnement intégral en :',
      legalAgro:
        'Agro-environnemental : conformité réglementaire et gestion durable des projets ruraux.',
      legalCivil:
        'Droit civil et des affaires : soutien aux entreprises et aux projets d\'infrastructure.',
      legalAgrarian:
        'Droit agraire et INRA : régularisation et régulation foncières, maîtrise de la loi n° 1715 sur le service national de réforme agraire, de la loi n° 3545 sur l\'orientation communautaire de la réforme agraire et des textes complémentaires.',
      sectionRegulatoryTitle: 'Cadre normatif bolivien',
      sectionRegulatoryIntro:
        'Nos projets respectent le cadre légal applicable. Références institutionnelles pour consultation :',
      regulatoryLinks: [
        {
          label: 'Ministère des Travaux Publics, Services et Logement — transport et circulation',
          href: 'https://www.oopp.gob.bo',
        },
        { label: 'IBNORCA — Normes techniques boliviennes', href: 'https://www.ibnorca.org.bo' },
        {
          label: 'INRA — Institut national de la réforme agraire',
          href: 'https://www.inra.gob.bo',
        },
        {
          label: 'Gazette officielle de l\'État plurinational de Bolivie',
          href: 'https://www.gacetaoficialdebolivia.gob.bo',
        },
        {
          label: 'Consultation des lois (compilation Lexivox : lois 259, 1715, 3545, etc.)',
          href: 'https://www.lexivox.org/norms/BO-L-259.html',
        },
      ],
    },
    legalPage: {
      seoTitle: 'Conseil juridique — SAX Soluciones & Servicios',
      seoDescription:
        'Droit agro-environnemental et agraire, INRA, juridictions agro-environnementales, conseil environnemental, droit civil et des affaires, conciliation et arbitrage. Bolivie.',
      heroEyebrow: 'LEGAL SAX',
      heroTitle: 'SAX Soluciones & Servicios',
      heroSubtitle:
        'Équipe spécialisée en droit agro-environnemental et agraire, civil et des affaires, avec accompagnement INRA, projets d\'infrastructure et résolution des conflits.',
      contactIntro: 'Contact direct pour un conseil',
      contactName: 'Ingénieur JOHN CHRISTIAN SANDOVAL FARAFAN',
      contactRole: 'Conseil juridique et consulting',
      ctaWhatsapp: 'Écrivez-nous sur WhatsApp',
      sectionAgroTitle: 'Droit agro-environnemental et agraire',
      agroLead:
        'Nous avons de l\'expérience dans les procédures et la défense liées au secteur rural, aux ressources naturelles et au droit bolivien applicable.',
      inraTitle: 'INRA (Institut national de la réforme agraire)',
      inraBullets: [
        'Procédures de régularisation et d\'assainissement foncier.',
        'Régularisation de la propriété agraire.',
        'Démarches administratives et conformité à la réglementation agraire.',
      ],
      tribunalTitle: 'Justice agro-environnementale',
      tribunalBullets: [
        'Défense et représentation dans les procédures liées aux terres, aux ressources naturelles et aux conflits agraires.',
        'Application de la loi n° 1715 sur le service national de réforme agraire et de la loi n° 3545 sur l\'orientation communautaire de la réforme agraire.',
        'Differends sur l\'usage des sols, la propriété et l\'exploitation durable.',
      ],
      consultoriaTitle: 'Conseil agro-environnemental',
      consultoriaBullets: [
        'Conformité environnementale dans les projets ruraux et urbains.',
        'Évaluation d\'impact environnemental et aide aux autorisations.',
        'Critères de durabilité dans les projets d\'infrastructure et de signalisation.',
      ],
      regulatoryTitle: 'Cadre juridique bolivien pertinent',
      regulatoryIntro: 'Références juridiques et institutionnelles :',
      regulatoryLinks: [
        {
          label: 'Loi n° 1715 (1996) — Service national de réforme agraire',
          href: 'https://www.lexivox.org/norms/BO-L-1715.html',
        },
        {
          label: 'Loi n° 3545 (2006) — Orientation communautaire de la réforme agraire',
          href: 'https://www.lexivox.org/norms/BO-L-3545.html',
        },
        {
          label: 'Loi sur la circulation et la sécurité routière — référence Lexivox',
          href: 'https://www.lexivox.org/norms/BO-L-259.html',
        },
        {
          label: 'Normes techniques boliviennes — IBNORCA',
          href: 'https://www.ibnorca.org.bo',
        },
        {
          label: 'INRA — Institut national de la réforme agraire',
          href: 'https://www.inra.gob.bo',
        },
        {
          label: 'Gazette officielle de l\'État plurinational de Bolivie',
          href: 'https://www.gacetaoficialdebolivia.gob.bo',
        },
        {
          label: 'Loi n° 708 (2015) — Conciliation et arbitrage',
          href: 'https://www.lexivox.org/norms/BO-L-708.html',
        },
      ],
      sectionCivilTitle: 'Pratique du droit civil et des affaires',
      civilLead: 'Nous offrons un conseil spécialisé dans les domaines suivants :',
      civilTitle: 'Droit civil',
      civilBullets: [
        'Contrats de travaux, de bail et de services.',
        'Responsabilité civile dans les projets d\'infrastructure.',
        'Résolution des conflits entre particuliers et communautés.',
      ],
      empresarialTitle: 'Droit des affaires',
      empresarialBullets: [
        'Constitution et accompagnement des sociétés commerciales.',
        'Conformité réglementaire dans les marchés publics et privés.',
        'Fusions, acquisitions et alliances stratégiques.',
      ],
      empresarialClosing:
        'Défense et représentation dans les procédures administratives et judiciaires liées à l\'activité des entreprises.',
      arbitrajeTitle: 'Conciliation et arbitrage',
      arbitrajeBullets: [
        'Résolution des conflits par des moyens alternatifs, rapides et efficaces.',
        'Accompagnement en conciliation privée et arbitrage institutionnel.',
        'Prévention des litiges et solutions pratiques pour entreprises et communautés.',
        'Application de la loi n° 708 sur la conciliation et l\'arbitrage (2015), qui régit ces mécanismes en Bolivie.',
      ],
    },
    products: {
      requestProduct: 'Demander le Produit',
      category: 'Catégorie',
      summary: 'Description Résumée',
      technicalDetails: 'Détails Techniques',
      allCategories: 'Toutes les Catégories',
      searchPlaceholder: 'Rechercher un produit...',
      filterByCategory: 'Filtrer par Catégorie',
      search: 'Rechercher',
      noResults: 'Aucun produit trouvé',
      items: [
        {
          id: 1,
          name: 'Barrière ou Mallette Plastique',
          category: 'Signalisation Routière Temporaire',
          summary: 'Canalisateur Véhiculaire et Piétonnier.',
          technicalDetails: 'Les barrières ou mallettes plastiques sont un système modulaire très facile à assembler avec des unités qui peuvent être couplées entre elles, permettant de construire des clôtures sécurisées selon vos besoins, légères et faciles à transporter, essentielles pour les travaux, séparateurs de voie, déviations, voies alternatives. Particulièrement indiquées pour les travaux avec excavations profondes et/ou travaux en hauteur (Ponts).',
        },
        {
          id: 2,
          name: 'Fût Routier',
          category: 'Signalisation Routière Temporaire',
          summary: 'Canalisateur Véhiculaire et Piétonnier.',
          technicalDetails: 'Dispositifs utilisés pour la canalisation et la séparation du trafic, légers et faciles à transporter, essentiels pour les travaux, séparateurs de voie, déviations, voies alternatives. Ils sont de forme cylindrique avec des dimensions minimales de 80cm de hauteur et 40cm de diamètre, de couleur orange et doivent contenir au moins deux bandes de feuille réfléchissante Type III de 15cm de largeur.',
        },
        {
          id: 3,
          name: 'Cônes de Circulation',
          category: 'Signalisation Routière Temporaire',
          summary: 'Canalisateur Véhiculaire et Piétonnier.',
          technicalDetails: 'Cônes en PVC résistant, de couleur orange, base carrée qui donne une grande stabilité au produit, Filtre UV qui permet une plus grande durabilité et consistance, avec des sections de feuille rétroréfléchissante catégorie III Haute intensité qui permettent une haute visibilité de jour comme de nuit. Ce sont des cônes en plastique utilisés sur les routes pour avertir les conducteurs des zones de travaux ou d\'accidents. Les cônes de circulation (également appelés cônes routiers ou cônes de sécurité) sont des cônes en plastique de couleurs vives utilisés sur les routes pour avertir les conducteurs des zones de travaux ou d\'accidents. Les cônes sont également utilisés dans les espaces publics intérieurs pour marquer les zones fermées aux piétons, comme les toilettes hors service; ou pour mettre en évidence une situation dangereuse, comme un sol glissant. Ils peuvent également être utilisés dans les aires de jeux des écoles pour délimiter les zones du terrain. Les cônes de circulation sont de nombreuses couleurs, orange, jaunes et rouges, ces couleurs étant utilisées pour leur luminosité.',
        },
        {
          id: 4,
          name: 'Hito flexible',
          category: 'Signalisation Routière Temporaire',
          summary: 'HITO FLEXIBLE DE SIGNALISATION ROUTIÈRE',
          technicalDetails:
            'HITO FLEXIBLE DE SIGNALISATION ROUTIÈRE\n\nHito flexible de signalisation routière utilisé pour délimiter ou guider la circulation. Composé de deux pièces, il est de forme tubulaire et rétractable, en polyéthylène. Il comporte 3 bandes réfléchissantes type nid d\'abeille haute intensité qui assurent sa visibilité, surtout lorsque la luminosité est réduite, comme la nuit ou par brume. Ces éléments devront respecter les exigences indiquées ci-dessous.',
        },
        {
          id: 5,
          name: 'Bouton Routier ou Clou',
          category: 'Réducteur de Vitesse',
          summary: 'Clou avec goupille et Clou sans goupille.',
          technicalDetails: 'Dispositif de signalisation routière fabriqué en plastique rigide injecté, sa forme est hémisphérique. Avec goupille qui réduit les détachements, sans goupille injecté en plastique haute résistance, couleurs jaune et blanc disponibles.',
        },
        {
          id: 6,
          name: 'Ralentisseur Routier 2 pièces',
          category: 'Réducteur de Vitesse',
          summary: 'Ralentisseur plastique haute résistance.',
          technicalDetails: '-Dispositif pour dissuader le conducteur de réduire la vitesse de son véhicule car l\'effet qu\'il reçoit est moindre en passant lentement sur ledit ralentisseur.\n-Le matériau est du polypropylène à fort impact avec un bon équilibre impact/rigidité.\n-Adhésif 3M grade diamant.',
        },
        {
          id: 7,
          name: 'Ralentisseur Routier 3 pièces',
          category: 'Réducteur de Vitesse',
          summary: 'Bande d\'Alerte - Plastique Rumble Rayures',
          technicalDetails: 'Dispositif élaboré en plastique injecté, sa fonction est d\'alerter les conducteurs de l\'approche des zones de réduction de vitesse en produisant un son lorsqu\'il est dépassé par le véhicule.',
        },
        {
          id: 8,
          name: 'Clou Routier ou Séparateur',
          category: 'Canalisation Routière',
          summary: 'Clou Plastique avec Réfléchissant',
          technicalDetails: 'Dispositif de canalisation du flux véhiculaire, utilisé dans les voies exclusives ou la délimitation des sorties d\'autoroutes, avec des réfléchissants microprismatiques 3M non auto-adhésifs de haute durabilité. Également connu sous le nom de Bordure Transversable.',
        },
        {
          id: 9,
          name: 'Butées de Stationnement',
          category: 'Butées de Stationnement',
          summary: 'Butée de Stationnement Mini',
          technicalDetails: 'Butée MINI ou "Butée de Pneu" fabriquée en plastique haute résistance aux chocs, permanence de couleur améliorée avec stabilisant UV, bandes réfléchissantes qui augmentent sa visibilité dans les sous-sols. mesures 50cm x 10cm x 17cm.',
        },
      ],
    },
    footer: {
      contactenos: 'CONTACTEZ-NOUS',
      director: 'JOHN CHRISTIAN SANDOVAL FARAFAN',
      address:
        'C.S. DE SOLABARRIETA N°3035 AV. MUTUALISTA ENTRE 3ER Y 4TO ANILLO LA CALLE AL FRENTE DE SURTIDOR GENEX',
      phone: '+59178646205',
      email: 'csandoval@sax.com.bo',
      location: 'SANTA CRUZ - BOLIVIE',
    },
    contact: {
      enterCode: 'Saisissez le code affiché',
    },
  },
};
