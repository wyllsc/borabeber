angular.module('app.services', [])

  .factory('BlankFactory', function () {
  })

  .service('BlankService', function () {
  })

  .factory('OfertaFactory', function () {

    var ofertas = [{
      estabelecimento: 'Thi Singleton',
      imagem: 'img/tipo-cerveja/bud-bottles.gif',
      oferta: 'Mi in nulla posuere sollicitudin aliquam ultrices sagittis orci.'
    }, {
      estabelecimento: 'Dustin Davison',
      imagem: 'img/tipo-cerveja/504361.jpg',
      oferta: 'Elit pellentesque habitant morbi tristique senectus.'
    }, {
      estabelecimento: 'Galina Kane',
      imagem: 'img/tipo-cerveja/3170130_1_A.jpg',
      oferta: 'Ut venenatis tellus in metus vulputate eu scelerisque.'
    }, {
      estabelecimento: 'Leda Coles',
      imagem: 'img/tipo-cerveja/930cbf4eab9734291c318113b11a721c.jpg',
      oferta: 'Faucibus pulvinar elementum integer enim neque volutpat ac tincidunt vitae.'
    }, {
      estabelecimento: 'Holly Deacon',
      imagem: 'img/tipo-cerveja/504361.jpg',
      oferta: 'Feugiat in ante metus.'
    }, {
      estabelecimento: 'Daisy Cassidy',
      imagem: 'img/tipo-cerveja/3170130_1_A.jpg',
      oferta: 'Aliquam ut porttitor.'
    }, {
      estabelecimento: 'Shellie Edmonds',
      imagem: 'img/tipo-cerveja/5537106_123458960-2.jpg',
      oferta: 'Ultrices sagittis orci a scelerisque purus semper eget duis.'
    }, {
      estabelecimento: 'Waltraud Pemberton',
      imagem: 'img/tipo-cerveja/120902615_1GG.jpg',
      oferta: 'Adipiscing elit pellentesque habitant morbi tristique senectus et netus et.'
    }, {
      estabelecimento: 'Marcia Legge',
      imagem: 'img/tipo-cerveja/123466329-1-3.jpg',
      oferta: 'Nunc lobortis mattis aliquam faucibus purus in massa tempor.'
    }, {
      estabelecimento: 'Shirlee Ferry',
      imagem: 'img/tipo-cerveja/bud-bottles.gif',
      oferta: 'Ullamcorper dignissim cras tincidunt.'
    }, {
      estabelecimento: 'Arcelia Kearns',
      imagem: 'img/tipo-cerveja/Budweiser_350ml_1-500x500.png',
      oferta: 'Magnis dis parturient montes.'
    }, {
      estabelecimento: 'Telma Arnold',
      imagem: 'img/tipo-cerveja/Caixa-de-skol-269-ml.png',
      oferta: 'Pellentesque dignissim enim.'
    }, {
      estabelecimento: 'Saran Maughan',
      imagem: 'img/tipo-cerveja/caixa-engradado-cerveja-skol-garrafas-de-300ml-15-vasilhames-10863-MLB20035897498_012014-F.jpg',
      oferta: 'Donec enim diam vulputate ut pharetra sit.'
    }, {
      estabelecimento: 'Seema Richardson',
      imagem: 'img/tipo-cerveja/CERVEJA-BRAHMA-CAIXA-12X350ML-G__31761_zoom.jpg',
      oferta: 'Ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant.'
    }, {
      estabelecimento: 'Ila Wallis',
      imagem: 'img/tipo-cerveja/Cerveja-Caixa-Colonia-Pilsen.jpg',
      oferta: 'Eget gravida cum sociis natoque penatibus et magnis dis parturient.'
    }, {
      estabelecimento: 'Corinna Howell',
      imagem: 'img/tipo-cerveja/Cerveja-Heineken-lata-com-12-unid.jpg',
      oferta: 'Imperdiet proin fermentum leo vel orci porta non.'
    }, {
      estabelecimento: 'Lucio Cunningham',
      imagem: 'img/tipo-cerveja/Schin__71846_zoom.jpg',
      oferta: 'Quis enim lobortis scelerisque fermentum dui faucibus in ornare.'
    }, {
      estabelecimento: 'Lavette Clarkson',
      imagem: 'img/tipo-cerveja/cerveja-corona-extra-caixa-6-unidades-355ml-831301-MLB20287459989_042015-F.jpg',
      oferta: 'Elit ullamcorper dignissim cras tincidunt lobortis feugiat.'
    }, {
      estabelecimento: 'Dagny Corbett',
      imagem: 'img/tipo-cerveja/cerveja-skol-lata-com-12-unid.jpg',
      oferta: 'Ut morbi tincidunt augue interdum velit euismod in.'
    }, {
      estabelecimento: 'Ima Irvine',
      imagem: 'img/tipo-cerveja/free-budweiser-glassware-giveaway.png',
      oferta: 'Commodo elit at imperdiet dui accumsan.'
    }];

    return {
      listaOfertas: function () {
        return ofertas;
      },

      dica2: function () {
        return chats;
      }
    };
  });

