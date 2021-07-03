import React, { useState, FormEvent } from 'react';
import { Segment, Form, Button } from 'semantic-ui-react';
import {v4 as uuid} from 'uuid';
import { IProduct } from '../../app/models/product';
import '../../app/layout/DashboardLayout/styles.css';

interface IProps {
  setEditMode: (editMode: boolean) => void;
  product: IProduct;
  createProduct: (product: IProduct) => void;
  editProduct: (product: IProduct) => void;
}

const ProductForm: React.FC<IProps> = ({
  setEditMode,
  product: initialFormState,
  editProduct,
  createProduct
}) => {
  const initializeForm = () => {
    if (initialFormState) {
      return initialFormState;
    } else {
      return {
        productId: '',
        productName: '',
        sector: '',
        brand: '',
        valueOfProduct: '',
        modelYear: '',
        quantity: '',
        description: ''
        
      };
    }
  };

  const [product, setProduct] = useState<IProduct>(initializeForm);

  const handleSubmit = () => {
    if (product.productId.length === 0) {
      let newProduct = {
        ...product,
        productId: uuid()
      };
      createProduct(newProduct);
    } else {
      editProduct(product);
    }
  };

  const handleInputChange = (
    event: FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.currentTarget;
    setProduct({ ...product, [name]: value });
  };

  return (
    <Segment clearing>
      <Form onSubmit={handleSubmit}>
        <Form.Input
          onChange={handleInputChange}
          name='productName'
          placeholder='Product Name'
          value={product.productName}
        />
        <Form.Input
          onChange={handleInputChange}
          name='sector'
          placeholder='Sector Name'
          value={product.sector}
        />
        <Form.Input
          onChange={handleInputChange}
          name='brand'
          placeholder='Brand Name'
          value={product.brand}
        />
         <Form.Input
          onChange={handleInputChange}
          name='valueOfProduct'
          type='numeber'
          step="0.01"
          placeholder='ValueOfProduct'
          value={product.valueOfProduct}
        />
        <Form.Input
          onChange={handleInputChange}
          name='modelYear'
          type='date'
          placeholder='Model Year'
          value={product.modelYear}
        />
        <Form.Input
          onChange={handleInputChange}
          name='quantity'
          type='number'
          placeholder='Quantity'
          value={product.quantity}
        />
         <Form.TextArea
          onChange={handleInputChange}
          name='description'
          rows={2}
          placeholder='Description'
          value={product.description}
        />
        <Button floated='right' positive type='submit' content='Submit' />
        <Button
          onClick={() => setEditMode(false)}
          floated='right'
          type='button'
          content='Cancel'
        />
      </Form>
    </Segment>
  );
};

export default ProductForm;
