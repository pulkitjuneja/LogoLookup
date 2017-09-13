using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class TrackerEnabler : MonoBehaviour {

  public static bool isTracking = false;
  Text scannerIndicator;

  void Awake() {
    EventManager.instance.StartListening(EventTypes.ObjectDetected);
    EventManager.instance.StartListening(EventTypes.CloseScreens);
    Debug.Log("event is pub");
  }
  void Start() {
    scannerIndicator = GetComponent<Text>();
  }
  void Update() {
    if (GenericInputHelper.getTap()) {
      isTracking = !isTracking;
      scannerIndicator.text = "tracking " + isTracking;
    }
  }
}
