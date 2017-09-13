using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using System;

public class Buttons : MonoBehaviour {
  Animator LogoInfoScreenAnimator;
  Button button;
  void Start() {
    LogoInfoScreenAnimator = GameObject.Find("LogoInfoScreen").GetComponent<Animator>();
    button = GetComponent<Button>();
    attachBehaviour();
  }

  void attachBehaviour() {
    if (this.gameObject.name == "close") {
      button.onClick.AddListener(() => closeLogoInfo());
    }
  }
  public void closeLogoInfo() {
    LogoInfoScreenAnimator.SetBool("visible", false);
    EventManager.instance.Fire<EventArgs>(EventTypes.CloseScreens,null);
  }

}