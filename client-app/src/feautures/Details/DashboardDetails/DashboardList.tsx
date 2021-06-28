import React from 'react';
import {  Button, Checkbox, Icon, List, Table } from 'semantic-ui-react';
import '../../../app/layout/DashboardLayout/styles.css';
import { IProduct } from '../../../app/models/product';
interface IProps {
  products: IProduct[];
  // selectActivity: (id: string) => void;
  // deleteActivity: (id: string) => void;
}

const DashboardList: React.FC<IProps> = ({
  products
  // selectActivity,
  // deleteActivity
}) => {
  return (
    <div className="test">
      <Table celled inverted selectable>
        <Table.Header fullWidth >
          <Table.Row  >
            <Table.HeaderCell>Product Name</Table.HeaderCell>
            <Table.HeaderCell>Sector</Table.HeaderCell>
            <Table.HeaderCell>Brand</Table.HeaderCell>
            <Table.HeaderCell>Value of Product</Table.HeaderCell>
            <Table.HeaderCell>Model Year</Table.HeaderCell>
            <Table.HeaderCell>Quantity</Table.HeaderCell>
            <Table.HeaderCell colSpan={"8"}>Description</Table.HeaderCell>
            <Table.HeaderCell>Options</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {products.map((product) => (
            <Table.Row positive key={product.productId}>
              <Table.Cell >{ product.productName}</Table.Cell>
              <Table.Cell>{product.sector}</Table.Cell>
              <Table.Cell>{product.brand}</Table.Cell>
              <Table.Cell>{product.valueOfProduct}</Table.Cell>
              <Table.Cell>{product.modelYear}</Table.Cell>
              <Table.Cell>{product.quantity}</Table.Cell>
              <Table.Cell colSpan="8">{product.description}</Table.Cell>
              <Table.Cell colSpan="2">
                <Button.Group>
                  <Button>Edit</Button>
                  <Button.Or />
                  <Button negative>Delete</Button>
                </Button.Group>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>

        <Table.Footer fullWidth>
          <Table.Row>
            <Table.HeaderCell colSpan="15">
              <Button
                floated="right"
                icon
                labelPosition="left"
                primary
                size="small"
              >
                <Icon name="product hunt" /> Add Product
              </Button>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </div>
  );
};

export default DashboardList;
