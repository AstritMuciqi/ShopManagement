import axios from "axios";
import { useEffect, useState } from "react";
import ProductForm from "../../../feautures/Crud-Forma/productForm";
import { IProduct } from "../../models/product";
import Dash from "./SideBarDashboard/dash";


interface IProps {
  products:IProduct[];
  selectProduct: (productId: string) => void;
  selectedProduct: IProduct | null;
  editMode: boolean;
  setEditMode: (editMode: boolean) => void;
  setSelectedProduct: (product: IProduct | null) => void;
  createProduct: (product: IProduct) => void;
  editProduct: (product: IProduct) => void;
  deleteProduct: (productId: string) => void;
}

const Dashboard = () => { 
  const [products, setActivities] = useState<IProduct[]>([]);

    useEffect(() => {
      axios
        .get<IProduct[]>("http://localhost:5000/api/product")
        .then((response) => {
          let products: IProduct[] = [];
          response.data.forEach((product) => {
            product.productName = product.productName.split(".")[0];
            products.push(product);
          });
          setActivities(products);
        });
    }, []);

   

    return (
      <div>
        <Dash />
        
      </div>
    );
  }
 

export default Dashboard;
