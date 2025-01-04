"use client";
import React from "react";
import "./product.css";
// import ProductEvents from "./productEvents";
// import { MakeAPIGET } from "@/utils/utility";

export default function ProductLayout({ data }) {
  

  return (
    <div>
      <table id="customers">
        <thead>
          <tr>
            <th>Serial No </th>
            <th>Product Name </th>
            <th>Product Price </th>
          </tr>

          {data.map((item, index) => {
            return (
              <tr key={index}>
                <td>{index}</td>
                <td>{item.title}</td>
                <td>{item.price}</td>
              </tr>
            );
          })}
        </thead>
        {/* <ProductEvents/> */}
      </table>
    </div>
  );
}
