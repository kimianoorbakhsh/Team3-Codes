using Microsoft.AspNetCore.Mvc;
using Project.Utils;

namespace Project.Controllers
{
    [ApiController]
    [Route("[controller]/[Action]")]
    public class SearchConroller : ControllerBase
    {


        [HttpGet]
        public IActionResult Get()
        {
            return Ok("Hi");
        }

        [HttpPost]
        public IActionResult GetMatchedResult([FromBody] string input)
        {
            var manager = new Manager();
            var result = manager.Search(input);
            return Ok(result);
        }

    }
}