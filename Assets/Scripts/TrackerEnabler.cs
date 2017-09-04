using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class TrackerEnabler : MonoBehaviour {

  public static bool isTracking = false;

  void Awake() {
    EventManager.instance.StartListening(EventTypes.ObjectDetected);
    Debug.Log("event is pub");
  }
  void Update() {
    if (GenericInputHelper.getTap()) {
      isTracking = !isTracking;
      Debug.Log("tracking" + isTracking);
    }
  }
}
