import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Navbar from '../../../feautures/nav/NavBar';
import ImageSlider from '../../../feautures/Slider/components/ImageSlider';
import { SliderData } from '../../../feautures/Slider/components/SliderData';
import { ISector } from '../../models/sector';
import '../styles.css';

export const Home = () => {
  const [sectors, setSectors] = useState<ISector[]>([]);

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


  

  
  return (
    <div>
      <Navbar sectors={sectors} />
      <ImageSlider slides={SliderData} />
    </div>
  );
}
