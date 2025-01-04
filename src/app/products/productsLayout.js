"use client";
import React, { useEffect, useState } from "react";
import "./products.css";
// import { MakeAPIGET } from "@/utils/utility";

export default function ProductsLayout({ data }) {
  

  return (
    <div>
      <table id="customers">
        <thead>
          <tr>
            <th>Serial No </th>
            <th>Product Name </th>
            <th>Brand </th>
            <th>Product Price </th>
          </tr>

          {data.map((item, index) => {
            return (
              <tr key={index}>
                <td>{index}</td>
                <td>{item.title}</td>
                <td>{item.brand}</td>
                <td>{item.price}</td>
              </tr>
            );
          })}
        </thead>
      </table>
    </div>
  );
}
