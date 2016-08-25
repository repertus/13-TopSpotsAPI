using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TopSpotsAPI.Models
{
    public class TopSpots
    {
        public string name { get; set; }
        public string description { get; set; }
        public float[] location { get; set; }
    }
}