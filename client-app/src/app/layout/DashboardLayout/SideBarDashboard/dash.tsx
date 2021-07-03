import React,{useState , useEffect , Fragment, FC} from 'react';
import {Button, Container, Divider, Dropdown, Grid, Icon, Input, List, Menu} from 'semantic-ui-react';
import axios from 'axios';

//import './styles.css';



import $ from 'jquery'; 
import { IProduct } from '../../../models/product';
import { Link } from 'react-router-dom';
import { useNavigation } from '@react-navigation/native';
import { useHistory } from "react-router-dom";
import '../styles.css';



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

const Dash = () => { 
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

    let history = useHistory();
    const [showMenu,setShowMenu]=useState(false);


    return (
      <div>
        {/* <DashboardLayout/> */}
        <div>
          <Menu stackable>
            <Menu.Item name="Dashboard Menu">
              <Button onClick={() => setShowMenu(!showMenu)}>
                <Icon name="list" />
              </Button>
            </Menu.Item>

            <Menu.Item>
              <Input className="icon" icon="search" placeholder="Search..." />
            </Menu.Item>

            <Menu.Item position="right">
              <Input
                action={{ type: "submit", content: "Go" }}
                placeholder="Navigate to..."
              />
            </Menu.Item>
            <Menu.Item>
              <Button primary negative>
                Log out
              </Button>
            </Menu.Item>
          </Menu>
        </div>
        {showMenu ? (
          <div>
            <Menu className="menu" vertical inverted>
              <Menu.Item>
                <h3>Product Master</h3>
              </Menu.Item>
              <Menu.Item
                className="itemAdmins"
                name="Product"
                as={Link}
                to="/dashboard/productmaster/product"
              />
              <Menu.Item
                className="itemAdmins"
                name="Sectors"
                as={Link}
                to="/dashboard/productmaster/sectors"
              />
              <Menu.Item
                className="itemAdmins"
                name="Brands"
                as={Link}
                to="/dashboard/productmaster/brands"
              />
              <Menu.Item>
                <h3>Users</h3>
              </Menu.Item>
              {/* <Icon name="list" /> */}
              <Menu.Item className="itemAdmins" name="Admins" />
              <Menu.Item className="itemAdmins" name="Clients" />

              {/* <Dropdown item text="Display Options">
                <Dropdown.Menu>
                  <Dropdown.Header>Text Size</Dropdown.Header>
                  <Dropdown.Item>Small</Dropdown.Item>
                  <Dropdown.Item>Medium</Dropdown.Item>
                  <Dropdown.Item>Large</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown> */}
            </Menu>
          </div>
        ) : null}

        {/* <Route path="/overview/revenue" component={Revenue} exact></Route>
        <Route path="/order" component={Order} exact></Route>
        <Route path="/history" component={History} exact></Route>
        <Route path="/configurations" component={Configurations} exact></Route> */}
      </div>
    );
  }
 

export default Dash;
