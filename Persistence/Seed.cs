using System.Collections.Generic;
using System.Linq;
using Domain;

namespace Persistence
{
    public class Seed
    {
        public static void SeedData(DataContext context){
            if(!context.Sector.Any())
            {
                var sectors = new List<Sector>
                {
                    new Sector{
                        SectorName="Laptopa",  
                    },
                    new Sector{
                        SectorName="Kompjutera",  
                    },
                    new Sector{
                        SectorName="Aksesore",  
                    }
                };
                context.Sector.AddRange(sectors);
                context.SaveChanges();
            }

            if(!context.Brand.Any())
            {
                var brands = new List<Brand>
                {
                    new Brand{
                        BrandName="Asus",  
                    },
                    new Brand{
                        BrandName="Dell",  
                    },
                    new Brand{
                        BrandName="Lenovo",  
                    }
                };
                context.Brand.AddRange(brands);
                context.SaveChanges();
            }
            if(!context.Product.Any())
            {
                var products = new List<Product>
                {
                    new Product{
                        
                        ProductName="Gaming Laptop",
                        Sector="Laptop",
                        Brand="Asus",
                        ValueOfProduct=399.99F,
                        ModelYear="2020/12/12",
                        PhotoFileName="anynomous.png",
                        Quantity=10,
                        Description="Laptop i fuqishem per nje eksperienc ne lojrat ma te reja"

                        

                    },
                    new Product{
                        ProductName="Gaming Laptop",
                        Sector="Laptop",
                        Brand="Lenovo",
                        ValueOfProduct=499.99F,
                        ModelYear="2020/12/12",
                        PhotoFileName="anynomous.png",
                        Quantity=30,
                        Description="Laptop i fuqishem per nje eksperienc ne lojrat ma te reja"  
                    },
                    new Product{
                        ProductName="Gaming Laptop",
                        Sector="Laptop",
                        Brand="Dell",
                        ValueOfProduct=599.99F,
                        ModelYear="2020/12/12",
                        PhotoFileName="anynomous.png",
                        Quantity=20,
                        Description="Laptop i fuqishem per nje eksperienc ne lojrat ma te reja"  
                    }
                };
                context.Product.AddRange(products);
                context.SaveChanges();
            }
            

        }
    }
}