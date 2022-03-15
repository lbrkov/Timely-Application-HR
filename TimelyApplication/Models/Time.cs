using System.ComponentModel.DataAnnotations;
using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace TimelyApplication.Models
{
  public class Time
  {

    [Key]
    public int TimeId { get; set; }
    public string StartTime { get; set; } = null!; /*= DateTime.Now; */
    public string StopTime { get; set; } = null!;/*= DateTime.Now; */
    public string ProjectName { get; set; } = null!;
    public string? Duration { get; set; }

  }
}
