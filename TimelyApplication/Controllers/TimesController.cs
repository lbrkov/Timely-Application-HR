﻿#nullable disable
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
    [HttpPut("{id}")]
    public async Task<IActionResult> PutTime(int id, Time time)
    {
      if (id != time.TimeId)
      {
        return BadRequest();
      }

      _context.Entry(time).State = EntityState.Modified;

      try
      {
        await _context.SaveChangesAsync();
      }
      catch (DbUpdateConcurrencyException)
      {
        if (!TimeExists(id))
        {
          return NotFound();
        }
        else
        {
          throw;
        }
      }

      return NoContent();
    }

    [HttpPatch("{id}")]
    public async Task<IActionResult> PatchStopTime(int id, DateTime stoptime)
    {
      stoptime = DateTime.Now;
      var string_stoptime = stoptime.ToString("MM/dd/yyyy HH:mm:ss");
      var stoptimeid = await _context.Times.FindAsync(id);
      stoptimeid.StopTime = string_stoptime;
      await _context.SaveChangesAsync();
      return NoContent();
    }
    [HttpPatch("{id}/{duration}")]
    public async Task<IActionResult> PatchDuration(int id, string duration)
    {
      var durationbyid = await _context.Times.FindAsync(id);
      durationbyid.Duration = duration;
      await _context.SaveChangesAsync();
      return NoContent();
    }

    // POST: api/Times
    [HttpPost]
    public async Task<ActionResult<Time>> PostTime(Time time)
    {
      _context.Times.Add(time);
      await _context.SaveChangesAsync();

      return CreatedAtAction("GetTime", new { id = time.TimeId }, time);
    }

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
