using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using TopSpotsAPI.Models;
using Newtonsoft.Json;
using System.IO;

namespace TopSpotsAPI.Controllers
{
    public class TopSpotsController : ApiController
    {
        // GET /api/TopSpots
        public IEnumerable<TopSpots> Get()
        {
            TopSpots[] topspot = JsonConvert.DeserializeObject<TopSpots[]>(File.ReadAllText(@"C:\Users\robertmartindelcampo\Documents\dev\13-TopSpotsAPI\topspots.json"));

            return topspot;
        }
    }
}
