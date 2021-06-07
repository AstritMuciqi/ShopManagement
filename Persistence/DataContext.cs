using System;
using Domain;
using Microsoft.EntityFrameworkCore;

namespace Persistence
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {

        }
        public DbSet<Sector> Sector{get;set;}

        public DbSet<Brand> Brand{get;set;}

        public DbSet<Product> Product{get;set;}

        public DbSet<Stock> Stock{get;set;}




    }
}
