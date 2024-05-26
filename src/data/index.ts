import { v4 as uuid } from "uuid";
import type { IInputList, IProduct } from "../interfaces";

export const ProductList: IProduct[] = [
  {
    id: uuid(),
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    description:
      "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    imageUrl:
      "https://picsum.photos/id/62/367/267",
    price: "5000000",
    colors: ["#FF0032", "#2563eb", "#FF6E31"],
    category: {
      name: "car",
      imageUrl:
        "https://picsum.photos/id/62/367/267",
    },
  },
  {
    id: uuid(),
    title: "qui est esse",
    description:
      "est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla",
    imageUrl:
      "https://picsum.photos/id/60/367/267",
    price: "6598359",
    colors: ["#01204E", "#028391", "#F6DCAC"],
    category: {
      name: "car",
      imageUrl:
        "https://picsum.photos/id/60/367/267",
    },
  },
  {
    id: uuid(),
    title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    description:
      "deserunt eos nobis asperiores et hic\nest debitis repellat molestiae optio\nnihil ratione ut eos beatae quibusdam distinctio maiores\nearum voluptates et aut adipisci ea maiores voluptas maxime",
    imageUrl:
  "https://picsum.photos/id/61/367/267",
    price: "8548789",
    colors: ["#850F8D ", "#C738BD", "#E49BFF"],
    category: {
      name: "car",
      imageUrl:
    "https://picsum.photos/id/61/367/267",  
    },
  },
  {
    id: uuid(),
    title: "eum et est occaecati",
    description:
      "ad mollitia et omnis minus architecto odit\nvoluptas doloremque maxime aut non ipsa qui alias veniam\nblanditiis culpa aut quia nihil cumque facere et occaecati\nqui aspernatur quia eaque ut aperiam inventore",
    imageUrl:
      "https://picsum.photos/id/63/367/267",
    price: "5454824",
    colors: ["#222831", "#31363F", "#76ABAE"],
    category: {
      name: "car",
      imageUrl:
        "https://picsum.photos/id/63/367/267",
    },
  },
  {
    id: uuid(),
    title: "nesciunt quas odio",
    description:
      "corporis rerum ducimus vel eum accusantium\nmaxime aspernatur a porro possimus iste omnis\nest in deleniti asperiores fuga aut\nvoluptas sapiente vel dolore minus voluptatem incidunt ex",
    imageUrl:
      "https://picsum.photos/id/64/367/267",
    price: "425",
    colors: ["#43766C", "#F8FAE5", "#F97300"],
    category: {
      name: "t-shirt",
      imageUrl:
        "https://picsum.photos/id/64/367/267",
    },
  },
  {
    id: uuid(),
    title: "dolorem eum magni eos aperiam quia",
    description:
      "similique fugit est\nillum et dolorum harum et voluptate eaque quidem\nexercitationem quos nam commodi possimus cum odio nihil nulla\ndolorum exercitationem magnam ex et a et distinctio debitis",
    imageUrl:
      "https://picsum.photos/id/65/367/267",
    price: "205",
    colors: ["#070F2B", "#1B1A55", "#1B1A55"],
    category: {
      name: "t-shirt",
      imageUrl:
        "https://picsum.photos/id/65/367/267",
    },
  },
  {
    id: uuid(),
    title: "magnam facilis autem",
    description:
      "error suscipit maxime adipisci consequuntur recusandae\nvoluptas eligendi et est et voluptates\nquia distinctio ab amet quaerat molestiae et vitae\nadipisci impedit sequi nesciunt quis consectetur",
    imageUrl:
      "https://picsum.photos/id/66/367/267",
    price: "20589",
    colors: ["#030637", "#910A67", "#424769"],
    category: {
      name: "pc desktop",
      imageUrl:
        "https://picsum.photos/id/66/367/267",
    },
  },
  {
    id: uuid(),
    title: "dolorem dolore est ipsam",
    description:
      "commodi non non omnis et voluptas sit\nautem aut nobis magnam et sapiente voluptatem\net laborum repellat qui delectus facilis temporibus\nrerum amet et nemo voluptate expedita adipisci error dolorem",
    imageUrl:
      "https://picsum.photos/id/67/367/267",
    price: "520",
    colors: ["#FF0000", "#FFF9D0", "#03AED2"],
    category: {
      name: "nike",
      imageUrl:
        "https://picsum.photos/id/67/367/267",
    },
  },
  {
    id: uuid(),
    title: "dolorem dolore est ipsam",
    description:
      "commodi non non omnis et voluptas sit\nautem aut nobis magnam et sapiente voluptatem\net laborum repellat qui delectus facilis temporibus\nrerum amet et nemo voluptate expedita adipisci error dolorem",
    imageUrl:
      "https://picsum.photos/id/68/367/267",
    price: "10005",
    colors: ["#F6E9B2", "#7ABA78", "#B3C8CF"],
    category: {
      name: "furniture",
      imageUrl:
        "https://picsum.photos/id/68/367/267",
    },
  },
];




export const formInputList:IInputList[] = [
  {
    id: "title",
    name:"title",
    label:"Product Title",
    type:"text",
  },
  {
    id: "description",
    name:"description",
    label:"Product description",
    type:"text",
  },
  {
    id: "image",
    name:"imageUrl",
    label:"Product image url",
    type:"text",
  },
  {
    id: "price",
    name:"price",
    label:"Product price",
    type:"text",
  },
  
]