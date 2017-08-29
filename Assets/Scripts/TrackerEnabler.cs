using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class TrackerEnabler : MonoBehaviour {

	public static bool isTracking = false ;

	void Update () {
		if(GenericInput.getTap()) {
			isTracking = !isTracking;
			Debug.Log ("tracking" + isTracking);
		}
	}
}
