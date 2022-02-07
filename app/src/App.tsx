import { useState } from "react";
import { useQuery } from "react-query";
//Components
import Drawer from "material-ui/Drawer";
import LinearProgress from "material-ui/LinearProgress";
import { Grid } from "@mui/material";
import { AddShoppingCart } from "@mui/icons-material";
import { Badge } from "material-ui";
// Style
import { Wrapper } from "./App.styles";
// Types
export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
}

const getProducts = async ():Promise<CartItemType> =>
await (await fetch('https://fakestoreapi.com/products')).json();

function App() {
  return (
    <div className="App">
      <h1>hello</h1>
    </div>
  );
}

export default App;
