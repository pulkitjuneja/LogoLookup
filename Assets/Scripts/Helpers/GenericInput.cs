using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public static class GenericInputHelper {

  static KeyCode tapKey = KeyCode.Space;

  public static bool getTap() {
    bool tap;
    if (Application.platform == RuntimePlatform.Android || Application.platform == RuntimePlatform.IPhonePlayer) {
      tap = (Input.touchCount > 0 && Input.GetTouch(0).phase == TouchPhase.Began);
    } else {
      tap = Input.GetKeyDown(KeyCode.Space);
    }
    return tap;
  }

}
