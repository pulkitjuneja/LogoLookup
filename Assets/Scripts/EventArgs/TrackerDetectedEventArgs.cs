using System;

public class TrackerDetectedEventArgs : EventArgs {
  public string objectName ;

  public TrackerDetectedEventArgs(string name) {
    objectName = name ;
  }
}