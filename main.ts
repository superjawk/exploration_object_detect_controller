handlebit.onHandleButtonPressed(handlebit.HandleButton.B2, function () {
    radio.sendString("B2")
})
handlebit.onHandleButtonPressed(handlebit.HandleButton.B1, function () {
    radio.sendString("B1")
})
handlebit.handlebitInit()
radio.setGroup(1)
basic.forever(function () {
    if (handlebit.handle_getHandleSensorValue(handlebit.HandleSensorValue.JOYSTICK_X1) < -50) {
        radio.sendString("left")
    } else if (handlebit.handle_getHandleSensorValue(handlebit.HandleSensorValue.JOYSTICK_X1) >= 50) {
        radio.sendString("right")
    } else if (handlebit.handle_getHandleSensorValue(handlebit.HandleSensorValue.JOYSTICK_Y1) < -50) {
        radio.sendString("backward")
    } else if (handlebit.handle_getHandleSensorValue(handlebit.HandleSensorValue.JOYSTICK_Y1) >= 50) {
        radio.sendString("forward")
    } else if (handlebit.handle_getHandleSensorValue(handlebit.HandleSensorValue.JOYSTICK_X2) < 0) {
    	
    } else if (handlebit.handle_getHandleSensorValue(handlebit.HandleSensorValue.JOYSTICK_X2) >= 0) {
    	
    } else if (handlebit.handle_getHandleSensorValue(handlebit.HandleSensorValue.JOYSTICK_Y2) < 0) {
    	
    } else if (handlebit.handle_getHandleSensorValue(handlebit.HandleSensorValue.JOYSTICK_Y2) >= 0) {
    	
    } else {
    	
    }
})
