$ '.to-be-select img' .click (event)!->
	target = event.target or event.src-element
	$ '.container img' .src target.src