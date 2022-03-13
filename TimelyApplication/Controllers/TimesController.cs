#nullable disable
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TimelyApplication.DatabaseContext;
using TimelyApplication.Models;

namespace TimelyApplication.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class TimesController : ControllerBase
  {
    private readonly TimelyDbContext _context;

    public TimesController(TimelyDbContext context)
    {
      _context = context;
    }

    // GET: api/Times
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Time>>> GetTimes()
    {
      return await _context.Times.ToListAsync();
    }

    // GET: api/Times/5
    [HttpGet("{id}")]
    public async Task<ActionResult<Time>> GetTime(int id)
    {
      var time = await _context.Times.FindAsync(id);

      if (time == null)
      {
        return NotFound();
      }

      return time;
    }

    // PUT: api/Times/5
    // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
    // [HttpPut("{id}")]
    // public async Task<IActionResult> PutTime(int id, Time time)
    // {
    //   if (id != time.Id)
    //   {
    //     return BadRequest();
    //   }

    //   _context.Entry(time).State = EntityState.Modified;

    //   try
    //   {
    //     await _context.SaveChangesAsync();
    //   }
    //   catch (DbUpdateConcurrencyException)
    //   {
    //     if (!TimeExists(id))
    //     {
    //       return NotFound();
    //     }
    //     else
    //     {
    //       throw;
    //     }
    //   }

    //   return NoContent();
    // }

    // POST: api/Times
    // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
    [HttpPost]
    public async Task<ActionResult<Time>> PostTime(Time time)
    {
      // _context.Database.OpenConnection();
      // _context.Database.ExecuteSqlRaw("SET IDENTITY_INSERT dbo.Times OFF;", 1);
      _context.Times.Add(time);
      await _context.SaveChangesAsync();
      // _context.Database.CloseConnection();
      // _context.Database.OpenConnection();
      // try
      // {
      //   _context.Database.ExecuteSqlRaw("SET IDENTITY_INSERT dbo.Times ON;");
      //   await _context.SaveChangesAsync();
      //   _context.Database.ExecuteSqlRaw("SET IDENTITY_INSERT dbo.Times OFF;");
      // }
      // finally
      // {
      //   _context.Database.CloseConnection();
      // }
      return CreatedAtAction("GetTime", new { id = time.TimeId }, time);
    }

    // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754

    // DELETE: api/Times/5
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteTime(int id)
    {
      var time = await _context.Times.FindAsync(id);
      if (id == null)
      {
        return NotFound();
      }

      _context.Times.Remove(time);
      await _context.SaveChangesAsync();

      return NoContent();
    }

    private bool TimeExists(int id)
    {
      return _context.Times.Any(e => e.TimeId == id);
    }
  }
}
