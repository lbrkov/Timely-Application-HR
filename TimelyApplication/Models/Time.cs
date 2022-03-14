using System.ComponentModel.DataAnnotations;
using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace TimelyApplication.Models
{
  public class Time
  {

    [Key]
    public int TimeId { get; set; }
    public string StartTime { get; set; } /*= DateTime.UtcNow; */
    public string StopTime { get; set; } /*= DateTime.UtcNow; */
    public string ProjectName { get; set; } = null!;
    public string Duration { get; set; }

    //public TimeSpan CalcDuration() => Duration = StopTime - StartTime;

  }
}
