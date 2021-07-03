import React,{useState , useEffect , Fragment} from 'react';
import {Container, Divider, Grid, List} from 'semantic-ui-react';
import axios from 'axios';
import { IAdresaF } from '../models/adresaF';

import Faturimi from './FaturimiLayout/Faturimi';
//import './styles.css';
import { IProduct } from '../models/product';
import Dashboard from './DashboardLayout/DashboardFinal';
import { Route } from 'react-router';
import ProductDashboard from '../../feautures/Details/DashboardDetails/Product/ProductDashboard';
import SectorDashboard from '../../feautures/Details/DashboardDetails/Sector/SectorDashboard';
import { ISector } from '../models/sector';
import { IBrand } from '../models/brand';
import BrandDashboard from '../../feautures/Details/DashboardDetails/Brands/BrandDashboard';


const App = () => { 
  const [products, setProducts] = useState<IProduct[]>([]);
  const [sectors, setSectors] = useState<ISector[]>([]);
  const [brands, setBrands] = useState<IBrand[]>([]);
  
    const [selectedProduct, setSelectedProduct] = useState<IProduct | null>(
      null
    );
    const [editMode, setEditMode] = useState(false);
  
    const handleOpenCreateForm = () => {
      setSelectedProduct(null);
      setSelectedSector(null);

      setEditMode(true);
      
    }
  
    const handleCreateProduct = (product: IProduct) => {
      setProducts([...products, product]);
      setSelectedProduct(product);
      setEditMode(false);
    }
  
    const handleEditProduct = (product: IProduct) => {
      setProducts([...products.filter(p => p.productId !== product.productId), product])
      setSelectedProduct(product);
      setEditMode(false);
    }
  
    const handleDeleteProduct = (productId: string) => {
      setProducts([...products.filter(p => p.productId !== productId)])
    }
  
    const handleSelectProduct = (productId: string) => {
      setSelectedProduct(products.filter(p => p.productId === productId)[0]);
      setEditMode(false);
    };
    const [selectedSector, setSelectedSector] = useState<ISector | null>(
      null
    );
  
    const handleCreateSector = (sector: ISector) => {
      setSectors([...sectors, sector]);
      setSelectedSector(sector);
      setEditMode(false);
    }
  
    const handleEditSector = (sector: ISector) => {
      setSectors([...sectors.filter(s => s.sectorId !== sector.sectorId), sector])
      setSelectedSector(sector);
      setEditMode(false);
    }
  
    const handleDeleteSector = (sectorId: string) => {
      setSectors([...sectors.filter(s => s.sectorId !== sectorId)])
    }
  
    const handleSelectSector = (sectorId: string) => {
      setSelectedSector(sectors.filter(s => s.sectorId === sectorId)[0]);
      setEditMode(false);
    };
    const [selectedBrand, setSelectedBrand] = useState<IBrand | null>(
      null
    );
  
    const handleCreateBrand = (brand: IBrand) => {
      setBrands([...brands, brand]);
      setSelectedBrand(brand);
      setEditMode(false);
    }
  
    const handleEditBrand = (brand: IBrand) => {
      setBrands([...brands.filter(b => b.brandId !== brand.brandId), brand])
      setSelectedBrand(brand);
      setEditMode(false);
    }
  
    const handleDeleteBrand = (brandId: string) => {
      setBrands([...brands.filter(b => b.brandId !== brandId)])
    }
  
    const handleSelectBrand = (brandId: string) => {
      setSelectedBrand(brands.filter(b => b.brandId === brandId)[0]);
      setEditMode(false);
    };
  
    useEffect(() => {
      axios
        .get<IProduct[]>("http://localhost:5000/api/product")
        .then((response) => {
          let products: IProduct[] = [];
          response.data.forEach((product) => {
            product.productName = product.productName.split(".")[0];
            products.push(product);
          });
          setProducts(products);
        });
    }, []);
    useEffect(() => {
      axios
        .get<ISector[]>("http://localhost:5000/api/sector")
        .then((response) => {
          let sectors: ISector[] = [];
          response.data.forEach((sector) => {
            sector.sectorName = sector.sectorName.split(".")[0];
            sectors.push(sector);
          });
          setSectors(sectors);
        });
    }, []);
    useEffect(() => {
      axios
        .get<IBrand[]>("http://localhost:5000/api/brand")
        .then((response) => {
          let brands: IBrand[] = [];
          response.data.forEach((brand) => {
            brand.brandName = brand.brandName.split(".")[0];
            brands.push(brand);
          });
          setBrands(brands);
        });
    }, []);
  


    

    return (
      <Container>
        <Route path="/faturimi" component={Faturimi} />

        <Route path="/dashboard" component={Dashboard} />
        <Route path="/dashboard/productmaster/product">
          <ProductDashboard
            products={products}
            selectProduct={handleSelectProduct}
            selectedProduct={selectedProduct}
            editMode={editMode}
            setEditMode={setEditMode}
            setSelectedProduct={setSelectedProduct}
            createProduct={handleCreateProduct}
            editProduct={handleEditProduct}
            deleteProduct={handleDeleteProduct}
            openCreateForm={handleOpenCreateForm}
          />
        </Route>
        <Route path="/dashboard/productmaster/sectors">
          <SectorDashboard
            sectors={sectors}
            selectSector={handleSelectSector}
            selectedSector={selectedSector}
            editMode={editMode}
            setEditMode={setEditMode}
            setSelectedSector={setSelectedSector}
            createSector={handleCreateSector}
            editSector={handleEditSector}
            deleteSector={handleDeleteSector}
            openCreateForm={handleOpenCreateForm}
          />
        </Route>
        <Route path="/dashboard/productmaster/brands">
          <BrandDashboard
            brands={brands}
            selectBrand={handleSelectBrand}
            selectedBrand={selectedBrand}
            editMode={editMode}
            setEditMode={setEditMode}
            setSelectedBrand={setSelectedBrand}
            createBrand={handleCreateBrand}
            editBrand={handleEditBrand}
            deleteBrand={handleDeleteBrand}
            openCreateForm={handleOpenCreateForm}
          />
        </Route>
      </Container>
    );
    
    
}
 

export default App;