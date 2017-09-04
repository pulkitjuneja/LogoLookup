using System;
using System.Collections.Generic;
using UnityEngine;


public class EventManager
{
	public delegate void EventDelegate<T> (T e) where T : EventArgs ;
	public delegate void EventDelegate (EventArgs e);

	Dictionary<EventTypes,EventDelegate> events ;
	Dictionary<System.Delegate,EventDelegate> eventsLookup;
	private static EventManager eventManager;

	private EventManager ()
	{
		events = new Dictionary<EventTypes, EventDelegate>();
		eventsLookup = new Dictionary<Delegate, EventDelegate>();
	}

	public static EventManager instance {
		get {
			if(eventManager == null ) {
				eventManager = new EventManager ();
			}
			return eventManager;
		}
	}

	public void StartListening(EventTypes name) {
		if (!events.ContainsKey (name)) {
			events.Add(name, new EventDelegate(delegate {}));
		}
	}

	public void subscribe<T>(EventTypes name, EventDelegate<T> act) where T : EventArgs {

		if(eventsLookup.ContainsKey(act)) {
			Debug.Log("event has already be added");
			return ; 
		}

		EventDelegate internalDelegate = (e) => act ((T)e);

		eventsLookup [act] = internalDelegate;

		if (!events.ContainsKey (name)) {
			Debug.Log ("event has not been published  " +  name);
			return;
		}
		events [name] += internalDelegate;
	}

	public void Fire<T> (EventTypes name , T args) where T : EventArgs {
		if (!events.ContainsKey (name)) {
			Debug.Log ("event has not been published");
			return;
		}

		events [name].Invoke (args);
	}

	public void unsubscribe <T> (EventTypes name , EventDelegate<T> act) where T : EventArgs {
		if(!eventsLookup.ContainsKey(act)) {
			Debug.Log ("delegate has not been regisered with event manager");
			return;
		}

		var internalDelegate = eventsLookup [act];

		if(!events.ContainsKey(name)) {
			Debug.Log ("no such event" + name);
			return;
		}

		events [name] -= internalDelegate;

		if (events[name] ==  null) {
			events.Remove (name);
		}

		eventsLookup.Remove (act);

	}

}
