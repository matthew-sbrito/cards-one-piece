export class CardItem {
  readonly id!: number;
  title!: string;
  subtitle!: string;
  imageUrl!: string;
  iconUrl!: string;
  defaultBackground!: string;
  active!: boolean;

  constructor(props: Omit<CardItem, 'id'>, id?: number) {
    Object.assign(this, props)
    if (id) {
      this.id = id;
    }
  }
}

export const PERSONS: CardItem[] = [
  new CardItem({
    title: "Luffy",
    subtitle: "Do chapeu de palha!",
    imageUrl: "luffy/image.webp",
    iconUrl: "luffy/icon.png",
    defaultBackground: "#efefef",
    active: true
  }, 1),
  new CardItem({
    title: "Zoro",
    subtitle: "O Rei do inferno!",
    imageUrl: "zoro/image.jpg",
    iconUrl: "zoro/icon.jpg",
    defaultBackground: "#007700",
    active: false
  }, 2),
  new CardItem({
    title: "Usopp",
    subtitle: "O bravo guerreiro do mar!",
    imageUrl: "usopp/image.png",
    iconUrl: "usopp/icon.png",
    defaultBackground: "#eee",
    active: false
  }, 3),
  new CardItem({
    title: "Nami",
    subtitle: "A gata ladra!",
    imageUrl: "nami/image.jpg",
    iconUrl: "nami/icon.png",
    defaultBackground: "#eee",
    active: false
  }, 4),
  new CardItem({
    title: "Sanji",
    subtitle: "Perna negra!",
    imageUrl: "sanji/image.jpg",
    iconUrl: "sanji/icon.jpg",
    defaultBackground: "#eee",
    active: false
  }, 5),
  new CardItem({
    title: "Chopper",
    subtitle: "A rena!",
    imageUrl: "chopper/image.jpg",
    iconUrl: "chopper/icon.png",
    defaultBackground: "#eee",
    active: false
  }, 6),
  new CardItem({
    title: "Robin",
    subtitle: "Demônio de Ohara!",
    imageUrl: "robin/image.jpg",
    iconUrl: "robin/icon.jpg",
    defaultBackground: "#eee",
    active: false
  }, 7),
  new CardItem({
    title: "Franky",
    subtitle: "Carpinteiro",
    imageUrl: "franky/image.webp",
    iconUrl: "franky/icon.png",
    defaultBackground: "#eee",
    active: false
  }, 8),
  new CardItem({
    title: "Brook",
    subtitle: "Esqueleto vivo!",
    imageUrl: "brook/image.webp",
    iconUrl: "brook/icon.png",
    defaultBackground: "#eee",
    active: false
  }, 9),
  new CardItem({
    title: "Jinbe",
    subtitle: "O cavaleiro do mar!",
    imageUrl: "jinbe/image.png",
    iconUrl: "jinbe/icon.jpeg",
    defaultBackground: "#eee",
    active: false
  }, 10),
  new CardItem({
    title: "Yamato",
    subtitle: "Diarista de bordo!",
    imageUrl: "yamato/image.png",
    iconUrl: "yamato/icon.png",
    defaultBackground: "#eee",
    active: false
  }, 11),
]
