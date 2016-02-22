angular.module('app.services', [])

  .factory('BlankFactory', [function () {
  }])

  .service('BlankService', [function () {
  }])

  .factory('ServicoOferta', function () {

    return {
      listaOfertas: function () {

        var ofertas = [{
          estabelecimento: "Thi Singleton",
          oferta: "Mi in nulla posuere sollicitudin aliquam ultrices sagittis orci."
        }, {
          estabelecimento: "Dustin Davison",
          oferta: "Elit pellentesque habitant morbi tristique senectus."
        }, {
          estabelecimento: "Galina Kane",
          oferta: "Ut venenatis tellus in metus vulputate eu scelerisque."
        }, {
          estabelecimento: "Leda Coles",
          oferta: "Faucibus pulvinar elementum integer enim neque volutpat ac tincidunt vitae."
        }, {
          estabelecimento: "Holly Deacon",
          oferta: "Feugiat in ante metus."
        }, {
          estabelecimento: "Daisy Cassidy",
          oferta: "Aliquam ut porttitor."
        }, {
          estabelecimento: "Shellie Edmonds",
          oferta: "Ultrices sagittis orci a scelerisque purus semper eget duis."
        }, {
          estabelecimento: "Waltraud Pemberton",
          oferta: "Adipiscing elit pellentesque habitant morbi tristique senectus et netus et."
        }, {
          estabelecimento: "Marcia Legge",
          oferta: "Nunc lobortis mattis aliquam faucibus purus in massa tempor."
        }, {
          estabelecimento: "Shirlee Ferry",
          oferta: "Ullamcorper dignissim cras tincidunt."
        }, {
          estabelecimento: "Arcelia Kearns",
          oferta: "Magnis dis parturient montes."
        }, {
          estabelecimento: "Telma Arnold",
          oferta: "Pellentesque dignissim enim."
        }, {
          estabelecimento: "Saran Maughan",
          oferta: "Donec enim diam vulputate ut pharetra sit."
        }, {
          estabelecimento: "Seema Richardson",
          oferta: "Ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant."
        }, {
          estabelecimento: "Ila Wallis",
          oferta: "Eget gravida cum sociis natoque penatibus et magnis dis parturient."
        }, {
          estabelecimento: "Corinna Howell",
          oferta: "Imperdiet proin fermentum leo vel orci porta non."
        }, {
          estabelecimento: "Lucio Cunningham",
          oferta: "Quis enim lobortis scelerisque fermentum dui faucibus in ornare."
        }, {
          estabelecimento: "Lavette Clarkson",
          oferta: "Elit ullamcorper dignissim cras tincidunt lobortis feugiat."
        }, {
          estabelecimento: "Dagny Corbett",
          oferta: "Ut morbi tincidunt augue interdum velit euismod in."
        }, {
          estabelecimento: "Ima Irvine",
          oferta: "Commodo elit at imperdiet dui accumsan."
        }];
        return ofertas;
      },

      dica2: function () {
        return chats;
      }
    };
  });

