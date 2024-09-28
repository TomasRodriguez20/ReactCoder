const products = [
  {
    id: 1,
    title: 'Mouse Razer Cobra Pro',
    price: '1000',
    category: 'Mouses',
    description:
      'Acorta distancias con la competencia y deslúmbralos a todos con el Razer Cobra Pro, un ratón gaming inalámbrico con tecnología Razer Chroma RGB.',
    image:
      'https://http2.mlstatic.com/D_NQ_NP_637791-MLU71846648318_092023-O.webp',
  },
  {
    id: 2,
    title: 'Mouse Logitech inalámbrico G305',
    price: '900',
    category: 'Mouses',
    description:
      'Diseñado para el rendimiento, G305 incorpora el sensor Hero que ofrece un rendimiento de 12.000 dpi y conectividad inalámbrica Ligthspeed de 1 ms en una solución ya disponible y muy asequible.',
    image:
      'https://logitechar.vtexassets.com/arquivos/ids/156572-800-800?v=636973475649200000&width=800&height=800&aspect=true',
  },
  {
    id: 3,
    title: 'Mouse Corsair NightSabre',
    price: '1000',
    category: 'Mouses',
    description: 'Sensor Óptico, 26000 dpi, Inalambrico, Calidad-Precio',
    image:
      'https://http2.mlstatic.com/D_NQ_NP_986850-MLU73346175607_122023-O.webp',
  },
  {
    id: 4,
    title: 'Auriculares Hyperx Cloud Alpha S',
    price: '750',
    category: 'Auriculares',
    description:
      'HyperX Cloud Alpha™ S se basa en el innovador Cloud Alpha y en las funciones de sonido envolvente 7.1.',
    image:
      'https://row.hyperx.com/cdn/shop/products/hyperx_cloud_alpha_s_blackblue_2_detachable_2048x2048.jpg?v=1662567757',
  },
  {
    id: 5,
    title: 'Auriculares HyperX Cloud Stinger S',
    price: '500',
    category: 'Auriculares',
    description:
      'Los HyperX Cloud Stinger S son los auriculares perfectos de nivel básico para el jugador que busca un sonido excelente a un buen precio',
    image:
      'https://s3-sa-east-1.amazonaws.com/saasargentina/JOYUWDyFg2QEoARiTKOd/imagen',
  },
  {
    id: 6,
    title: 'Auriculares Hyperx Cloud Flight',
    price: '1100',
    category: 'Auriculares',
    description:
      'Su conectividad inalámbrica permite moverte de un lugar a otro sin cables. A su vez, su batería de larga duración te dará horas interminables de sonidos envolventes en tus partidas.',
    image:
      'https://http2.mlstatic.com/D_NQ_NP_666988-MLA74529291387_022024-O.webp',
  },
  {
    id: 7,
    title: 'Monitor Gigabyte Edge G27FC',
    price: '3400',
    category: 'Monitores',
    description:
      'Los monitores gaming de GIGABYTE ofrecen las mejores especificaciones y calidad, los usuarios realmente pueden disfrutar de un rendimiento exclusivo sin la necesidad de extravagancia.',
    image:
      'https://gorilagames.com/img/Public/1019-producto-monitor-gigabyte-g27fc-gaming-ips-165hz-3-7434.jpg',
  },
  {
    id: 8,
    title: 'Monitor Aorus Kd25f-sa',
    price: '2700',
    category: 'Monitores',
    description:
      'El monitor AORUS KD25F Tactical Gaming utiliza un panel TN con color de 8 bits y un tiempo de respuesta de 0,5 ms que le permite disfrutar de una experiencia de juego fluida con colores vibrantes y verdaderos.',
    image:
      'https://http2.mlstatic.com/D_NQ_NP_713393-MLA32389119300_102019-O.webp',
  },
  {
    id: 9,
    title: 'Monitor Samsung Odyssey G4',
    price: '3000',
    category: 'Monitores',
    description:
      'El panel IPS se une para una imagen nítida. El monitor compatible con G-Sync tiene una frecuencia de actualización de 240 Hz y un tiempo de respuesta de 1 ms(GtG)',
    image:
      'https://images.samsung.com/is/image/samsung/p6pim/ar/ls25bg400elxzb/gallery/ar-odyssey-g4-27g40b-433612-ls25bg400elxzb-533464517?$650_519_PNG$',
  },
];

export const getProducts = new Promise((resolve) => {
  setTimeout(() => {
    resolve(products);
  }, 2000);
});

export const getProduct = (id) => {
  return products.find((prod) => prod.id == id);
};

//falta getCategory -> filter

export const getCategory = (category) => {
  return products.filter((product) => product.category === category);
  //va a retornar un array de prods que cumplan con esa condicion
};
