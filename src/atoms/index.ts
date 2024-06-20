import { atom } from "recoil";

export const recoilRoutes = atom({
  key: "routes",
  default: [
    {
      name: "Home", link: ""
    },
    {
      name: "Cursos", link: "cursos"
    },
    {
      name: "Aulas", link: "aulas"
    },
    {
      name: "Galeria", link: "galeria"
    },
    {
      name: "Serviços", link: "servicos"
    },
    {
      name: "Sobre", link: "sobre"
    },
    // {
    //   name: "Eventos", link: "eventos"
    // },
    // {
    //   name: "Equipe", link: "equipe"
    // },
    // {
    //   name: "Notícias", link: "noticias"
    // },
    {
      name: "Contato", link: "contato"
    }
  ],
})

export const recoilParceirosDoBem = atom({
  key: "parceirosDoBem",
  default: {
    name: "Parceiros do Bem",
    phone: "(31) 98605-0661",
    whatsApp: "https://wa.me/5531986050661",
    instagram: "https://www.instagram.com/ongparceirosdobem_",
    facebook: "https://www.facebook.com/people/Ong-Parceiros-do-Bem/100083482865397/",
    youtube: "https://www.youtube.com/channel/UCxNhCpGKVcch10CrhgvOyWg",
    email: "parceirosdobemvespasiano@gmail.com",
    address: "R. Santos Dumont 401, Jardim da Gloria, Vespasiano - MG",
    cnpj: "07608255000180",
    map: "https://www.google.com/maps/place/ONG+Parceiros+do+Bem/@-19.7488302,-43.9529003,15z/data=!4m6!3m5!1s0xa68905c244f699:0x5910ddc10081235a!8m2!3d-19.7488302!4d-43.9529003!16s%2Fg%2F11ss57yqx0?entry=ttu",
    link: "https://parceirosdobem.vercel.app/",
    repository: "https://github.com/wellingtonfernandesbarbosa/parceiros-do-bem",
  },
})
