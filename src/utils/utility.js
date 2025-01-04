
// import React, { useEffect, useState } from "react";

export const MakeAPIGET = async() => {
  
    let data = await fetch("https://dummyjson.com/products");
    data = await data.json();

    // data = await data.json();
    return data.products;
  
};
