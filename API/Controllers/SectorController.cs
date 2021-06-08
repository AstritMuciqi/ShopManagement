using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Application.Sectors;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SectorController : ControllerBase
    {
       private readonly IMediator _mediator;

        public SectorController(IMediator mediator)
        {
            _mediator = mediator;
        }
        
        [HttpGet]
        
        public async Task<ActionResult<List<Sector>>> List()
        {
           return await _mediator.Send(new List.Query()); 
        }

        [HttpGet("{id}")]

        public async Task<ActionResult<Sector>> SectorDetails(Guid id)
        {
            return await _mediator.Send(new SectorDetails.Query{SectorId=id});
        }
 
    }
}

