import { useState } from 'react'
import './App.css'
import IconSwitch from './components/IconSwitch'
import CardsView from './components/CardsView'
import ListView from './components/ListView';

const products = [{
  name: "Nike Metcon 2",
  price: "130",
  color: "red",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
}, {
  name: "Nike Metcon 2",
  price: "130",
  color: "green",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
}, {
  name: "Nike Metcon 2",
  price: "130",
  color: "blue",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
}, {
  name: "Nike Metcon 2",
  price: "130",
  color: "black",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
}, {
  name: "Nike free run",
  price: "170",
  color: "black",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
}, {
  name: "Nike Metcon 3",
  price: "150",
  color: "green",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
}];

function App() {
  const pathfile = 'D:/Нетология/задание 2 - События и состояние/answer/layout/src'
  const images = [
    { index: 0, img: "./cardImg.png" },
    { index: 1, img: "./listImg.png"}
  ]
  const [image, setImage] = useState(images[0])

  const handlerSwitch = () => {
    console.log(image);
    image === images[0] ? setImage(images[1]) : setImage(images[0]);
  }

  return (
    <>
      <IconSwitch
        icon={image.img}
        onSwitch={() => {console.log("click 1"); handlerSwitch();}}/>
      {/* <CardsView items={products} />
      <ListView items={products}/> */}
      {image === images[0] ? <CardsView items={products} /> : <ListView items={products}/>}
    </>
  )
}

export default App
