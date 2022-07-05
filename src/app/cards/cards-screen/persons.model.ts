export interface CardItem {
  title: string;
  subtitle: string;
  imageUrl: string;
  iconUrl: string;
  defaultBackground: string;
  active: boolean;
}

export const PERSONS: CardItem[] = [
  {
    title: "Luffy",
    subtitle: "Do chapeu de palha!",
    imageUrl: "luffy/image.webp",
    iconUrl: "luffy/icon.png",
    defaultBackground: "#efefef",
    active: true
  },
  {
    title: "Zoro",
    subtitle: "O Rei do inferno!",
    imageUrl: "zoro/image.jpg",
    iconUrl: "zoro/icon.jpg",
    defaultBackground: "#007700",
    active: false
  },
  {
    title: "Usopp",
    subtitle: "O bravo guerreiro do mar!",
    imageUrl: "usopp/image.png",
    iconUrl: "usopp/icon.png",
    defaultBackground: "#eee",
    active: false
  },
  {
    title: "Nami",
    subtitle: "A gata ladra!",
    imageUrl: "nami/image.jpg",
    iconUrl: "nami/icon.png",
    defaultBackground: "#eee",
    active: false
  },
  {
    title: "Sanji",
    subtitle: "Perna negra!",
    imageUrl: "sanji/image.jpg",
    iconUrl: "sanji/icon.jpg",
    defaultBackground: "#eee",
    active: false
  },
  {
    title: "Chopper",
    subtitle: "A rena!",
    imageUrl: "chopper/image.jpg",
    iconUrl: "chopper/icon.png",
    defaultBackground: "#eee",
    active: false
  },
  {
    title: "Robin",
    subtitle: "Demônio de Ohara!",
    imageUrl: "robin/image.jpg",
    iconUrl: "robin/icon.jpg",
    defaultBackground: "#eee",
    active: false
  },
  {
    title: "Franky",
    subtitle: "Carpinteiro",
    imageUrl: "franky/image.webp",
    iconUrl: "franky/icon.png",
    defaultBackground: "#eee",
    active: false
  },
  {
    title: "Brook",
    subtitle: "Esqueleto vivo!",
    imageUrl: "brook/image.webp",
    iconUrl: "brook/icon.png",
    defaultBackground: "#eee",
    active: false
  },
  {
    title: "Jinbe",
    subtitle: "O cavaleiro do mar!",
    imageUrl: "jinbe/image.png",
    iconUrl: "jinbe/icon.jpeg",
    defaultBackground: "#eee",
    active: false
  },
  {
    title: "Yamato",
    subtitle: "Diarista de bordo!",
    imageUrl: "yamato/image.png",
    iconUrl: "yamato/icon.png",
    defaultBackground: "#eee",
    active: false
  },
]
