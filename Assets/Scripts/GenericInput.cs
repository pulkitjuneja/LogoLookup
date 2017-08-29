using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public static class GenericInput {

	static KeyCode tapKey = KeyCode.Space ;

	public static bool getTap() {
		var tap = (Input.touchCount > 0) || (Input.GetKeyDown (tapKey));
		return tap;
	}

}
