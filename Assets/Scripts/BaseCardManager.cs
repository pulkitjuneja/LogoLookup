using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public abstract class BaseCardManager : MonoBehaviour {

  public virtual void Start() {
    EventManager.instance.subscribe<TrackerDetectedEventArgs>(EventTypes.ObjectDetected, startFetch);
  }

  public virtual void OnDisable() {
    EventManager.instance.unsubscribe<TrackerDetectedEventArgs>(EventTypes.ObjectDetected, startFetch);
  }

  public void startFetch(TrackerDetectedEventArgs e) {
    StartCoroutine(fetchAndUpdate(e));
  }

  public abstract IEnumerator fetchAndUpdate(TrackerDetectedEventArgs e);

}