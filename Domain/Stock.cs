using System;

namespace Domain
{
    public class Stock:Product
    {
        public Guid ProductId {get; set;}

        public int Quantity{get; set;}
    }
}