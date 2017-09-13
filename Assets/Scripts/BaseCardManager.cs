using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using System;

public abstract class BaseCardManager : MonoBehaviour {

  public virtual void Start() {
    EventManager.instance.subscribe<TrackerDetectedEventArgs>(EventTypes.ObjectDetected, startFetch);
    EventManager.instance.subscribe<EventArgs>(EventTypes.CloseScreens, closeScreen);
  }

  public virtual void OnDisable() {
    EventManager.instance.unsubscribe<TrackerDetectedEventArgs>(EventTypes.ObjectDetected, startFetch);
    EventManager.instance.unsubscribe<TrackerDetectedEventArgs>(EventTypes.ObjectDetected, closeScreen);
  }

  public void startFetch(TrackerDetectedEventArgs e) {
    StartCoroutine(fetchAndUpdate(e));
  }

  public void closeScreen(EventArgs e) //crude solution , need to think of better way
  {
    transform.Find("DataHolder").gameObject.SetActive(false);
    transform.Find("Loader").gameObject.SetActive(false);
  }

  public abstract IEnumerator fetchAndUpdate(TrackerDetectedEventArgs e);

}