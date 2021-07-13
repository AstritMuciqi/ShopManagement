import React, { useEffect, useState } from "react";
import { IProduct } from "../../../../app/models/product";
import {
  Wrapper,
  Card,
  CardImage,
  CardBody,
  CardTitle,
  CardPrice,
} from "./Styles";
  
interface IProps {
  products:IProduct[];
  // selectActivity: (id: string) => void;
  // selectedActivity: IActivity | null;
  // editMode: boolean;
  // setEditMode: (editMode: boolean) => void;
  // setSelectedActivity: (activity: IActivity | null) => void;
  // createActivity: (activity: IActivity) => void;
  // editActivity: (activity: IActivity) => void;
  // deleteActivity: (id: string) => void;
}

  const HomeItems: React.FC<IProps> = ({
    products,
    // selectProduct,
    // selectedProduct,
    // editMode,
    // setEditMode,
    // setSelectedProduct,
    // createProduct,
    // editProduct,
    // deleteProduct,
    // openCreateForm
  }) => {
    return (
      <div>
      <Wrapper>
     {products.map((product) => (
       <Card key={product.productId}>
       <CardImage src="./assets/product1.jpg" />
       <CardBody>
         <CardTitle>{product.productName}</CardTitle>
         <CardPrice>{product.valueOfProduct}</CardPrice>
       </CardBody>
     </Card>
     ))}
   </Wrapper>

   </div>
        
    );
  };
  
  export default HomeItems;
  
  