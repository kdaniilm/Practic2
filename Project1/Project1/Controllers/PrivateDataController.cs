using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Project1.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project1.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class PrivateDataController : ControllerBase
    {
        
        [HttpGet]
        [Authorize(Roles = "true")]
        [Route("get-manager")]
        public IEnumerable<string> GetManager()
        {
            return new string[] { "First manager data", "Second manager data" };
        }
        [HttpGet]
        [Authorize(Roles = "false")]
        [Route("get-editor")]
        public IEnumerable<string> GetEditor()
        {

            return new string[] { "First editor data", "Second editor data" };
        }
    }
}
