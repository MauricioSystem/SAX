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
    card1: {
      title: string;
      text: string;
    };
    card2: {
      title: string;
      text: string;
    };
    card3: {
      title: string;
      text: string;
    };
    card4: {
      title: string;
      text: string;
    };
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
      description: `Somos una empresa que está dedicada a soluciones y servicios en diferentes áreas como ser: productos de señalización, seguridad vial, Comercialización o ventas de Lamparas Led (Asia),equipos de oficina y maquinaria pesada. Exportación y Comercialización de Minerales certificado de registro fitosanitario; importación de productos de origen vegetal (granos), es emitido por el senasag; SAX cuenta con nexos comerciales en todo el territorio boliviano.  Es por esto que se trabaja en diferentes tipos de proyectos así como en licitaciones públicas y privadas a nivel nacional e internacional.

Contamos con el privilegio de ser el distribuidor exclusivo de ADATILE (USA)y de EFEXPORT ZF (Colombia) en materia de este mobiliario y equipamiento vial, para las diversas empresas de carácter local, nacional e internacional.`,
    },
    aboutUs: {
      card1: {
        title: 'Nuestra Empresa',
        text: 'Somos una empresa que está dedicada a soluciones y servicios en diferentes áreas como ser importación, exportación y comercialización de minerales, productos de consumo humano, equipos de oficina y maquinaria pesada. SAX cuenta con nexos comerciales en todo el territorio boliviano. Es por esto que se trabaja en diferentes tipos de proyectos así como en licitaciones públicas y privadas a nivel nacional e internacional.',
      },
      card2: {
        title: 'Minerales',
        text: 'En temas de minerales se trabaja en toda la comercialización hasta la exportación de los mismos. Se ha trabajado con minerales como ser SAL, COBRE Y ORO. La empresa cuenta con todos los registros y permisos necesarios en las diferentes entidades del estado como ser SENARECOM, SENAVEX, ADUANA NACIONAL DE BOLIVIA, SIN y otros. Es importante mencionar que cuenta con sucursales y socios estratégicos en las zonas donde se producen estos minerales (La Paz, Oruro, Potosí).',
      },
      card3: {
        title: 'Importaciones',
        text: 'En el área de importaciones se viene trabajando en la importación de diferentes productos según requerimientos de nuestros clientes. Se ha trabajado bastante en la importación de MAQUINARIA PESADA Y PRODUCTOS DE SEÑALIZACIÓN VIAL, EQUIPOS DE COMPUTACIÓN, INSUMOS MÉDICOS entre otros. Es importante mencionar que SAX cuenta con todos los registros y permisos necesarios para realizar todo tipo de importaciones.',
      },
      card4: {
        title: 'Equipos de Computación',
        text: 'Otra área importante de la empresa es la distribución y venta de EQUIPOS DE COMPUTACIÓN, (HARDWARE) ACCESORIOS Y PARTES para las diferentes empresas a nivel local y nacional. Las principales marcas con las que se trabaja son: HP, DELL, LENOVO, SAMSUNG, EPSON, CISCO, TOSHIBA, CANON, SONY, APC y otros. El objetivo principal es la de brindar un excelente servicio con precios competitivos para lograr satisfacer a nuestros clientes y construir una verdadera relación humana.',
      },
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
      card1: {
        title: 'Our Company',
        text: 'We are a company dedicated to solutions and services in different areas such as import, export and commercialization of minerals, human consumption products, office equipment and heavy machinery. SAX has commercial links throughout the Bolivian territory. This is why we work on different types of projects as well as public and private tenders at the national and international level.',
      },
      card2: {
        title: 'Minerals',
        text: 'In terms of minerals, we work in the entire commercialization up to the export of the same. We have worked with minerals such as SALT, COPPER AND GOLD. The company has all the necessary records and permits in the different state entities such as SENARECOM, SENAVEX, NATIONAL CUSTOMS OF BOLIVIA, SIN and others. It is important to mention that it has branches and strategic partners in the areas where these minerals are produced (La Paz, Oruro, Potosí).',
      },
      card3: {
        title: 'Imports',
        text: 'In the import area, we have been working on the import of different products according to our clients requirements. We have worked extensively on the import of HEAVY MACHINERY AND ROAD SIGNALING PRODUCTS, COMPUTING EQUIPMENT, MEDICAL SUPPLIES among others. It is important to mention that SAX has all the necessary records and permits to carry out all types of imports.',
      },
      card4: {
        title: 'Computing Equipment',
        text: 'Another important area of the company is the distribution and sale of COMPUTING EQUIPMENT, (HARDWARE) ACCESSORIES AND PARTS for different companies at the local and national level. The main brands we work with are: HP, DELL, LENOVO, SAMSUNG, EPSON, CISCO, TOSHIBA, CANON, SONY, APC and others. The main objective is to provide excellent service with competitive prices to satisfy our customers and build a true human relationship.',
      },
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
      card1: {
        title: 'Notre Entreprise',
        text: 'Nous sommes une entreprise dédiée aux solutions et services dans différents domaines tels que l\'importation, l\'exportation et la commercialisation de minéraux, produits de consommation humaine, équipements de bureau et machinerie lourde. SAX a des liens commerciaux sur tout le territoire bolivien. C\'est pourquoi nous travaillons sur différents types de projets ainsi que sur des appels d\'offres publics et privés au niveau national et international.',
      },
      card2: {
        title: 'Minéraux',
        text: 'En termes de minéraux, nous travaillons dans toute la commercialisation jusqu\'à l\'exportation des mêmes. Nous avons travaillé avec des minéraux tels que le SEL, le CUIVRE et l\'OR. L\'entreprise dispose de tous les registres et permis nécessaires dans les différentes entités de l\'État telles que SENARECOM, SENAVEX, DOUANES NATIONALES DE BOLIVIE, SIN et autres. Il est important de mentionner qu\'elle dispose de succursales et de partenaires stratégiques dans les zones où ces minéraux sont produits (La Paz, Oruro, Potosí).',
      },
      card3: {
        title: 'Importations',
        text: 'Dans le domaine des importations, nous travaillons sur l\'importation de différents produits selon les exigences de nos clients. Nous avons beaucoup travaillé sur l\'importation de MACHINERIE LOURDE ET PRODUITS DE SIGNALISATION ROUTIÈRE, ÉQUIPEMENTS INFORMATIQUES, FOURNITURES MÉDICALES entre autres. Il est important de mentionner que SAX dispose de tous les registres et permis nécessaires pour effectuer tous types d\'importations.',
      },
      card4: {
        title: 'Équipements Informatiques',
        text: 'Un autre domaine important de l\'entreprise est la distribution et la vente d\'ÉQUIPEMENTS INFORMATIQUES, (MATÉRIEL) ACCESSOIRES ET PIÈCES pour les différentes entreprises au niveau local et national. Les principales marques avec lesquelles nous travaillons sont: HP, DELL, LENOVO, SAMSUNG, EPSON, CISCO, TOSHIBA, CANON, SONY, APC et autres. L\'objectif principal est de fournir un excellent service avec des prix compétitifs pour satisfaire nos clients et construire une véritable relation humaine.',
      },
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
  },
};
