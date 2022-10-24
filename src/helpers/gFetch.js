
const productos = [
      {
        id:'1',
        nombre:'Monitor Led Curvo 24" Samsung Odyssey CRG5 G50',
        categoria: 'monitor',
        precio: 68000,
        stock: 10,
        detalleu: 'Resolucion: 1920x1080' ,
        detalled: 'DisplayPort: si',
        imagen: 'https://images.samsung.com/is/image/samsung/p6pim/ar/lc24rg50fzlczb/gallery/ar-c24rg5-433672-lc24rg50fzlczb-533475178?$720_576_PNG$'},
      {
        id:'2',
        nombre:'Monitor Led 27" Samsung Odyssey G3 144Hz',
        categoria: 'monitor',
        precio: 85000,
        stock: 7,
        detalleu: 'Resolucion: 1920x1080', 
        detalled: 'DisplayPort: si',
        imagen: 'https://images.samsung.com/is/image/samsung/p6pim/co/ls27ag320nlxzl/gallery/co-odyssey-g3-g32a-ls27ag320nlxzl-thumb-532745104?$480_480_PNG$'},
      {
        id:'3',
        nombre:'Monitor Led Curvo 32" Samsung T550 75Hz',
        categoria: 'monitor',
        precio: 85000,
        stock: 7,
        detalleu: 'Resolucion: 1920x1080',
        detalled: 'DisplayPort: no',
        imagen: 'https://mexx-img-2019.s3.amazonaws.com/monitor-samsung-curvo-32_42642_5.jpeg'},
      {
        id:'4',
        nombre:'Placa de Video MSI Nvidia Geforce GTX 1660 Super',
        categoria: 'placa-video',
        precio: 78000,
        stock: 7,
        detalleu: 'Salidas DisplayPort 3',
        detalled: 'Capacidad De Memoria: 6 GB',
        detallet: 'Coolers: 2',
        imagen: 'https://www.qloud.ar/SITES/IMG/mundo-hardware-01-2021/0000000000004719072681852.jpg'},
      {
        id: '5',
        nombre: 'Placa de Video MSI Nvidia Geforce RTX 3070',
        categoria: 'placa-video',
        precio: 175000,
        stock: 4,
        detalleu: 'Salidas DisplayPort: 3',
        detalled: 'Capacidad De Memoria: 8 GB',
        detallet: 'Coolers: 2',
        imagen: 'https://sc04.alicdn.com/kf/H61ccc66c83f847c3b2d0c04b5515cf3aN.jpg' 
      }, 
      {
        id: '6',
        nombre: 'Placa de Video PowerColor AMD Radeon Rx 6800 XT',
        categoria: 'placa-video',
        precio: 193000,
        stock: 7,
        detalleu: 'Salidas DisplayPort: 3',
        detalled: 'Capacidad De Memoria: 16 GB',
        detallet: 'Coolers: 3',
        imagen: 'https://spacegamer.com.ar/img/Public/1058-producto-1314-powercolor-amd-radeon-rx-6800xt-red-devil-16gb-gddr6-5037.jpg' 
      },
      {
        id: '7',
        nombre: 'Placa de Video MSI Nvidia Geforce RTX 3080',
        categoria: 'placa-video',
        precio: 231000,
        stock: 9,
        detalleu: 'Salidas DisplayPort: 3',
        detalled: 'Capacidad De Memoria: 10 GB',
        detallet: 'Coolers: 3',
        imagen: 'https://www.venex.com.ar/products_images/1662398927_placa_4.png' 
      },
      {
        id: '8',
        nombre: 'Memoria Ram PNY XLR8 GAMING 8GB 3200Mhz',
        categoria: 'memoria-ram',
        precio: 9900,
        stock: 18,
        detalleu: 'Velocidad: 3200MHz',
        detalled: 'Tipo de memoria: DDR4',
        detallet: 'RGB: Si',
        imagen: 'https://www.venex.com.ar/products_images/thumb/1599252411_1597155903_ddr4xlr8desktoprgb3200mhzfr.jpg' 
      },
      {
        id: '9',
        nombre: 'Memoria Ram Patriot Viper Steel Series 8GB',
        categoria: 'memoria-ram',
        precio: 10000,
        stock: 15,
        detalleu: 'Velocidad: 3200MHz',
        detalled: 'Tipo de memoria: DDR4',
        detallet: 'RGB: Si',
        imagen: 'https://katech.com.ar/wp-content/uploads/MEM245.jpg' 
      },
      {
        id: '10',
        nombre: 'Memoria Ram PNY XLR8 GAMING 8GB White',
        categoria: 'memoria-ram',
        precio: 10500,
        stock: 12,
        detalleu: 'Velocidad: 3200MHz',
        detalled: 'Tipo de memoria: DDR4',
        detallet: 'RGB: Si',
        imagen: 'https://www.maximus.com.ar/Temp/App_WebSite/App_PictureFiles/Items/MD8GD4320016XRGBW.jpg' 
      },
      {
        id: '11',
        nombre: 'Memoria Ram Patriot Viper Steel Series 16GB ',
        categoria: 'memoria-ram',
        precio: 18300,
        stock: 16,
        detalleu: 'Velocidad: 3200MHz',
        detalled: 'Tipo de memoria: DDR4',
        detallet: 'RGB: Si',
        imagen: 'https://logg.api.cygnus.market/static/logg/Global/Memoria%20RAM%20Patriot%20Viper%20Steel%20RGB%20Series%20DDR4%2016GB%203200MHz%20CL18/df551dbee0e44ed897da131211d863e3.webp' 
      },
      {
        id: '12',
        nombre: 'Memoria Ram Gigabyte Aorus 32GB (2X16GB)',
        categoria: 'memoria-ram',
        precio: 77000,
        stock: 6,
        detalleu: 'Velocidad: 5200MHz',
        detalled: 'Tipo de memoria: DDR5',
        detallet: 'RGB: No',
        imagen: 'https://www.maximus.com.ar/Temp/App_WebSite/App_PictureFiles/Items/GP-ARS32G52D5_800.jpg' 
      },
      {
        id: '13',
        nombre: 'Disco Solido SSD 240GB PNY ',
        categoria: 'disco',
        precio: 4800,
        stock: 10,
        detalleu: 'Capacidad: 240GB',
        detalled: 'Velocidad de Lectura: 560MB/S',
        detallet: 'Velocidad de Escritura: 560MB/S',
        imagen: 'https://hard-digital.com.ar/public/files/DISCO%20SOLIDO%20SSD%20240GB%20PNY%20CS900%20SATA/4.jpg' 
      },
      {
        id: '14',
        nombre: 'Disco Solido SSD 480GB Crucial',
        categoria: 'disco',
        precio: 8500,
        stock: 14,
        detalleu: 'Capacidad: 480GB',
        detalled: 'Velocidad de Lectura: 540MB/S',
        detallet: 'Velocidad de Escritura: 540MB/S',
        imagen: 'https://mexx-img-2019.s3.amazonaws.com/39592_1.jpeg' 
      },
      {
        id: '15',
        nombre: 'Disco Solido SSD 240GB Western Digital M.2',
        categoria: 'disco',
        precio: 6700,
        stock: 9,
        detalle: 'Capacidad: 240GB, Velocidad Lectura: 2400MB/S, Velocidad Escritura: 900MB/S',
        detalleu: 'Capacidad: 240GB',
        detalled: 'Velocidad de Lectura: 2400MB/S',
        detallet: 'Velocidad de Escritura: 900MB/S',
        imagen: 'https://www.westerndigital.com/content/dam/store/en-us/assets/products/internal-storage/wd-green-ssd/gallery/wd-green-sata-ssd-M2-front-240GB.png.thumb.1280.1280.png' 
      },
      {
        id: '16',
        nombre: 'Disco Rigido HDD 1TB Western Digital Blue',
        categoria: 'disco',
        precio: 8600,
        stock: 24,
        detalleu: 'Capacidad: 1TB',
        detalled: 'Velocidad de Lectura: 160MB/S',
        detallet: 'Velocidad de Escritura: 160MB/S',
        imagen: 'https://www.compugarden.com.ar/Temp/App_WebSite/App_PictureFiles/Items/WD10EZEX_800.jpg' 
      },
      {
        id: '17',
        nombre: 'Motherboard MSI B450M Pro-VDH',
        categoria: 'motherboard',
        precio: 17500,
        stock: 8,
        detalleu: 'Socket: AM4',
        detalled: 'Slot DDR4: 4 (Max 128GB)',
        detallet: 'WiFi: No',
        imagen: 'https://asset.msi.com/resize/image/global/product/product_6_20190708134634_5d22d8bac2965.png62405b38c58fe0f07fcef2367d8a9ba1/600.png' 
      },
      {
        id: '18',
        nombre: 'Motherboard MSI Pro H610M-G',
        categoria: 'motherboard',
        precio: 23000,
        stock: 12,
        detalleu: 'Socket: LGA 1700',
        detalled: 'Slot DDR4: 2 (Max: 64GB)',
        detallet: 'WiFi: No',
        imagen: 'https://www.maximus.com.ar/Temp/App_WebSite/App_PictureFiles/Items/911-7D46-008.jpg' 
      },
      {
        id: '19',
        nombre: 'Motherboard MSI Pro Z690-A ',
        categoria: 'motherboard',
        precio: 61000,
        stock: 5,
        detalleu: 'Socket: LGA 1700',
        detalled: 'Slot DDR5: 4 (Max: 128GB)',
        detallet: 'WiFi: No',
        imagen: 'https://gorilagames.com/img/Public/1019-producto-motherboard-msi-z690-a-wifi-1-6484.jpg' 
      }, {
        id: '20',
        nombre: 'Fuente 450W Gigabyte P450B',
        categoria: 'fuentes',
        precio: 10000,
        stock: 10,
        detalleu: '80 Plus Bronze',
        detalled: 'Watts: 450',
        detallet: 'Modular: No',
        imagen: 'https://www.comeros.com.ar/wp-content/uploads/2021/01/Comeros-GIGABYTE-GP-P450B-5.jpg' 
      },
      {
        id: '21',
        nombre: 'Fuente 700W Thermaltake Smart',
        categoria: 'fuentes',
        precio: 21500,
        stock: 15,
        detalleu: '80 Plus White',
        detalled: 'Watts: 700',
        detallet: 'Modular: No',
        imagen: 'https://es.thermaltake.com/media/catalog/product/cache/023a745bb14092c479b288481f91a1bd/db/imgs/pdt/gallery/PS-SPD-0700NPCW-W_70ebe332a67d4f6983867a57064ee986.jpg'
      },
      {
        id: '22',
        nombre: 'Micro AMD Ryzen 5 5600X 4.6 Ghz',
        categoria: 'procesadores',
        precio: 46800,
        stock: 16,
        detalleu: 'Socket: AM4',
        detalled: 'Nucleos: 6',
        detallet: 'Hilos: 12',
        imagen: 'https://www.maximus.com.ar/Temp/App_WebSite/App_PictureFiles/Items/100-100000065BOX_800.jpg'
      },
      {
        id: '23',
        nombre: 'Micro Intel Pentium G7400 3.7Ghz',
        categoria: 'procesadores',
        precio: 20000,
        stock: 22,
        detalleu: 'Socket: s1700',
        detalled: 'Nucleos: 2 - Hilos: 12',
        detallet: 'Grafica Integrada: UHD Intel® 710',
        imagen: 'https://www.maximus.com.ar/Temp/App_WebSite/App_PictureFiles/Items/BX80715G7400.jpg'
      },
      {
        id: '24',
        nombre: 'Micro AMD Ryzen 9 5900X 4.8 Ghz ',
        categoria: 'procesadores',
        precio: 103500,
        stock: 4,
        detalleu: 'Socket: AM4',
        detalled: 'Nucleos: 12',
        detallet: 'Hilos: 24',
        imagen: 'https://www.fullh4rd.com.ar/img/productos/Pics_Prod/micro-amd-ryzen-9-5900x-scooler-svideo-0.jpg'
      },
      {
        id: '25',
        nombre: 'Gabinete Xigmatek Gaming X 6 Fan Edition',
        categoria: 'gabinete',
        precio: 24100,
        stock: 14,
        detalleu: 'Mother: ATX',
        detalled: 'Coolers Incluidos: 6 RGB',
        detallet: 'USB: 3',
        imagen: 'https://www.maximus.com.ar/Temp/App_WebSite/App_PictureFiles/Items/EN48397.jpg'
      }
        
    ]




    export const gFetch = (id) => {
      return new Promise((res, rej) => {
        // acciones que se ejecutan(sync o async)
        setTimeout(() => {
          res(productos);
        }, 1500);
      });
    };