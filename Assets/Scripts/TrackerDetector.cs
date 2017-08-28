using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using Vuforia;

public class TrackerDetector : MonoBehaviour,ITrackableEventHandler {

	private TrackableBehaviour mTrackableBehaviour;
	Animator LogoInfoScreenAnimator ;

	void Start() {
		LogoInfoScreenAnimator = GameObject.Find ("LogoInfoScreen").GetComponent<Animator> ();
		mTrackableBehaviour = GetComponent<TrackableBehaviour>();
		if (mTrackableBehaviour)
		{
			mTrackableBehaviour.RegisterTrackableEventHandler(this);
		}
	}

	public void OnTrackableStateChanged(TrackableBehaviour.Status previousStatus,TrackableBehaviour.Status newStatus) {
		if (newStatus == TrackableBehaviour.Status.DETECTED || newStatus == TrackableBehaviour.Status.TRACKED || newStatus == TrackableBehaviour.Status.EXTENDED_TRACKED) {
			LogoInfoScreenAnimator.SetBool ("visible", true);
			Debug.Log (mTrackableBehaviour.TrackableName + "found");
		} else {
			Debug.Log (mTrackableBehaviour.TrackableName + "lost");
			LogoInfoScreenAnimator.SetBool ("visible", false);
		}
	}
}
