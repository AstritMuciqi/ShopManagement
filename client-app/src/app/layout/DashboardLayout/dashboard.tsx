import React, { useState, useEffect, Fragment } from "react";

import { Button, Container, Dropdown, Menu } from "semantic-ui-react";
import axios from "axios";
import './styles.css'
// import { IActivity } from '../models/activity';
// import ActivityDashboard from '../../../features/activities/dashboard/AppDashboard';
import AppDashboard from '../../../feautures/Details/DashboardDetails/AppDashboard';
import { IProduct } from "../../models/product";
const Dashboard = () => {
  const [products, setActivities] = useState<IProduct[]>([]);
  //   const [selectedActivity, setSelectedActivity] = useState<IActivity | null>(
  //     null
  //   );
  //   const [editMode, setEditMode] = useState(false);

  //   const handleOpenCreateForm = () => {
  //     setSelectedActivity(null);
  //     setEditMode(true);
  //   }

  //   const handleCreateActivity = (activity: IActivity) => {
  //     setActivities([...activities, activity]);
  //     setSelectedActivity(activity);
  //     setEditMode(false);
  //   }

  //   const handleEditActivity = (activity: IActivity) => {
  //     setActivities([...activities.filter(a => a.id !== activity.id), activity])
  //     setSelectedActivity(activity);
  //     setEditMode(false);
  //   }

  //   const handleDeleteActivity = (id: string) => {
  //     setActivities([...activities.filter(a => a.id !== id)])
  //   }

  //   const handleSelectActivity = (id: string) => {
  //     setSelectedActivity(activities.filter(a => a.id === id)[0]);
  //     setEditMode(false);
  //   };

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
      
      
      <Fragment>
        <Container style={{ marginButtom: "7em" }}>
          <Menu size="huge">
            <Menu.Menu position="left">
              <Dropdown item text="Users">
                <Dropdown.Menu>
                  <Dropdown.Item>Users</Dropdown.Item>
                  <Dropdown.Item>Admins</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Menu.Item name="Orders" />
            </Menu.Menu>

            <Menu.Menu position="left">
              <Dropdown item text="Product Master">
                <Dropdown.Menu>
                  <Dropdown.Item>
                   Product
                  </Dropdown.Item>
                  <Dropdown.Item>Sectors</Dropdown.Item>
                  <Dropdown.Item>Brands</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Menu.Menu>
            <Menu.Menu position="right">
              <Menu.Item>
                <Button primary>Sign Up</Button>
              </Menu.Item>
            </Menu.Menu>
          </Menu>
          <AppDashboard
      products={products}
    />
        </Container>
      
      </Fragment>
      
    </div>
  );
};

export default Dashboard;
